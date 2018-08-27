import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-trang-phim',
  templateUrl: './trang-phim.component.html',
  styleUrls: ['./trang-phim.component.css']
})
export class TrangPhimComponent implements OnInit {
	@ViewChild('scroll', { read : ElementRef}) scroll :ElementRef;

  constructor() { }

  ngOnInit() {
  	
  }
  goTop(){
  	window.scrollTo(0,0);
  }

}
