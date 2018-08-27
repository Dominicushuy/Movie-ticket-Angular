import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Ghe {
	public MaGhe : number;
	public GiaVe : number;
	
	constructor( maghe : number ){
		this.MaGhe = maghe;
		this.GiaVe = 75000;
	}
}