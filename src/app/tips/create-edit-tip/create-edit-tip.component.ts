import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { imgDTO } from 'model/img-dto';
import { AddNewTipDto, TipDto } from 'model/tip-dto';
import { TipsService } from '../tips.service';

@Component({
  selector: 'app-create-edit-tip',
  templateUrl: './create-edit-tip.component.html',
  styleUrls: ['./create-edit-tip.component.css']
})
export class CreateEditTipComponent implements OnInit {
  files: imgDTO[] = [];
  fileUpload: any;
  tip: TipDto = new TipDto();

  constructor(
    private sanitization: DomSanitizer,
    private _service: TipsService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.tip.id = this.activatedRoute.snapshot.params.id ? parseInt(this.activatedRoute.snapshot.params.id) : 0;
    if(this.tip.id != 0){
      this._service.getById(this.tip.id).subscribe(res => {
        this.tip = res.item;
      })
    } else {
      this.tip.status = 2;
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

  onChangeCB(event){
    if(event.checked){
      this.tip.status = 3;
    } else {
      this.tip.status = 2;
    }
  }

  getURL(url) {
    return this.sanitization.bypassSecurityTrustUrl(URL.createObjectURL(url));
  }

  deleteAttachment(index) {
    this.files.splice(index, 1)
  }

  onSave() {
    this.tip.userId = 3;
    if(this.tip.id == 0){
      this._service.addNewTip(this.tip).subscribe(res => {
        console.log(res);
        history.back();
      })
    } else {
      this._service.updateTip(this.tip).subscribe(res => {
        console.log(res);
        history.back();
      })
    }
  }

}
