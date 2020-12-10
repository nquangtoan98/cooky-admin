import { Component, OnInit } from '@angular/core';
import { BaseCondition } from 'app/common';
import { FeedbackDto } from 'model/feedback-dto';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  feedback: FeedbackDto[] = [];
  page = 1;
  pageSize: number;
  totalRecords: number;
  condition: BaseCondition<FeedbackDto> = new BaseCondition<FeedbackDto>();

  constructor(private _service: FeedbackService) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(condi?: BaseCondition<FeedbackDto>) {
    this._service.getAllFeedbackWithPaging(condi).subscribe((result) => {
      if (result.isSuccess) {
        this.feedback = result.itemList;
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
    var condition: BaseCondition<FeedbackDto> = new BaseCondition<FeedbackDto>();
    if (this.condition.FilterRuleList) {
      condition.FilterRuleList = this.condition.FilterRuleList;
    }
    condition.PageIndex = page;
    condition.PageSize = pageSize || 5;
    
    this.loadAll(condition);
    console.log(condition);
  }

}
