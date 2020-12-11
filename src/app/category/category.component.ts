import { Component, OnInit } from '@angular/core';
import { CategoryDto } from 'model/category-dto';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category : CategoryDto[] = [];

  constructor(
    private _service: CategoryService
  ) { }

  ngOnInit(): void {
    this._service.getAllNameCategory().subscribe(res => {
      this.category = res.itemList;
    })
  }

  onDelete(id) {
    this._service.deleteCategory(id).subscribe(res => {

    })
  }

}
