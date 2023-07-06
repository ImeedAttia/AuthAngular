import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

const  APIUrlAddress ="http://localhost:8080/api/addresses";
@Injectable({
  providedIn: 'root'
})
export class AddressService extends DataService{
  constructor(http:HttpClient,private httpPrivate : HttpClient){
    super(APIUrlAddress,http);
  }
}
