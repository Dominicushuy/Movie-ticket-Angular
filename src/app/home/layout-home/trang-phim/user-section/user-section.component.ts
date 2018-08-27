import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators,AbstractControl, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';

import { NguoiDung } from '../../../../Models/NguoiDung.class';
import { QuanlynguoidungService } from '../../../../Services/NguoiDung/quanlynguoidung.service';
import { DangNhapService } from '../../../../Services/NguoiDung/dang-nhap.service';
import { UserLogin } from '../../../../Models/TaiKhoan.class'

@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.css']
})
export class UserSectionComponent implements OnInit,OnDestroy {
	public showReg : boolean = false; 
	public showLog : boolean = false;
	public formInvalid :boolean = false;
	public showLogout : boolean = true;
	public showInfoUser : boolean = false;
	public changeUser :boolean = false;


 	public manhom : string = 'GP01' ;
	public mangNhom : string[] = ['GP01','GP02','GP03','GP04','GP05','GP06','GP07','GP08','GP09','GP10'];
	public localUser : UserLogin;
	public nguoiDung : NguoiDung

	public FormReg : FormGroup;
	public FormLog : FormGroup;
	public FormUpdate : FormGroup;

	public subscription : Subscription;


  constructor(
 		private nguoiDungService : QuanlynguoidungService,
 		private dangNhapService : DangNhapService
  	) { }

  ngOnInit() {
  	this.nguoiDung = new NguoiDung();
  	this.createRegForm();
  	
  }

	createRegForm(){
		this.FormReg = new FormGroup({
			'TaiKhoan' : new FormControl(null, [
	  			Validators.required,
	  			Validators.minLength(6),
	  			Validators.maxLength(20)
  			]),
  			'MatKhau' : new FormControl(null, Validators.required),
  			'HoTen' : new FormControl(null, [
  				Validators.required,
  				Validators.pattern(`^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$`)
  			]),
  			'Email' : new FormControl(null, [
  				Validators.required,
  				Validators.pattern("^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$")
  			]),
  			'SoDT' : new FormControl(null, [
  				Validators.required,
  				Validators.pattern(`^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$`)
  			]),
  			'MaLoaiNguoiDung' : new FormControl(),
  			'MaNhom' : new FormControl(this.manhom)
		});
		this.FormUpdate = new FormGroup({
  			'MatKhau' : new FormControl(this.nguoiDung.MatKhau, Validators.required),
  			'HoTen' : new FormControl(this.nguoiDung.HoTen, [
  				Validators.required,
  				Validators.pattern(`^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$`)
  			]),
  			'Email' : new FormControl(this.nguoiDung.Email, [
  				Validators.required,
  				Validators.pattern("^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$")
  			]),
  			'SoDT' : new FormControl(this.nguoiDung.SoDT, [
  				Validators.required,
  				Validators.pattern(`^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$`)
  			]),
		});

		this.FormLog = new FormGroup({
			'taikhoan' : new FormControl(null, Validators.required),
			'matkhau' : new FormControl(null, Validators.required),
		})

	}

	onShowReg(){
	  	this.showReg = !this.showReg;
	  	this.showLog = false;
	  	
	  }

	onShowLog(){
	  	this.showLog = !this.showLog;
	  	this.showReg = false;
	  	this.showLogout = true;
	  	if(this.showInfoUser == true){
	  		localStorage.removeItem('localUser');
	  		this.showInfoUser = false;
	  	}
	  	


	  };

	closeForm(e){
	  	this.showReg = false;
	  	this.showLog = false;
	  	this.FormReg.reset();
	 };

	closeUser(){
		this.showReg = false;

	};

	showChange(){
		this.changeUser = !this.changeUser;
	}

	DangKy(value : NguoiDung) {
		if(this.FormReg.invalid){
			this.formInvalid = true;
		}else if(this.FormReg.valid){
			this.formInvalid = false;
			this.subscription = this.nguoiDungService.DangKyNguoiDung(value).subscribe((kq : any) => {
				
			swal({
			  position: 'center',
			  type: 'success',
			  title: 'Đăng ký thành công',
			  showConfirmButton: false,
			  timer: 1500
			})
			}),error => {
				console.log(error);
			}
		}
		
	}
	capNhapND(value : any){
		if(this.FormUpdate.valid){

			this.subscription = this.nguoiDungService.CapNhatNguoiDung(this.nguoiDung).subscribe((kq:any) =>{
				this.showReg = false;
				this.nguoiDung = kq;
				swal({
				  position: 'center',
				  type: 'success',
				  title: 'Cập nhật thành công',
				  showConfirmButton: false,
				  timer: 1500
				}),error => {
					console.log(error)
				}
			})
		}
	}

	DangNhap(value : any){
		let userResult: UserLogin = new UserLogin();
		
		if(this.FormLog.invalid){
			this.formInvalid = true;
		}else if(this.FormLog.valid){
			this.formInvalid = false;
			this.showInfoUser = true;
		this.subscription =	this.dangNhapService.DangNhapService(value).subscribe((kq : any) =>{
			this.nguoiDung = kq;
	  		if(kq == "Tài khoản hoặc mật khẩu không đúng !"){
				swal({
				  type: 'error',
				  title: 'Fail!!',
				  text: 'Tài khoản hoặc mật khẩu không đúng!',
				})
	  		}else{
	  			this.showLogout = false ;
	  			swal({
				  position: 'center',
				  type: 'success',
				  title: 'Đăng nhập thành công',
				  showConfirmButton: false,
				  timer: 1500
				})

	  			userResult.TaiKhoan = kq.TaiKhoan;
	  			userResult.MatKhau = kq.MatKhau;
	        	userResult.HoTen = kq.HoTen;
		        userResult.Email = kq.Email;
		        userResult.SoDT = kq.SoDT;
		        userResult.MaNhom = kq.MaNhom;
		        //Xóa local đăng nhập rồi xét lại
		        localStorage.removeItem('localUser');
		        localStorage.setItem('localUser', JSON.stringify(userResult));
		  	}
		  	}),error => {
				console.log(error);
			}
			this.showLog = false;
		}
	}

  ngOnDestroy(){
  	this.subscription.unsubscribe();
  }

 

}
