import { Component, OnInit,OnDestroy,AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { LaydanhsachphimService } from '../../../../../Services/phim/laydanhsachphim.service';
import { Phim } from '../../../../../Models/DanhSachPhim.class';
import { LaylichchieuService } from '../../../../../Services/phim/laylichchieu.service';


@Component({
  selector: 'app-selectedall',
  templateUrl: './selectedall.component.html',
  styleUrls: ['./selectedall.component.css']
})
export class SelectedallComponent implements OnInit, AfterViewInit {
	public maPhim : number;
	public subscription : Subscription;
	public phimDetail : Phim;
	public hinhAnh : string;
	public tenPhim : string;
	public tenRap : string = "CHỌN RẠP";
	public ngayChieu : string = "CHỌN NGÀY CHIẾU";
	public maRap : number;
	public LichChieu : any;
	public maLichChieu1: number;
	public maLichChieu2: number;
	public maLichChieu3: number;
	public maLichChieu4: number;
	public maLichChieu5: number;
	public maLichChieu6: number;
	public maLichChieu7: number;
	public ngayChieuDefaul1:any;
	public ngayChieuDefaul2:any;
	public ngayChieuDefaul3:any;

	public onSelectRap : boolean = false;
	public onSelectDay : boolean = false;
	public dayDefaul : boolean = false;
	public chonRap : boolean = false;
	public showDay : number ; 
  constructor(
  	private Activate:ActivatedRoute,
  	private phimSV:LaylichchieuService
  	) { }

  ngOnInit() {

  	this.Activate.queryParams.subscribe((queryparam:any)=>{
  		if(queryparam['Rap'] == undefined ){
  			this.tenRap = "CHỌN RẠP";
  			this.ngayChieu = "CHỌN NGÀY CHIẾU";
  		}else {
  			this.dayDefaul = true;
  			this.tenRap = queryparam['Rap'];
  			this.maRap = queryparam['MaRap']
  			let mangNgayChieu = queryparam['NgayChieu'].split('-');
  			this.ngayChieu = mangNgayChieu[2] + '/' + mangNgayChieu[1] + '/' + mangNgayChieu[0];
        this.chonRap = true;

  		}
  	})

  	this.Activate.params.subscribe((param:any) =>{
  		this.maPhim = param['maphim'];
  		this.subscription = this.phimSV.LayChiTietPhim(this.maPhim).subscribe((kq:any)=>{
  			this.phimDetail = kq;
  			this.hinhAnh = kq.HinhAnh;
  			this.tenPhim = kq.TenPhim;
  			this.LichChieu = kq.LichChieu;
  			this.maRap = kq.LichChieu[0].MaRap;
  			this.maLichChieu1 = kq.LichChieu[0].MaLichChieu;
  			this.maLichChieu2 = kq.LichChieu[1].MaLichChieu;
  			this.maLichChieu3 = kq.LichChieu[2].MaLichChieu;
  			this.maLichChieu4 = kq.LichChieu[3].MaLichChieu;
  			this.maLichChieu5 = kq.LichChieu[4].MaLichChieu;
  			this.maLichChieu6 = kq.LichChieu[5].MaLichChieu;
  			this.maLichChieu7 = kq.LichChieu[6].MaLichChieu;

  			let arrDay1 = kq.LichChieu[4].NgayChieuGioChieu.split('-');
  			this.ngayChieuDefaul1 = arrDay1[2].substring(0,2) + '/' + arrDay1[1] + '/' + arrDay1[0];
  			let arrDay2 = kq.LichChieu[5].NgayChieuGioChieu.split('-');
  			this.ngayChieuDefaul2 = arrDay2[2].substring(0,2) + '/' + arrDay2[1] + '/' + arrDay2[0];
  			let arrDay3 = kq.LichChieu[6].NgayChieuGioChieu.split('-');
  			this.ngayChieuDefaul3 = arrDay3[2].substring(0,2) + '/' + arrDay3[1] + '/' + arrDay3[0];

  			if(this.ngayChieu == this.ngayChieuDefaul1){
  				this.showDay = 1;
  			}else if(this.ngayChieu == this.ngayChieuDefaul2 ){
  				this.showDay = 2;
  			}else if(this.ngayChieu == this.ngayChieuDefaul3 ){
  				this.showDay = 3;
  			}

  		})
  	})
  }

  ngAfterViewInit(){

  }
  openSelectRap(){
  	this.onSelectRap = !this.onSelectRap;
  	this.onSelectDay = false;

  }
  openSelectDay(){
  	this.onSelectDay =!this.onSelectDay;
  	this.onSelectRap = false;
  }

  rap1(tenRap : string){
  	this.tenRap = tenRap;
  	this.chonRap = true;
  }
  rap2( tenRap : string){
  	this.tenRap = tenRap;
  	this.chonRap = true;
  }
  rap3(tenRap : string){
  	this.tenRap = tenRap;
  	this.chonRap = true;
  }
  rap4( tenRap : string){
  	this.tenRap = tenRap;
  	this.chonRap = true;
  }
  rap5( tenRap : string){
  	this.tenRap = tenRap;
  	this.chonRap = true;
  }
  rap6( tenRap : string){
  	this.tenRap = tenRap;
  	this.chonRap = true;

  }
  ngayChieuSelected(value : any ,malichchieu){
  	let mangNgayChieu = value.split('-');
  	this.ngayChieu = mangNgayChieu[2].substring(0,2) + '/' + mangNgayChieu[1] + '/' + mangNgayChieu[0];
  	if(malichchieu == this.maLichChieu5 && this.tenRap !== "CHỌN RẠP"){
  		this.showDay = 1;
  	}else if(malichchieu == this.maLichChieu6  && this.tenRap !== "CHỌN RẠP"){
  		this.showDay = 2;
  	}else if(malichchieu == this.maLichChieu7  && this.tenRap !== "CHỌN RẠP"){
  		this.showDay = 3;
  	}
  }

}
