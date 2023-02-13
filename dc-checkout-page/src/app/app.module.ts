import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './forms/shipping/shipping.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ContactComponent } from './forms/contact/contact.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
	declarations: [AppComponent, CartComponent, ContactComponent, ShippingComponent, InputComponent, DialogComponent],
	imports: [BrowserModule, BrowserAnimationsModule, ReactiveFormsModule, MatDialogModule, MatCheckboxModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
