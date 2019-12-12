import { Component, Prop, h, State } from '@stencil/core';

@Component({
	tag: 'input-field',
	styleUrl: 'input-field.scss'
})
export class InputField {
	@Prop({ attribute: 'id' }) elementId!: string;
	@Prop() optional: boolean = false;
	@Prop() required: boolean = !this.optional;
	@Prop() value: string;
	@Prop() name!: string;
	@Prop() label: string;
	@Prop() placeholder: string = ' ';
	@Prop() description: string;

	@State() dirty: boolean;
	@State() errorMessage: string;
	@State() error: boolean;

	handleBlur(event) {
		this.dirty = true;
		this.error = false;
		this.value = event.target.value;
		if (this.value.length < 1 && this.required) {
			this.error = true;
			this.errorMessage = 'You need to fill in atleast something...';
		}
	}
	handleChange(event) {
		console.log(event);
	}

	render() {
		return (
			<div
				class={`input-field ${
					this.dirty ? 'input-field--dirty' : 'input-field--pristine'
				}`}
			>
				{this.description ? (
					<div class="input-field__description">{this.description}</div>
				) : (
					<div></div>
				)}{' '}
				{this.errorMessage && this.error ? (
					<div class="input-field__error">{this.errorMessage}</div>
				) : (
					<div></div>
				)}
				<slot name="after"></slot>
				<input
					onBlur={(event) => this.handleBlur(event)}
					onInput={(event) => this.handleChange(event)}
					class="input-field__input"
					id={this.elementId}
					name={this.name}
					placeholder={this.placeholder}
					required={this.required}
				/>
				<label class="input-field__label">
					<span class="input-field__text">
						{this.label}
						{this.optional ? (
							<span class="input-field__optional">(optional)</span>
						) : (
							``
						)}
					</span>
				</label>
				<slot name="before"></slot>
			</div>
		);
	}
}
