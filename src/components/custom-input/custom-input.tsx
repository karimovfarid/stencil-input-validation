import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';
import { Validator, defaultValidator } from '../validators';

@Component({
  tag: 'custom-input',
  styleUrl: 'custom-input.css',
  shadow: true,
})
export class CustomInput {
  @Prop({ mutable: true }) value: string;
  @Prop() id: string = 'default-id';
  @Prop() type: string;
  @Prop() label: string;
  @Prop() validation: RegExp = new RegExp('');
  @Prop() isValid: boolean;
  @Event() changeInput: EventEmitter<string>;
  _validator: Validator<string> = defaultValidator;

  getValidator() {
    return {
      validate: (value: string) => !!this.validation.test(value),
      errorMessage: 'You must enter a valid input params'
    }
  }

  componentWillLoad() {
    this._validator = this.getValidator();
  }

  componentWillUpdate() {
    this._validator = this.getValidator();
  }

  handleChange = (event) => {
    this.value = event.target ? (event.target as HTMLTextAreaElement).value : null;
    this.changeInput.emit(event)
    this.isValid = this._validator.validate(this.value);
  };

  render() {
    const checkValidationState = this._validator.validate(this.value);
    return (
      <Host>
        <div>
          <div class='input-container'>
            <label htmlFor={this.id}>{this.label}</label>
            <input
              id={this.id}
              class={`input-style${!checkValidationState ? ' input-error' : ''}`}
              name={this.id}
              type={this.type}
              value={this.value}
              onInput={this.handleChange} />
            {!checkValidationState && <span class='validation-error'>{this._validator.errorMessage}</span>}
          </div>
        </div>
      </Host>
    );
  }
}
