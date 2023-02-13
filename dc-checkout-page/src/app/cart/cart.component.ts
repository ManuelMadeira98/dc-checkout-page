import { style, transition, trigger, animate } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Product } from '../models';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss'],
	animations: [
		trigger('inOutAnimation', [
			transition(':enter', [
				style({ opacity: 0 }),
				animate('0.2s ease-out', style({ opacity: 1 })),
			]),
			transition(':leave', [
				style({ opacity: 1 }),
				animate('0.2s ease-in', style({ opacity: 0 })),
			]),
		]),
	],
})
export class CartComponent {
	@Input() products: Product[] = [];

	get total() {
		let total = 0;
		this.products.forEach(product => total = total + (product.price * product.quantity));
		return Math.floor(total * 100) / 100;
	}

	add(index: number) {
		this.products[index].quantity += 1;
	}

	remove(index: number) {
		this.products[index].quantity -= 1;
	}
}
