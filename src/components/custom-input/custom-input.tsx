import { Component, Prop, h } from '@stencil/core';
import { Validator, defaultValidator, getValidator } from '../validators';

@Component({
  tag: 'custom-input',
  styleUrl: 'custom-input.css',
  shadow: true,
})
export class CustomInput {
  @Prop({ mutable: true }) value: string;
  @Prop() id: string = "default-id";
  @Prop() type: string;
  @Prop() label: string;
  @Prop() validationPattern: any;
  _validator: Validator<string> = defaultValidator;

  componentWillLoad() {
    this._validator = getValidator<string>(this.validationPattern);
  }

  componentWillUpdate() {
    this._validator = getValidator<string>(this.validationPattern);
  }

  handleChange = (ev) => {
    this.value = ev.target ? ev.target.value : null;
  };

  render() {
    const checkValidationState = this._validator.validate(this.value)
    return (
      <div>
        <div class='input-container'>
          <label htmlFor={this.id}>{this.label}</label>
          <input
            id={this.id}
            class={`input-style${!checkValidationState ? ' input-error' : ''}`}
            type={this.type}
            value={this.value}
            onInput={this.handleChange} />
          {!checkValidationState && <span class='validation-error'>{this._validator.errorMessage}</span>}
        </div>
      </div>
    );
  }
}
