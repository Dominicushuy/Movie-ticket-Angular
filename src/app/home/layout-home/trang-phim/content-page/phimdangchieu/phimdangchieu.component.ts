import { Component, OnInit,OnDestroy,ElementRef,ViewChild,AfterViewInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { LaydanhsachphimService } from '../../../../../Services/phim/laydanhsachphim.service';
import { Phim } from '../../../../../Models/DanhSachPhim.class';

@Component({
  selector: 'app-phimdangchieu',
  templateUrl: './phimdangchieu.component.html',
  styleUrls: ['./phimdangchieu.component.css']
})
export class PhimdangchieuComponent implements OnInit,OnDestroy,AfterViewInit {
  @ViewChild('color', { read : ElementRef}) background :ElementRef;

	public subscription : Subscription;
	public danhSachPhim : Phim ;
  public showfilm : boolean =false;

    public showTrailer : boolean = false;
    public trailer : string;

	
  constructor(  private danhsachphimService : LaydanhsachphimService,
                private el: ElementRef
   ) { }

  ngOnInit() {
  	this.subscription = this.danhsachphimService.LayDanhSachPhim().subscribe((kq: Phim) => {
  		this.danhSachPhim = kq;
  	});
    
  }
  ngAfterViewInit(){
    
  }
  ngOnDestroy(){
  	this.subscription.unsubscribe();
  }

  viewTrailer(value :string){
    this.showTrailer = true;
        // Cắt trailer
        let mangTrailer = value.split('watch?v=');
        this.trailer = mangTrailer[0] + 'embed/' + mangTrailer[1];
  }
  
  closeTrailer(){
    this.showTrailer = false;
    this.trailer = "";
  }

  Filmshow(value : number){
    if(value == 1){
      this.showfilm = false;
    }else if (value == 2){
      this.showfilm = true;
    }
   
  }
  

}
