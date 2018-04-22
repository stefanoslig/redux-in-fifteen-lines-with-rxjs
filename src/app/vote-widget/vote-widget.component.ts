import { Component, OnChanges, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Choice } from '../store/reducer';
import { interval } from 'rxjs/observable/interval';
import { Observable } from 'rxjs/Observable';
@Component({
	selector: 'app-vote-widget',
	templateUrl: './vote-widget.component.html',
	styleUrls: ['./vote-widget.component.css'],
})
export class VoteWidgetComponent implements OnChanges {

	@Input() title: string;
	@Input() data: Choice[];
	@Output() upVote: EventEmitter<string> = new EventEmitter();
	@Output() downVote: EventEmitter<string> = new EventEmitter();
	votes: number;

	ngOnChanges() {
		this.votes = this.data.find(d => d.name === this.title).votes;
	}
}
