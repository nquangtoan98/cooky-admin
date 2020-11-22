import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { BaseCondition } from 'app/common';
import { RecipesService } from 'app/recipes/recipes-service.service';
import { Recipe, RecipeDto } from 'model/recipe-dto';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

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
    this.recipeService.getAllRecipesPendingWithPaging(condi).subscribe((result) => {
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

  onApprove(id){
    this.recipeService.approveRecipe(id).subscribe(res=>{
      this.loadAll();
    })
  }
  onReject(id){
    this.recipeService.rejectRecipe(id).subscribe(res=>{
      this.loadAll();
    })
  }

}
