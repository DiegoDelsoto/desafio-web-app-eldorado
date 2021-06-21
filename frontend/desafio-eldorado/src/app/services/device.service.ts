import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Category } from './category.service';

export interface Device{
  id : string;
  category? : string;
  color? : string;
  partNumber? : string;
}

@Injectable({
  providedIn: 'root'
})

export class DeviceService {

  url = 'http://localhost:3000/app/devices';
  constructor(private http: HttpClient) { }

  //get 
	getAllDevice() : Observable<Device[]>{
		return this.http.get<Device[]>(this.url);
	}
  
  deleteDevice(id:String) : Observable<String>{
		return this.http.delete<String>(this.url+'/'+id);
	}

  addDevice(category:String, color:String, partNumber:String) : Observable<String>{
    const device = {"category": category, "color": color, "partNumber":partNumber }
    return this.http.post<String>(this.url,device);
	}

  getAllCategory() : Observable<Category[]>{
		return this.http.get<Category[]>(this.url);
	}

}
