import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrl, BaseCondition, ReturnResult } from 'app/common';
import { CategoryDto } from 'model/category-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient : HttpClient) { }

  getAllNameCategory(): Observable<any>{
    return this.httpClient.get(ApiUrl.apiUrl + "CategoryOutside/GetAllNameCategory");
  }

  getAllIconCategory(): Observable<any>{
    return this.httpClient.get(ApiUrl.apiUrl + "CategoryOutside/GetAllIconCategory");
  }

  getById(param: number): Observable<any>{
    return this.httpClient.post(ApiUrl.apiUrl + "CategoryOutside/GetCategoryById", param);
  }

  deleteCategory(param: number): Observable<any>{
    return this.httpClient.post(ApiUrl.apiUrl + "CategoryOutside/DeleteCategory", param);
  }

  addNewCategory(param: CategoryDto) : Observable<any>{
    return this.httpClient.post(ApiUrl.apiUrl + "CategoryOutside/AddNewCategory", param)
  }

  updateCategory(param: CategoryDto) : Observable<any>{
    return this.httpClient.post(ApiUrl.apiUrl + "CategoryOutside/UpdateCategory", param)
  }
}
