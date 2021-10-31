import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Customer } from '../interfaces/customer';
import { PolicyService } from '../services/policy.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {
  opened: boolean = false;
  loading: Boolean = true;
  customer_id: number = 400;
  insurance_id: number;
  current_insurance = 0;
  changed: Boolean = false;
  customerObjects: {items:Array<Customer>} = { } as {items:Array<Customer>}
  constructor(private policiesSrv: PolicyService) { }

  ngOnInit(): void {
    this.searchPolicy(400);
  }

  searchPolicy(customer_id:number=undefined,insurance_id:number=undefined){
    this.loading = true;
    this.current_insurance = 0;
    this.changed = false;
    this.policiesSrv.getPolicies(customer_id, insurance_id)?.subscribe((data:({items: Array<Customer>}|undefined))=>{
      if(data){
        this.customerObjects = data
        this.loading = false;
      }
    })
  }
  next(){
    this.current_insurance+=1;
  }
  previous(){
    this.current_insurance-=1;
  }
  onUpdate(){
    this.policiesSrv.updatePolicies(this.customerObjects.items[0].vehicle[this.current_insurance]).subscribe(
      data=>{console.log(data)},
      error=>{console.log(error)}
    )
  }
  changeHandler(){
    this.changed = true;
  }
}
