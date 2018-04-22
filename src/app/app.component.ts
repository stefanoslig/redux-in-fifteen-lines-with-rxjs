import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Choice, reducer } from './store/reducer';
import { Store, Dispatcher } from './store/store';

const INITIAL_STATE = {
	choices: [{ name: 'Angular', votes: 0 }, { name: 'Vue', votes: 0 }, { name: 'React', votes: 0 }]
};

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
	data$: Observable<Choice[]>;
	store: Store<any>;

	upVote(name: string) {
		this.store.dispatch({
			type: '[votes] UP_VOTE',
			name
		});
	}

	downVote(name: string) {
		this.store.dispatch({
			type: '[votes] DOWN_VOTE',
			name
		});
	}

	reset() {
		this.store.dispatch({
			type: '[votes] RESET'
		});
	}

	ngOnInit() {
		const dispatcher = new Dispatcher();
		this.store = new Store(dispatcher, reducer, INITIAL_STATE);
		this.data$ = this.store.select('choices');
	}
}
