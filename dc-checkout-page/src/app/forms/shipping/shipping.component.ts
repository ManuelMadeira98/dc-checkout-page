import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputType } from 'src/app/models';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss'],
})
export class ShippingComponent implements OnInit {
	inputTypes = InputType;
	@Input() shippingForm!: FormGroup;
	@Output() onFormReady = new EventEmitter<FormGroup>();

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.shippingForm = this.fb.group({
			name: ['', [Validators.required]],
			address: ['', [Validators.required]],
			city: ['', [Validators.required]],
			country: ['', [Validators.required]],
			zipcode: ['', [Validators.required]]
		});
		this.onFormReady.emit(this.shippingForm);
	}
}
