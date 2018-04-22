import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VoteWidgetComponent } from './vote-widget/vote-widget.component';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
	declarations: [
		AppComponent,
		VoteWidgetComponent,
		ChartComponent
	],
	imports: [
		BrowserModule,
		ChartsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
