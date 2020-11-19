import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrl, BaseCondition, HttpHeadersOptions, ReturnResult } from 'app/common';
import { Recipe } from './Recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor( private httpClient : HttpClient) { }
  public getAllRecipesWithPaging(condi? : BaseCondition<Recipe>) {
    var condition = {};
    if (condi != undefined) {
      condition = {
        PageIndex : condi.PageIndex,
        PageSize: 5,
        FilterRuleList: condi.FilterRuleList
      }
    }
    else {
      condition = {
        PageIndex : 1,
        PageSize: 5
      }

    }
    return this.httpClient.post<ReturnResult<Recipe>>(ApiUrl.apiUrl + 'RecipesOutside/GetAllRecipesWithPaging',JSON.stringify(condition), { headers: HttpHeadersOptions.headers });
  }
}
