import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputType } from 'src/app/models';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	inputTypes = InputType;
	@Input() contactForm!: FormGroup;
	@Output() onFormReady = new EventEmitter<FormGroup>();

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.contactForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			phone: ['']
		});
		this.onFormReady.emit(this.contactForm);
	}
}
