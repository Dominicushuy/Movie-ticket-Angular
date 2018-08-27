import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})

export class ErrorComponent implements OnInit {
	@Input('control') control;
	@Input('control-name') controlName;

  constructor() { }

  ngOnInit() {
  }

  get message() {
  	for (let err in this.control.errors) {
  		if(this.control.dirty){
  			return this.getErrorMessage(err, this.control.errors[err]);
  		}
  	}
  }

  getErrorMessage(err, value){
  		let message = {
  			'required': `Vui lòng nhập đúng ${this.controlName} !!!`,
  			'minlength':`Minlength: ${value.requiredLength} !!! `,
  			'maxlength':`Maxlength: ${value.requiredLength} !!! `,
  			'pattern' : `${this.controlName} của ban: ${value.actualValue} không hợp lệ !!!`
  		}
  		return message[err];
  }
  

}
