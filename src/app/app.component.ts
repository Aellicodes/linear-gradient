import { colors } from './colors';
import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { Label, Color, BaseChartDirective } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  @ViewChild('myCanvas') canvas: ElementRef;

  public chartLabels: Label[] = ['El1', 'El2', 'El3', 'El4'];
  public chartData: ChartDataSets[] = [{data: [26,	21, 35, 42], label: 'Data 1',
  fill: true}];

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

  public chartColors: Color[] = [{
    pointRadius: 7
  }];

  ngAfterViewInit(): void {
    const ctx = this.canvas.nativeElement.getContext('2d');
    const gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, colors.darkColor);
    gradientStroke.addColorStop(0.3, colors.lightColor);
    gradientStroke.addColorStop(0.6, colors.chartColor1);
    gradientStroke.addColorStop(1, colors.chartColor2);

    const gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
    gradientFill.addColorStop(0, "rgba(100, 201, 207, 0.6)");
    gradientFill.addColorStop(0.3, "rgba(253, 228, 156, 0.6)");
    gradientFill.addColorStop(0.6, "rgba(255, 183, 64, 0.6)");
    gradientFill.addColorStop(1, "rgba(223, 113, 27, 0.6)");

    this.chartColors = [
      {
        borderColor: gradientStroke,
        pointBorderColor: gradientStroke,
        pointBackgroundColor: gradientStroke,
        backgroundColor: gradientFill
      }
    ];
  }
}
