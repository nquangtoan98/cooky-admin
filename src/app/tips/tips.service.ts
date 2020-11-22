import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrl, BaseCondition, HttpHeadersOptions, ReturnResult } from 'app/common';
import { TipDto } from 'model/tip-dto';
import { Observable } from 'rxjs';
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
  public getAllTipsPendingWithPaging(condi? : BaseCondition<Tip>) {
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
    return this.httpClient.post<ReturnResult<Tip>>(ApiUrl.apiUrl + 'TipsOutside/GetAllTipPendingWithPaging',JSON.stringify(condition), { headers: HttpHeadersOptions.headers });
  }
  getById(param : number): Observable<any>{
    return this.httpClient.post(ApiUrl.apiUrl + 'TipsOutside/GetTipById', param);
  }

  deleteTip(param : number): Observable<any>{
    return this.httpClient.post(ApiUrl.apiUrl + 'TipsOutside/DeleteTip', param);
  }

  addNewTip(param: TipDto): Observable<any> {
    return this.httpClient.post(ApiUrl.apiUrl + 'TipsOutside/AddNewTip', param);
  }
  
  updateTip(param: TipDto): Observable<any> {
    return this.httpClient.post(ApiUrl.apiUrl + 'TipsOutside/UpdateTip', param);
  }
  approveTip(param : number): Observable<any>{
    return this.httpClient.post(ApiUrl.apiUrl + 'TipsOutside/ApproveTip', param);
  } 
  rejectTip(param : number): Observable<any>{
    return this.httpClient.post(ApiUrl.apiUrl + 'TipsOutside/RejectTip', param);
  }
}
