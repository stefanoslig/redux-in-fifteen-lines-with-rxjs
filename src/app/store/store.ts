import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { scan } from 'rxjs/operators/scan';
import { map } from 'rxjs/operators/map';
import { tap } from 'rxjs/operators/tap';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
import { Injectable } from '@angular/core';

interface Action {
	type: string;
}

export class Dispatcher extends Subject<Action> {
	dispatch(action: Action): void {
		this.next(action);
	}
}

@Injectable()
export class Store<T> extends BehaviorSubject<T> {

	constructor(private dispatcher, private reducer, private initialState) {
		super(initialState);
		this.dispatcher.pipe(
			tap(val => console.log('ACTION: ', val)),
			scan((state, action) => this.reducer(state, action), initialState),
			tap(val => console.log('STATE: ', val)),
		).subscribe(state => super.next(state));
	}
	dispatch(action: any) {
		this.dispatcher.dispatch(action);
	}

	select(key: string) {
		return this.pipe(map(state => state[key]));
	}
}
