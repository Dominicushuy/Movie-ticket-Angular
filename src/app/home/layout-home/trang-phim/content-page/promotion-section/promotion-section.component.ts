import { Component, OnInit, ViewChild, ViewContainerRef,OnChanges }  from '@angular/core';

@Component({
  selector: 'app-promotion-section',
  templateUrl: './promotion-section.component.html',
  styleUrls: ['./promotion-section.component.css']
})
export class PromotionSectionComponent implements OnInit{
	@ViewChild('slidevalue' ,{read: ViewContainerRef}) slidevalue: ViewContainerRef; 

	public dotActive : number = 1;
  constructor() { }

  ngOnInit() {
  	
  }
  
 
	activeDot(value){
		this.dotActive = value;
	}

	

}
