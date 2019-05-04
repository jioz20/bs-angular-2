import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  @Input('is-favourite') isSelected: boolean;
  //Khoi tao output changess để bên ngoài có thể sử dụng được
  @Output() changesss = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick ()
  {
    this.isSelected = !this.isSelected;
    
    //Phat ra su kien duoc goi
    this.changesss.emit(this.isSelected);
  }

}
