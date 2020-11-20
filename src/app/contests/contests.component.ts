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

  loadAll(){
    this._service.getAllTipsWithPaging(this.condition).subscribe(res => {
      this.contest = res.itemList;
    })
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
