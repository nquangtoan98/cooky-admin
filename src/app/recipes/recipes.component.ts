import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { BaseCondition } from 'app/common';
import { CategoryDto } from 'model/category-dto';
import { Recipe } from './Recipe.model';
import { RecipesService} from './recipes-service.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  listCategory: CategoryDto[] = [];
  recipe: Recipe;
  recipes: Recipe[] = new Array<Recipe>()
  page = 1;
  pageSize: number;
  totalRecords: number;
  pageEvent: PageEvent;
  condition: BaseCondition<Recipe> = new BaseCondition<Recipe>();
  constructor(
    private recipeService: RecipesService
  ) { }

  ngOnInit(): void {
    this.loadAll();
  }
  loadAll(condi?: BaseCondition<Recipe>) {
    this.recipeService.getAllCategory().subscribe(res => {
      this.listCategory = res.itemList;
      console.log(this.listCategory);
      
    })
    this.recipeService.getAllRecipesWithPaging(condi).subscribe((result) => {
      if (result.isSuccess) {
        this.recipes = result.itemList;
        this.totalRecords = result.totalRows;
        if (condi != undefined) {
          this.pageSize = condi.PageSize;
          this.page = condi.PageIndex;
        }
        else {
          this.pageSize = 5;
          this.page = 1;
        }
      }
      else {
        alert("Lỗi: " + result.errorMessage);
      }

    }, (error) => {
      setTimeout(() => {
        alert("Lỗi: " + JSON.stringify(error));
      }, 5000);
    }, () => {
    });
    
    
  }
  loadPages(page: number, pageSize: number) {
    debugger
    var condition: BaseCondition<Recipe> = new BaseCondition<Recipe>();
    if (this.condition.FilterRuleList) {
      condition.FilterRuleList = this.condition.FilterRuleList;
    }
    condition.PageIndex = page;
    condition.PageSize = pageSize || 5;
    
    this.loadAll(condition);
    console.log(condition);
  }

  onDelete(id){
    this.recipeService.deleteRecipe(id).subscribe(res=>{
      this.loadAll();
    })
  }
}
