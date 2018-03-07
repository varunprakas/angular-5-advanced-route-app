import { Component, OnInit ,OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-books-component',
  templateUrl: './books-component.component.html',
  styleUrls: ['./books-component.component.css']
})

export class BooksComponentComponent implements OnDestroy{
	ngOnDestroy() {
    
  }
  constructor(private _router:Router){}
  onclick(i){
    this._router.navigate(['book' , i.Id, i.Price ]);
  }
  editclick(i){
     this._router.navigate(['edit']);
  }
  detailsclick(i){
     this._router.navigate(['details']);
  }
  test(){
    alert('');
  }
  books:Book [] = [
    {
      "Id": 100,
      "Name": "book1",
      "Price": 123,
      "Rate": 3
    },
    {
      "Id": 400,
      "Name": "book4",
      "Price": 250,
      "Rate": 4
    }

  ];

}
export class Book {
  Id:number;
  Name:string;
  Price:number;
  Rate:number;
}