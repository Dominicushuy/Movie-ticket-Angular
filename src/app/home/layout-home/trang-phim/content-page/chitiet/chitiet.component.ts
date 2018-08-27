import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LichChieu } from '../../../../../Models/LichChieu';
import { LaylichchieuService } from '../../../../../Services/phim/laylichchieu.service';
import { Phim } from '../../../../../Models/DanhSachPhim.class'

@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent implements OnInit {
	public maPhim : number;
	public chitetPhim :Phim = new Phim();
	public trailer : string;
	public lichChieu : LichChieu[];
	public showTrailer : boolean = false;
  constructor(
  	private Activate:ActivatedRoute,
  	private phimSV:LaylichchieuService
  	) { }

  ngOnInit() {
  	this.Activate.params.subscribe((param:any) => {
  		this.maPhim = param['maphim'];
  		this.phimSV.LayChiTietPhim(this.maPhim).subscribe((kq: any) =>{
  			this.chitetPhim = kq;

  			// Cắt trailer
  			let mangTrailer = kq.Trailer.split('watch?v=');
  			this.trailer = mangTrailer[0] + 'embed/' + mangTrailer[1];

  			this.lichChieu = kq.LichChieu;

  		})
  	})
  }
  viewTrailer(){
  	this.showTrailer = true;
  }
  closeTrailer(){
    this.showTrailer = false;
    this.trailer = "";
  }

}
