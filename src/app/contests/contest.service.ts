import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrl, BaseCondition, HttpHeadersOptions, ReturnResult } from 'app/common';
import { ContestDto } from 'model/contest-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContestService {

  constructor(private httpClient : HttpClient) { }
  public getAllContestsWithPaging(condi? : BaseCondition<ContestDto>) {
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
    return this.httpClient.post<ReturnResult<ContestDto>>(ApiUrl.apiUrl + 'ContestOutside/GetAllContestWithPaging',JSON.stringify(condition), { headers: HttpHeadersOptions.headers });
  }

  getById(param: number): Observable<any>{
    return this.httpClient.post(ApiUrl.apiUrl + "ContestOutside/GetContestById", param);
  }

  deleteContest(param: number): Observable<any>{
    return this.httpClient.post(ApiUrl.apiUrl + "ContestOutside/DeleteContest", param);
  }

  addNewContest(param: ContestDto) : Observable<any>{
    return this.httpClient.post(ApiUrl.apiUrl + "ContestOutside/AddNewContest", param)
  }

  updateContest(param: ContestDto) : Observable<any>{
    return this.httpClient.post(ApiUrl.apiUrl + "ContestOutside/UpdateContest", param)
  }
}
