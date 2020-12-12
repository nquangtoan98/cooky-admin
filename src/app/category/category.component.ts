import { Component, OnInit } from '@angular/core';
import { CategoryDto } from 'model/category-dto';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: CategoryDto[] = [];

  constructor(
    private _service: CategoryService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this._service.getAllIconCategory().subscribe(res => {
      this.category = res.itemList;

      this.category.forEach(item => {
        if (!item.icon) {
          item.icon = '../../assets/img/img-not-found.png';
        }
        item.icon = "https://localhost:44357/" + item.icon;
      })
    })
  }

  onDelete(id) {
    this._service.deleteCategory(id).subscribe(res => {
      this.load();
    })
  }

}
