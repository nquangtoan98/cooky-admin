import { HttpClient } from '@angular/common/http';
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
  public response: string;

  constructor(
    private sanitization: DomSanitizer,
    private _service: TipsService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.tip.id = this.activatedRoute.snapshot.params.id ? parseInt(this.activatedRoute.snapshot.params.id) : 0;
    if (this.tip.id != 0) {
      this._service.getById(this.tip.id).subscribe(res => {
        this.tip = res.item;
        if (res.item.imageUrl) {
          let img = new imgDTO();
          img.url = "https://localhost:44357/" + res.item.imageUrl;
          this.files.push(img);
          this.tip.imageUrl = img.url;
        }
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

  getURL(url) {
    return this.sanitization.bypassSecurityTrustUrl(URL.createObjectURL(url));
  }

  deleteAttachment(index) {
    this.files.splice(index, 1)
  }

  onSave() {
    this.tip.userId = 3;
    this.tip.imageUrl = this.response;
    if(this.tip.id){
      this._service.updateTip(this.tip).subscribe(res => {
        console.log(res);
        history.back();
      })
    } else {
      this._service.addNewTip(this.tip).subscribe(res => {
        console.log(res);
        history.back();
      })
    }
  }
  public uploadAvtTips = (files) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post('https://localhost:44357/api/RecipesOutside/Upload', formData)
      .subscribe((response) => {
        this.response = JSON.parse(JSON.stringify(response)).dbPath;
        console.log(this.response);
        //
        let img = new imgDTO();
        img.url = "https://localhost:44357/" + this.response;
        console.log(img)
        this.files.push(img);
      });

  }

}
