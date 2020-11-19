import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrl, BaseCondition, HttpHeadersOptions, ReturnResult } from 'app/common';
import { Tip } from './tip.model';

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  constructor(private httpClient : HttpClient) { }
  public getAllTipsWithPaging(condi? : BaseCondition<Tip>) {
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
    return this.httpClient.post<ReturnResult<Tip>>(ApiUrl.apiUrl + 'TipsOutside/GetAllTipWithPaging',JSON.stringify(condition), { headers: HttpHeadersOptions.headers });
  }
}
