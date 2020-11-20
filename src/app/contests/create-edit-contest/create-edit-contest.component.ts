import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ContestDto } from 'model/contest-dto';
import { imgDTO } from 'model/img-dto';
import { ContestService } from '../contest.service';

@Component({
  selector: 'app-create-edit-contest',
  templateUrl: './create-edit-contest.component.html',
  styleUrls: ['./create-edit-contest.component.css']
})
export class CreateEditContestComponent implements OnInit {
  files: imgDTO[] = [];
  fileUpload: any;
  contest: ContestDto = new ContestDto();

  constructor(
    private sanitization: DomSanitizer,
    private _service: ContestService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.contest.id = this.activatedRoute.snapshot.params.id ? parseInt(this.activatedRoute.snapshot.params.id) : 0;
    if(this.contest.id != 0){
      this._service.getById(this.contest.id).subscribe(res => {
        this.contest = res.item;
      })
    }
  }

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      let img = new imgDTO();
      img.name = element.name;
      img.url = this.sanitization.bypassSecurityTrustUrl(URL.createObjectURL(event[0]))
      this.files.push(img);
    }
  }

  getURL(url) {
    return this.sanitization.bypassSecurityTrustUrl(URL.createObjectURL(url));
  }

  deleteAttachment(index) {
    this.files.splice(index, 1)
  }

  onSave() {
    this.contest.startDate = new Date(this.contest.startDate).toLocaleDateString("en-US");
    this.contest.endDate = new Date(this.contest.endDate).toLocaleDateString("en-US");
    this.contest.status = 1;
    if(this.contest.id == 0){
      this._service.addNewContest(this.contest).subscribe(res => {
        console.log(res);
        history.back();
      })
    } else {
      this._service.updateContest(this.contest).subscribe(res => {
        console.log(res);
        history.back();
      })
    }
  }

}
