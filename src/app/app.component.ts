import { colors } from './colors';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Label, Color, BaseChartDirective } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  public chartLabels: Label[] = ['El1', 'El2', 'El3', 'El4'];
  public chartData: ChartDataSets[] = [{data: [26,	21, 35, 42], label: 'Data 1'}];

  public chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
}
