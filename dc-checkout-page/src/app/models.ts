export interface Product {
	name: string;
	picture: string;
	price: number;
	strike: number;
	quantity: number;
}

export enum InputType {
	Text = 'text',
	Email = 'email',
	Tel = 'tel'
}