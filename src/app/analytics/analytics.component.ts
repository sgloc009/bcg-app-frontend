import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../services/policy.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  show: string = "date";
  loading: boolean = true
  view: [number, number] = [700, 400];
  data: any;
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'policies';

  colorScheme = "#5AA454"
  constructor(private policySrv: PolicyService) { }

  ngOnInit(): void {
    this.getDateSeries()
  }

  getDateSeries(){
    this.loading = true;
    this.policySrv.getSeries(this.show).subscribe(data=>{
      this.data = [{"name":"polices","series":data}]
      this.loading = false
    },
    error=>{
    }
    )
  }
  onSelectChange(){
    this.getDateSeries();
  }
}
