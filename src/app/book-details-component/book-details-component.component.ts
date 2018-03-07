import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-details-component',
  templateUrl: './book-details-component.component.html',
  styleUrls: ['./book-details-component.component.css']
})
export class BookDetailsComponentComponent implements OnInit {

	id:number;
	price:number;
	constructor(private _activeRoute:ActivatedRoute) { }

	ngOnInit() {
		this.id = this._activeRoute.snapshot.params['Id'];
		this.price = this._activeRoute.snapshot.params['Price'];
	}


}
