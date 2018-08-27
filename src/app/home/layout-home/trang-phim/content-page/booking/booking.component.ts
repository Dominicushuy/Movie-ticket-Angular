import { Component, OnInit ,OnDestroy,ViewChild ,ElementRef ,OnChanges} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { LaylichchieuService } from '../../../../../Services/phim/laylichchieu.service';
import { BookingService} from '../../../../../Services/phim/booking.service';
import { Ghe } from '../../../../../Models/DanhSachGhe.class';
import { Ve } from '../../../../../Models/DatVe.class' ;
import swal from 'sweetalert2';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit,OnDestroy {
	public hinhAnh : string ;
	public maPhim : number;
	public tenPhim : number;
	public gioChieu : any;
	public ngayChieu : any;
	public maLichChieu : number;
	public fulltotal : number = 0;
	public total1 : number = 0;
	public total2 : number = 0;
	public sove : number = 0;
	public ve1 :number =0;
	public ve2 :number =0;
  public comboTotal1 : number = 0;
  public comboTotal2 : number = 0;
  public comboTotal3 : number = 0;
  public comboTotal4 : number = 0;
  public combo1 : number =0;
  public combo2 : number =0;
  public combo3 : number =0;
  public combo4 : number =0;
  public totalCombo : number = 0;
  public txtCombo1 : string = 'Bắp rang - Phô Mai';
  public txtCombo2 : string = 'Combo 1 HCM';
  public txtCombo3 : string = 'Nước Lon/Chai';
  public txtCombo4 : string = 'Nước ngọt Ly';

	public maGhe : number;
	public user : string;
  public email : string;
  public soDT : number;

	public danhSachGhe : any ;
	public ghe : any;
  public ve : Ve;
	public danhSachVe : any[];

  public showTicket: boolean = false
  public showGhe : boolean = false;
	public showThanhToan :boolean = false;
  public showcombo : boolean = false;
  public showMenu : boolean = false;
  public showDieuKhoan : boolean = false;
	public showEnd : boolean = false;


	public subcription : Subscription;

  constructor(
  		private Activate:ActivatedRoute,
      private router : Router,
  		private phimSV:LaylichchieuService,
  		private bookSV:BookingService,
  		private el: ElementRef

  	) { }

  ngOnInit() {
  	this.Activate.params.subscribe((param : any) =>{
  		this.maLichChieu = param['malichchieu'];
  		this.phimSV.LayChiTietPhongVe(this.maLichChieu).subscribe((kq : any) => {
  			this.danhSachGhe = kq.DanhSachGhe;
  		})
  	})

  	this.Activate.queryParams.subscribe((queryParams : any) =>{
  		this.maPhim = queryParams['maphim'];
  		this.gioChieu = queryParams['SuatChieu'];
  		this.ngayChieu = queryParams['NgayChieu'];
  	})


  	this.subcription = this.phimSV.LayChiTietPhim(this.maPhim).subscribe((kq) => {
  		this.tenPhim = kq.TenPhim;
  		this.hinhAnh = kq.HinhAnh;
  	})

  	let userLocal = JSON.parse(localStorage.getItem('localUser'));
    this.user = userLocal.TaiKhoan;
    this.email = userLocal.Email;
    this.soDT = userLocal.SoDT;

  	this.ve = new Ve(this.maLichChieu , this.user);
  }

  add1(){
  	this.total1+=75000;
  	this.fulltotal = this.total1 + this.total2;
  	this.ve1 +=1;
  	this.sove +=1;
  }
  add2(){
  	this.total2+=120000;
  	this.fulltotal = this.total1 + this.total2;
  	this.ve2 +=1;
  	this.sove +=1;
  }
  minus1(){
  	if(this.ve1 >0 ){
  		this.total1-=75000;
	  	this.fulltotal = this.total1 + this.total2;
	  	this.ve1 -=1;
	  	this.sove -=1;
  	}
  }
  minus2(){
  	if(this.ve2 >0  ){
  		this.total2-=120000;
	  	this.fulltotal = this.total1 + this.total2;
	  	this.ve2 -=1;
	  	this.sove -=1;
  	}
  }

  comboAdd1(){
    this.comboTotal1 +=55000;
    this.combo1++;
    this.totalCombo = this.comboTotal1 + this.comboTotal3 + this.comboTotal2 +this.comboTotal4;
  }
  comboAdd2(){
    this.comboTotal2 +=79000;
    this.combo2++;
    this.totalCombo = this.comboTotal1 + this.comboTotal3 + this.comboTotal2 +this.comboTotal4;
  }
  comboAdd3(){
    this.comboTotal3 +=16000;
    this.combo3++;
    this.totalCombo = this.comboTotal1 + this.comboTotal3 + this.comboTotal2 +this.comboTotal4;
  }
  comboAdd4(){
    this.comboTotal4 +=25000;
    this.combo4++;
    this.totalCombo = this.comboTotal1 + this.comboTotal3 + this.comboTotal2 +this.comboTotal4;

  }

  comboMinus1(){
    if(this.combo1 > 0){
      this.comboTotal1-=55000;
      this.combo1--;
      this.totalCombo = this.comboTotal1 + this.comboTotal3 + this.comboTotal2 +this.comboTotal4;
    }
  }
  comboMinus2(){
    if(this.combo2 > 0){
      this.comboTotal2-=79000;
      this.combo2--;
      this.totalCombo = this.comboTotal1 + this.comboTotal3 + this.comboTotal2 +this.comboTotal4;
    }
  }
  comboMinus3(){
    if(this.combo3 > 0){
      this.comboTotal3-=16000;
      this.combo3--;
      this.totalCombo = this.comboTotal1 + this.comboTotal3 + this.comboTotal2 +this.comboTotal4;
    }
  }
  comboMinus4(){
    if(this.combo4 > 0){
      this.comboTotal4-=25000;
      this.combo4--;
      this.totalCombo = this.comboTotal1 + this.comboTotal3 + this.comboTotal2 +this.comboTotal4;
    }
  }

  DatGhe(){
  	// Kiem tra dang nhap;
  	let user = JSON.parse(localStorage.getItem('localUser'));
  	if(user == null){
  		swal({
		  type: 'error',
		  title: 'Chưa đăng nhập !!!',
		  text: 'Bạn phải đăng nhập trước khi đặt vé!',

		})
  	}else{
      this.showTicket = true;
  		this.showGhe = true;
       let element = this.el.nativeElement.getElementsByClassName('choosing');
        for (let i =0; i < element.length;i++) {
          element[i].attributes[1].nodeValue = 'single';
        }
  	}
  }

  goBack(){
    this.showTicket = false;
  	this.showGhe = false;
    this.showThanhToan = false;
    let element = this.el.nativeElement.getElementsByClassName('choosing');
    for (let i =0; i < element.length;i++) {
      element[i].attributes[1].nodeValue = 'single';
    }

  }

  // Dat ghe
  choose(value : number, event){

    this.maGhe = value;
    event.target.classList.toggle('choosing');
  	let element = this.el.nativeElement.getElementsByClassName('choosing');
    this.danhSachVe = element;

  	if(element.length > this.sove){
  		element[0].classList.remove('choosing');
  		return;
  	}

	if(element.length == this.sove){
		this.showThanhToan = true;
	}else{
		this.showThanhToan = false;
	}


  }

  combo(){
  	this.showcombo = true;
  }
  closeCombo(){
    this.showcombo = false;
    this.combo1 = 0;
    this.combo2 = 0;
    this.combo3 = 0;
    this.combo4 = 0;
    this.totalCombo = 0;
    this.comboTotal1 = 0;
    this.comboTotal2 = 0;
    this.comboTotal3 = 0;
    this.comboTotal4 = 0;

  }
  TotalCombo(){
  	this.showcombo = false;
    this.fulltotal = this.totalCombo + this.total1 + this.total2;;
  }

  datVe(){

    this.showMenu = true;
    this.showGhe = false;
  }


  goDieuKhoan(){
    this.showMenu = false;
    this.showDieuKhoan = true;
  }


   backBooking(){
    this.showMenu = false;
    this.showGhe = true;

  }
    backMenu(){
    this.showMenu = true;
    this.showDieuKhoan = false;
  }

  thanhToan(){
    this.showDieuKhoan = false;
    this.showEnd = true;
  }
  Ending(){
    let maGhe = this.el.nativeElement.getElementsByClassName('choosing');
    for(let i = 0; i< maGhe.length; i++){
      this.ghe = new Ghe(maGhe[i].innerHTML);
      this.ve.themGhe(this.ghe);
    }
    console.log(this.ve);

      this.subcription = this.bookSV.DatVe(this.ve).subscribe((kq:any) =>{
        console.log(kq)
           if(kq == 'Đặt vé thành công!'){
             swal({
              position: 'center',
              type: 'success',
              title: 'Đặt vé thành công ',
              showConfirmButton: false,
              timer: 1500
            })
           }
          }),error =>{
            console.log(error)
          }

    setTimeout(()=>{this.router.navigate(['home/selected',this.maPhim])},2000)

  }


  ngOnDestroy(){
  	this.subcription.unsubscribe();
  }

}
