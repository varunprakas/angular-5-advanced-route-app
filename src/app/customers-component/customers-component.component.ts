import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customers-component',
  templateUrl: './customers-component.component.html',
  styleUrls: ['./customers-component.component.css']
})
export class CustomersComponentComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

 /* editclick(){
     this._router.navigate(['edit']);
  }
  detailsclick(){
     this._router.navigate(['details']);
  }*/
}
