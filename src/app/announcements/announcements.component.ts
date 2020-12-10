import { Component, OnInit } from '@angular/core';
import { BaseCondition } from 'app/common';
import { AnnouncementDto } from 'model/announcement-dto';
import { AnnouncementsService } from './announcements.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  announcement: AnnouncementDto[] = [];
  page = 1;
  pageSize: number;
  totalRecords: number;
  condition: BaseCondition<AnnouncementDto> = new BaseCondition<AnnouncementDto>();

  constructor(private _service: AnnouncementsService) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(condi?: BaseCondition<AnnouncementDto>) {
    this._service.getAllAnnouncementWithPaging(condi).subscribe((result) => {
      if (result.isSuccess) {
        this.announcement = result.itemList;
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
    var condition: BaseCondition<AnnouncementDto> = new BaseCondition<AnnouncementDto>();
    if (this.condition.FilterRuleList) {
      condition.FilterRuleList = this.condition.FilterRuleList;
    }
    condition.PageIndex = page;
    condition.PageSize = pageSize || 5;
    
    this.loadAll(condition);
    console.log(condition);
  }

}
