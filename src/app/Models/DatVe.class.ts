import { Injectable } from '@angular/core';
import { DanhSachGhe } from './ListGhe.class';
import { Ghe } from './DanhSachGhe.class'

@Injectable({
  providedIn: 'root'
})


export class Ve {
	public MaLichChieu : number ;
	public TaiKhoanNguoiDung : string;
	public DanhSachVe :DanhSachGhe[]
	constructor(malichchieu : number ,taikhoan : string){
		this.MaLichChieu = malichchieu;
		this.TaiKhoanNguoiDung = taikhoan;
		this.DanhSachVe = [];
	}
	themGhe(ghe: any){
		this.DanhSachVe.push(ghe);
	}
}