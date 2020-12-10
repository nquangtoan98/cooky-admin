import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseCondition, ReturnResult, ApiUrl, HttpHeadersOptions } from 'app/common';
import { AnnouncementDto } from 'model/announcement-dto';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {

  constructor(private httpClient: HttpClient) { }

  public getAllAnnouncementWithPaging(condi?: BaseCondition<AnnouncementDto>) {
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
    return this.httpClient.post<ReturnResult<AnnouncementDto>>(ApiUrl.apiUrl + 'AnnouncementOutside/GetAllAnnouncementWithPaging', JSON.stringify(condition), { headers: HttpHeadersOptions.headers });
  }
}
