import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CategoryDto } from 'model/category-dto';
import { imgDTO } from 'model/img-dto';
import { MaterialDTO } from 'model/material-dto';
import { RecipeDto } from 'model/recipe-dto';
import { StepDTO } from 'model/step-dto';
import { RecipesService } from '../recipes-service.service';

@Component({
  selector: 'app-create-edit-recipes',
  templateUrl: './create-edit-recipes.component.html',
  styleUrls: ['./create-edit-recipes.component.css']
})
export class CreateEditRecipesComponent implements OnInit {

  listCategory: CategoryDto[] = [];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  files: imgDTO[] = [];
  listStep: StepDTO[] = [];
  listMaterial: MaterialDTO[] = [];
  recipe: RecipeDto = new RecipeDto();
  categoryId;

  constructor(
    private _formBuilder: FormBuilder,
    private sanitization: DomSanitizer,
    private _service: RecipesService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._service.getAllCategory().subscribe(res => {
      this.listCategory = res.itemList;
    })
    this.recipe.id = this.activatedRoute.snapshot.params.id ? parseInt(this.activatedRoute.snapshot.params.id) : 0;
    if(this.recipe.id !== 0){
      this._service.getRecipeById(this.recipe.id).subscribe(res => {
        this.recipe = res.item;
        this.listStep = this.recipe.stepList;
        this.listStep.forEach(item => item.number = parseInt(item.name));
        this.listMaterial = this.recipe.materialList;
        this.listMaterial.forEach(item => item.number = parseInt(item.name));
      })
    } else {
      this.recipe.status = 2;
    }
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
    });

    this.listMaterial = [
      { number: 1, name: '1', quantity: '1' },
      { number: 2, name: '2', quantity: '2' },
      { number: 3, name: '3', quantity: '3' },
    ]

    this.listStep = [
      { name: "1", number: 1, description: '', note: '', imgUrl: '' },
      { name: "2", number: 2, description: '', note: '', imgUrl: '' },
    ]
  }

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      let img = new imgDTO();
      img.name = element.name;
      img.url = this.sanitization.bypassSecurityTrustUrl(URL.createObjectURL(event[0]))
      this.files.push(img);
    }
  }

  uploadImgStep(event, index) {
    let img = new imgDTO();
    img.name = event.name;
    img.url = this.sanitization.bypassSecurityTrustUrl(URL.createObjectURL(event[0]));
  }

  radioChange(event){
    this.categoryId = event.value;
  }

  getURL(url) {
    return this.sanitization.bypassSecurityTrustUrl(URL.createObjectURL(url));
  }

  deleteAttachment(index) {
    this.files.splice(index, 1)
  }

  onAddMaterial() {
    let newMaterial = { number: this.listMaterial.length + 1, name: '', quantity: '' } as MaterialDTO;
    this.listMaterial.push(newMaterial);
  }

  onRemoveMaterial(index) {
    this.listMaterial.splice(index - 1, 1);
    this.reloadListMaterial(this.listMaterial);
  }

  reloadListMaterial(list: MaterialDTO[]) {
    if (list) {
      for (let i = 0; i < list.length; i++) {
        list[i].number = i + 1;
      }
    }
  }

  onAddStep() {
    let newStep = { name: (this.listStep.length + 1).toString(), number: this.listStep.length + 1, description: '', note: '', imgUrl: '' } as StepDTO;
    this.listStep.push(newStep);
  }

  onRemoveStep(index) {
    this.listStep.splice(index - 1, 1);
    this.reloadListStep(this.listStep);
  }

  reloadListStep(list: StepDTO[]) {
    if (list) {
      for (let i = 0; i < list.length; i++) {
        list[i].number = i + 1;
        list[i].name = list[i].number.toString();
      }
    }
  }

  formatListStep(list: StepDTO[]){
    if(list){
      list = list.filter(item => {
        return item.description != '';
      })
    }
    this.reloadListStep(list);
    return list;
  }

  formatListMaterial(list: MaterialDTO[]){
    if(list){
      list = list.filter(item => {
        return item.name != '' && item.quantity != '';
      })
    }
    this.reloadListMaterial(list);
    return list;
  }

  onChangeCB(event){
    if(event.checked){
      this.recipe.status = 3
    } else {
      this.recipe.status = 2
    }
  }

  onSave() {
    this.recipe.categoryId = this.categoryId;
    this.recipe.stepList = this.formatListStep(this.listStep);
    this.recipe.materialList = this.formatListMaterial(this.listMaterial);
    if(this.recipe.id == 0){
      this._service.addNewRecipe(this.recipe).subscribe((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    } else {
      this._service.updateRecipe(this.recipe).subscribe((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    }
    
  }
}
