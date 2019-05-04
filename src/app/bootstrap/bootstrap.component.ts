import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.css']
})
export class BootstrapComponent implements OnInit {

  point = [12, 54, 47, 65];
  
  constructor() { }
  ngOnInit() {
  }

}
