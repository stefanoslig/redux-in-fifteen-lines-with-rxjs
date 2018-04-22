import { Component, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Choice } from '../store/reducer';

@Component({
	selector: 'app-chart',
	templateUrl: './chart.component.html',
	styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnChanges {
	@Input() data: Choice[] = [];
	barChartData: any;
	barChartLabels = ['Angular', 'Vue', 'React'];
	options = { scales: { yAxes: [{ ticks: { beginAtZero: true } }] }, legend: { display: false } };
	colors = ['rgba(221, 0, 50, 1)', 'rgba(66,184,131,1)', 'rgba(96,218,251,1)'];

	ngOnChanges() {
		const votes = this.data.map(c => c['votes']);
		this.barChartData = [{ data: votes, labels: ['s', 's', 's'], backgroundColor: this.colors }];
	}
}
