import { Component, OnInit } from '@angular/core';
import { BaseCondition } from 'app/common';
import { ContestDto } from 'model/contest-dto';
import { ContestService } from './contest.service';

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.css']
})
export class ContestsComponent implements OnInit {
  contest: ContestDto[] = [];
  page = 1;
  pageSize: number;
  totalRecords: number;
  condition: BaseCondition<ContestDto> = new BaseCondition<ContestDto>();

  constructor(
    private _service: ContestService,
  ) { }

  ngOnInit(): void {
    this.loadAll();
  }

  // loadAll(){
  //   this._service.getAllContestsWithPaging(this.condition).subscribe(res => {
  //     this.contest = res.itemList;
  //   })
  // }
  loadAll(condi?: BaseCondition<ContestDto>) {
    this._service.getAllContestsWithPaging(condi).subscribe((result) => {
      if (result.isSuccess) {
        this.contest = result.itemList;
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
    var condition: BaseCondition<ContestDto> = new BaseCondition<ContestDto>();
    if (this.condition.FilterRuleList) {
      condition.FilterRuleList = this.condition.FilterRuleList;
    }
    condition.PageIndex = page;
    condition.PageSize = pageSize || 5;
    
    this.loadAll(condition);
    console.log(condition);
  }

  stringToDate(input){
    const options = {year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date(input);
    return today.toLocaleDateString("en-US", options);
  }

  onDelete(id){
    this._service.deleteContest(id).subscribe(res => {
      console.log(res);
      this.loadAll();
    })
  }

}
