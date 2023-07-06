import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const  APIUrlUser ="http://localhost:8080/api/users";
const  APIUrlAuth =" http://localhost:8080/api/users/login";

@Injectable({
  providedIn: 'root'
})
export class UserService  extends DataService{
  constructor(http:HttpClient,private httpPrivate : HttpClient){
    super(APIUrlUser,http);
  }

  // Login Method
  signIn(data :{email : string,password : string}): Observable<any>{
    console.log(data)
    return this.httpPrivate.post(APIUrlAuth, data);
  }
}
