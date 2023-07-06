import { HttpClient } from '@angular/common/http';
import { Type } from '@angular/compiler';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

   // Inject ApiUrl in constructor to Get it form ather Service
   constructor(@Inject(String) private APIUrl: string,private http: HttpClient) { }

  // Get Method
  getAll(): Observable<any> {
    return this.http.get<any>(this.APIUrl);
  }
  // Get with id
  get(id: any): Observable<any> {
    return this.http.get(`${this.APIUrl}/${id}`);
  }
  // Update Method
  Update(data: any): Observable<any> {
    return this.http.put(`${this.APIUrl}`, data);
  }
  // Create Method
  Create(data: any): Observable<any> {
    return this.http.post(this.APIUrl, data);
  }
  // Delete Method
  Delete(id: any): Observable<any> {
    return this.http.delete(`${this.APIUrl}/${id}`);
  }
}
