import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { Observable } from 'rxjs';

export interface Category{
  id : string;
  name? : string;
}

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  url = 'http://localhost:3000/app/types';
	constructor (private http: HttpClient) { }

	//get 
	getAllCategory() : Observable<Category[]>{
		return this.http.get<Category[]>(this.url);
	}

  deleteCategory(id:String) : Observable<String>{
		return this.http.delete<String>(this.url+'/'+id);
	}

  addCategory(name:String) : Observable<String>{
    return this.http.post<String>(this.url,{name});
	}

}