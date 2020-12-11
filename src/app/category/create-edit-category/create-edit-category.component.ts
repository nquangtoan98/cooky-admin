import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-create-edit-category',
  templateUrl: './create-edit-category.component.html',
  styleUrls: ['./create-edit-category.component.css']
})
export class CreateEditCategoryComponent implements OnInit {

  categoryId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _service: CategoryService
  ) { }

  ngOnInit(): void {
    this.categoryId = this.activatedRoute.snapshot.params.id;
  }

}
