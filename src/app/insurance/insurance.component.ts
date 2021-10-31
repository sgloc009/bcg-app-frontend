import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vehicle } from '../interfaces/vehicle';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css'],
})
export class InsuranceComponent implements OnInit {
  @Input() vehicle:Vehicle;
  @Output() changed: EventEmitter<undefined> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.vehicle.insurance.dop = new Date(this.vehicle.insurance.dop);
  }

  detectChange(): void {
    this.changed.emit();
  }
} 
