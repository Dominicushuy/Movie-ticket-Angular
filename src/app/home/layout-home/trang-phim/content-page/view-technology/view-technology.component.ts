import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-technology',
  templateUrl: './view-technology.component.html',
  styleUrls: ['./view-technology.component.css']
})
export class ViewTechnologyComponent implements OnInit {
	public dolby : boolean = false;
	public christie : boolean = false;
	public show2d : boolean = false;
	public show3d : boolean = false;
	public background : boolean =false;

  constructor() { }

  ngOnInit() {
  	let i :number
  	let elements: NodeListOf<Element> = document.getElementsByClassName("close-popup");
  	for(i = 0; i < elements.length;i++){
  		elements[i].addEventListener("click", () =>{
  			this.dolby = false;
  			this.christie = false;
  			this.show2d = false
  			this.show3d =false;
  			this.background = false;
  		})
  	}
  	let icons : NodeListOf<Element> = document.getElementsByClassName("iconShow");
  
  		icons[0].addEventListener("click", () =>{
  			this.dolby = true;
  			this.background = true;
  		});
  		icons[1].addEventListener("click", () =>{
  			this.christie = true;
  			this.background = true;
  		})
  		icons[2].addEventListener("click", () =>{
  			this.show2d = true;
  			this.background = true;
  		})
  		icons[3].addEventListener("click", () =>{
  			this.show3d = true;
  			this.background = true;
  		})
  		
  	
  }

  close( dolby,christie,show2d,show3d: boolean ){
  	this.dolby = false;
  	this.christie = false;
  	this.show2d = false;
  	this.show3d = false;
  	this.background = false;
  }


}
