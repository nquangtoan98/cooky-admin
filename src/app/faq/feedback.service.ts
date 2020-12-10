import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseCondition, ReturnResult, ApiUrl, HttpHeadersOptions } from 'app/common';
import { FeedbackDto } from 'model/feedback-dto';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private httpClient: HttpClient) { }

  public getAllFeedbackWithPaging(condi?: BaseCondition<FeedbackDto>) {
    var condition = {};
    if (condi != undefined) {
      condition = {
        PageIndex: condi.PageIndex,
        PageSize: 5,
        FilterRuleList: condi.FilterRuleList
      }
    }
    else {
      condition = {
        PageIndex: 1,
        PageSize: 5
      }

    }
    return this.httpClient.post<ReturnResult<FeedbackDto>>(ApiUrl.apiUrl + 'FeedbackOutside/GetAllFeedbackWithPaging', JSON.stringify(condition), { headers: HttpHeadersOptions.headers });
  }
}
