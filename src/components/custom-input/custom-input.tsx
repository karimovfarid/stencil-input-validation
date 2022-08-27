import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';
import { defaultValidator, getValidator } from '../../utils/validators';

@Component({
  tag: 'custom-input',
  styleUrl: 'custom-input.css',
  shadow: true,
})
export class CustomInput {
  @Prop({ mutable: true }) value: string;
  @Prop() id: string = 'default-id';
  @Prop() type: string;
  @Prop({ mutable: true }) label: string;
  @Prop() validation: string;
  @Prop({ mutable: true }) isValid: boolean;
  @Event() changeInput: EventEmitter<string>;
  _validator;

  componentWillLoad() {
    this._validator = defaultValidator;
  }

  componentWillUpdate() {
    this._validator = Boolean(this.value) ? getValidator(this.validation) : defaultValidator;
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
          <div class={`input-container${!checkValidationState ? ' input-error' : ''}`}>
            <label htmlFor={this.id}>{this.label}</label>
            <input
              id={this.id}
              name={this.id}
              type={this.type}
              value={this.value}
              onInput={this.handleChange} />
            {!checkValidationState && <span class='validation-error'>{this._validator.errorMessage}</span>}
          </div>
      </Host>
    );
  }
}
