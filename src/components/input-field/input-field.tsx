import {
	Component,
	Element,
	h,
	Event,
	EventEmitter,
	Prop,
	State
} from "@stencil/core";

@Component({
	tag: "input-field",
	styleUrl: "input-field.scss"
})
export class InputField {
	@Element() el: HTMLElement;
	@Prop({ attribute: "id" }) elementId!: string;
	@Prop() optional: boolean = false;
	@Prop() required: boolean = !this.optional;
	@Prop() value: string;
	@Prop() name!: string;
	@Prop() label: string;
	@Prop() placeholder: string = " ";
	@Prop() description: string;

	@Event() valueModel: EventEmitter;

	@State() dirty: boolean;
	@State() errorMessage: string;
	@State() error: boolean;

	valueChanged() {
		const inputEl = this.el.querySelector("input");
		console.log("valueChanged");
		// only update if model and view differ
		if (inputEl.value !== this.value) inputEl.value = this.value;
	}
	inputChanged(event: any) {
		console.log("inputChanged", event);
		let val = event.target && event.target.value;
		this.value = val;
		this.valueModel.emit(this.value);
	}

	handleBlur() {
		console.log("handleBlur");
		this.dirty = true;
		this.error = false;
		// this.value = event.target.value;
		if (this.value.length < 1 && this.required) {
			this.error = true;
			this.errorMessage = "You need to fill in atleast something...";
		}
	}

	render() {
		return (
			<div
				class="input-field"
				// class={`input-field ${
				// 	this.dirty ? 'input-field--dirty' : 'input-field--pristine'
				// }`}
			>
				{this.description ? (
					<div class="input-field__description">{this.description}</div>
				) : (
					<div></div>
				)}{" "}
				{this.errorMessage && this.error ? (
					<div class="input-field__error">{this.errorMessage}</div>
				) : (
					<div></div>
				)}
				<slot name="after"></slot>
				<input
					onBlur={this.handleBlur}
					onInput={event => this.inputChanged(event)}
					class="input-field__input"
					value={this.value}
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
