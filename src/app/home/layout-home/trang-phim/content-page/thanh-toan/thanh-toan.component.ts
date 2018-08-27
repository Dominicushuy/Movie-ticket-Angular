import { Component, OnInit ,OnDestroy,ViewChild ,ElementRef ,OnChanges} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Subscription } from 'rxjs';

import swal from 'sweetalert2';

@Component({
  selector: 'app-thanh-toan',
  templateUrl: './thanh-toan.component.html',
  styleUrls: ['./thanh-toan.component.css']
})
export class ThanhToanComponent implements OnInit ,OnDestroy{
	public maphim : number;
	public tongTien : number;
	public user : string;


  constructor( 	
  	private Activate:ActivatedRoute,
  	private router : Router
  	) { }

  ngOnInit() {
  	this.Activate.params.subscribe((param : any) =>{
  		this.maphim = param['maphim'];
  	})
  	this.Activate.queryParams.subscribe((query : any) =>{
  		this.tongTien = query['TongTien'];
  		this.user = query['TaiKhoan']; 
  	})
  }
  thanhToan(){
	
  }

  ngOnDestroy(){

  }

}
