import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';

import { LaydanhsachphimService } from '../../../../../Services/phim/laydanhsachphim.service';
import { Phim } from '../../../../../Models/DanhSachPhim.class';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit,OnDestroy {
public show : boolean = false;
public info : boolean = false;
public danhSachPhim : Phim;
public maPhim :number ;
public Trailer :string ;
public showTrailer :boolean = false ;

public subscription : Subscription;

  constructor( private danhsachphimService : LaydanhsachphimService ) { }

  ngOnInit() {
  	this.subscription = this.danhsachphimService.LayDanhSachPhim().subscribe((kq: Phim) => {
  		this.danhSachPhim = kq;
  	});

  }

  onShow(value : number){
    if(value == 1){
      this.show = false;
    }else if(value == 2){
      this.show = true;
    }
  }

  showInfo(event){
      event.target.classList.remove('hide');
      event.target.classList.add('show');
  }
  OffInfo(event ){
      event.target.classList.remove('show');
      event.target.classList.add('hide');
  }

  viewTrailer(trailer : string){
    let mangTrailer = trailer.split('watch?v=');
    this.Trailer = mangTrailer[0] + 'embed/'+ mangTrailer[1];
    this.showTrailer = true;
    
  }
  closeTrailer(){
    this.showTrailer = false;
    this.Trailer = "";
  }

  ngOnDestroy(){
  	this.subscription.unsubscribe();
  }

 

}
