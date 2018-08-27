import { Component, OnInit,OnDestroy,Output ,EventEmitter} from '@angular/core';
import { Subscription } from 'rxjs';

import { LaydanhsachphimService } from '../../../../Services/phim/laydanhsachphim.service';
import { Phim } from '../../../../Models/DanhSachPhim.class';
import { LaylichchieuService } from '../../../../Services/phim/laylichchieu.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.css']
})
export class CardSectionComponent implements OnInit,OnDestroy {
	public subscription : Subscription
	public onSelect : boolean = false;
	public onSelect1 : boolean = false;
	public onSelect2 : boolean = false;
	public onSelect3 : boolean = false;
	public thongBao :boolean = false;
	public thongBao1 :boolean = false;
	public thongBao2 :boolean = false;
	public thongBao12 :boolean = false;

	public phim : Phim;
	public LichChieu :any;
	public maPhim : number = 0;
	public maRap : any ;
	public tenRap : any = "Chọn Rạp";

	public i : number ;
	public TenPhim : string = "Chọn Phim";
	public NgayChieu : string = "Chọn Ngày";
	public today :string =  Date();

  @Output() TenRapSelected = new EventEmitter();
  @Output() NgayChieuSelected = new EventEmitter();

  constructor(
  		private danhsachphimService : LaydanhsachphimService,
  		private layLichChieu : LaylichchieuService,
      private routerService : Router,
      private activatedRoute : ActivatedRoute
  	) { }

  ngOnInit() {
  	this.subscription = this.danhsachphimService.LayDanhSachPhim().subscribe((kq:Phim) => {
  		this.phim = kq
  	}),error => {
		console.log(error)
	  }

    

  }

  openSelect(){
  	this.onSelect = !this.onSelect;
  	
  };
  openSelect1(){
  	this.onSelect1 = !this.onSelect1;
  	if(this.TenPhim == 'Chọn Phim'){
  		this.thongBao = true;
  	}
  };
  openSelect2(){
  	this.onSelect2 = !this.onSelect2;
  	if(this.TenPhim == "Chọn Phim"){
  		this.thongBao1 = true;
  	}else if( this.tenRap == "Chọn Rạp"){
  		this.thongBao12 = true;
  	}
 
  };
  openSelect3(){
  	this.onSelect3 = !this.onSelect3;
  	if(this.TenPhim == "Chọn Phim" ){
  		this.thongBao2 = true;
  	}else if(this.tenRap == "Chọn Rạp"){
  		this.thongBao2 = true;
  	}else if(this.NgayChieu == "Chọn Ngày"){
  		this.thongBao2 = true;
  	}
  };

  filmOut(){ this.onSelect = false}
  cineOut(){ this.onSelect1 = false ; this.thongBao = false}
  dayOut(){ this.onSelect2 = false ; this.thongBao1 = false;this.thongBao12 = false } 
  hourOut(){ this.onSelect3 = false; this.thongBao2 =false}

  selected(phimDetail : Phim, maphim :number){
  	this.TenPhim = phimDetail.TenPhim;
    this.maPhim = maphim;

  	this.subscription = this.layLichChieu.LayChiTietPhim(phimDetail.MaPhim).subscribe((kq:any) =>{
  		this.LichChieu = kq.LichChieu;
  		this.maRap = kq.LichChieu[0].MaRap;

  	}),error =>{
  		console.log(error)
  	}

  	this.maPhim = phimDetail.MaPhim;
  	if(maphim = this.maPhim ){
  		this.tenRap  = "Chọn Rạp";
		this.NgayChieu = "Chọn Ngày";
  	}

  }
  ngayChieu(ngaychieu : string){
  	this.NgayChieu = ngaychieu.substring(0,10);
  }
  rap1(tenRap : string){
  	this.tenRap = tenRap;
  }
  rap2( tenRap : string){
  	this.tenRap = tenRap;
  }
  rap3(tenRap : string){
  	this.tenRap = tenRap;
  }
  rap4( tenRap : string){
  	this.tenRap = tenRap;
  }
  rap5( tenRap : string){
  	this.tenRap = tenRap;
  }
  rap6( tenRap : string){
  	this.tenRap = tenRap;

  }



  ngOnDestroy(){
  	this.subscription.unsubscribe();
  }
}
