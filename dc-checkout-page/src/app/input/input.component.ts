import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { InputType } from '../models';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss'],
})
export class InputComponent {
	inputTypes = InputType;
	@Input() inputField!: AbstractControl | null;
}
