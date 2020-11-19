import { Component, OnInit } from '@angular/core';
import { BaseCondition } from 'app/common';
import { Tip } from './tip.model';
import { TipsService } from './tips.service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {
  tip: Tip;
  tips: Tip[] = new Array<Tip>()
  page = 1;
  pageSize: number;
  totalRecords: number;
  condition: BaseCondition<Tip> = new BaseCondition<Tip>();
  constructor(
    private tipService: TipsService

  ) { }

  ngOnInit(): void {
    this.loadAll()
  }
  loadAll(condi?: BaseCondition<Tip>) {
    this.tipService.getAllTipsWithPaging(condi).subscribe((result) => {
      if (result.isSuccess) {
        this.tips = result.itemList;
        this.totalRecords = result.totalRows;
        console.log(this.tips);
        if (condi != undefined) {
          this.pageSize = condi.PageSize;
          this.page = condi.PageIndex;
          console.log(this.page);
          
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
    var condition: BaseCondition<Tip> = new BaseCondition<Tip>();
    if (this.condition.FilterRuleList) {
      condition.FilterRuleList = this.condition.FilterRuleList;
    }
    condition.PageIndex = page;
    condition.PageSize = pageSize || 5;
    
    this.loadAll(condition);
    console.log(condition);
  }
}
