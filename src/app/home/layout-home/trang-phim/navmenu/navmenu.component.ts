import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})


export class NavmenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	
  }

@HostListener("window:scroll", []) onWindowScroll(event) {
	if($('html').scrollTop() > 0){
    $('.header').addClass('hide');
    $('.header').removeClass('fadeOn');
    $('.header').addClass('fadeOff');
	}else{
    $('.header').removeClass('hide');
    $('.header').removeClass('fadeOff');
		$('.header').addClass('fadeOn');
	}
}

}