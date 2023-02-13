import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { Product } from './models';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	products: Product[] = [
		{
			name: 'Vintage Backbag',
			picture: './../assets/photo1.png',
			price: 54.99,
			strike: 94.99,
			quantity: 1
		},
		{
			name: 'Levi Shoes',
			picture: './../assets/photo2.png',
			price: 74.99,
			strike: 124.99,
			quantity: 1
		}
	];

	contactForm!: FormGroup;
	shippingForm!: FormGroup;

	constructor(private matDialog: MatDialog) {}

	onSubmit() {
		this.contactForm.markAllAsTouched();
		this.shippingForm.markAllAsTouched();

		if (this.contactForm.valid && this.shippingForm.value) {
			this.matDialog.open(DialogComponent, {
				width: '300px',
				height: '150px'
			});
		}
	}

	onContactFormReady(form: FormGroup) {
		this.contactForm = form;
	}

	onShippingFormReady(form: FormGroup) {
		this.shippingForm = form;
	}
}
