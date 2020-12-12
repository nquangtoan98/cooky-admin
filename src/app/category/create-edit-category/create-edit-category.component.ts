import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CategoryDto } from 'model/category-dto';
import { imgDTO } from 'model/img-dto';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-create-edit-category',
  templateUrl: './create-edit-category.component.html',
  styleUrls: ['./create-edit-category.component.css']
})
export class CreateEditCategoryComponent implements OnInit {

  categoryId: number;
  files: imgDTO[] = [];
  fileUpload: any;
  category: CategoryDto = new CategoryDto();
  public response: string;

  constructor(
    private sanitization: DomSanitizer,
    private _service: CategoryService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }


  ngOnInit(): void {
    this.category.id = this.activatedRoute.snapshot.params.id ? parseInt(this.activatedRoute.snapshot.params.id) : 0;
    if (this.category.id != 0) {
      this._service.getById(this.category.id).subscribe(res => {
        this.category = res.item;
        console.log(res);
        
        if (res.item.icon) {
          let img = new imgDTO();
          img.url = "https://localhost:44357/" + res.item.icon;
          this.files.push(img);
          this.category.icon = img.url;
          console.log(this.files);
        }
      })
    }
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

  getURL(url) {
    return this.sanitization.bypassSecurityTrustUrl(URL.createObjectURL(url));
  }

  deleteAttachment(index) {
    this.files.splice(index, 1)
  }

  onSave() {
    this.category.icon = this.response;
    if(this.category.id){
      this._service.updateCategory(this.category).subscribe(res => {
        console.log(res);
        history.back();
      })
    } else {
      this._service.addNewCategory(this.category).subscribe(res => {
        console.log(res);
        history.back();
      })
    }
  }
  public uploadAvtTips = (files) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post('https://localhost:44357/api/RecipesOutside/Upload', formData)
      .subscribe((response) => {
        this.response = JSON.parse(JSON.stringify(response)).dbPath;
        console.log(this.response);
        //
        let img = new imgDTO();
        img.url = "https://localhost:44357/" + this.response;
        console.log(img)
        this.files.push(img);
      });

  }
}
