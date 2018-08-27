import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-layout-home',
  templateUrl: './layout-home.component.html',
  styleUrls: ['./layout-home.component.css']
})
export class LayoutHomeComponent implements OnInit {
	public onshow : boolean = false

  constructor() { }

  ngOnInit() {
  }
  @HostListener("window:scroll", []) scrollTop(event) {
	if($('html').scrollTop() > 1000){
		$('.go-top').addClass('show');
		
	}else if($('html').scrollTop() <= 1000){
		this.onshow =false;
		$('.go-top').removeClass('show');

	}
	}

}
