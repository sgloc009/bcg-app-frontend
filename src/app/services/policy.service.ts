import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/customer';
import { Vehicle } from '../interfaces/vehicle';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  constructor(private http: HttpClient) { 

  }
  getPolicies(customer_id:(number|undefined)=undefined, insurance_id: (number|undefined)=undefined):(Observable<{items: Array<Customer>}>|undefined){
    if(customer_id)
      return <Observable<{items: Array<Customer>}>>this.http.get("/api/v1/customer",{params: {customer_id: customer_id}, headers: {"Content-Type":"application/json"}})
    else{
      if(insurance_id)
        return <Observable<{items: Array<Customer>}>>this.http.get("/api/v1/customer",{params: {insurance_id: insurance_id}, headers: {"Content-Type":"application/json"}})
      else{
        return new Observable(undefined)
      }
    }
  }
  updatePolicies(vehicle: Vehicle): Observable<any>{
    return this.http.post("/api/v1/customer/",vehicle);
  }
  getSeries(type): Observable<any>{
    return this.http.get("/api/v1/customer/stats",{params:{type: type}})
  }
}
