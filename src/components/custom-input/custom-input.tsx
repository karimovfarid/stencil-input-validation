import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';
import { Validator, defaultValidator, getValidator } from '../validators';

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
  @Prop() validationpattern: any;
  @Event() changeInput: EventEmitter<string>;
  _validator: Validator<string> = defaultValidator;

  componentWillLoad() {
    this._validator = getValidator<string>(this.validationpattern);
  }

  componentWillUpdate() {
    this._validator = getValidator<string>(this.validationpattern);
  }

  // handleChange = (ev) => {
  //   this.value = ev.target ? ev.target.value : null;
  //   this.changeInput.emit(this.value);
  // };

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
              type={this.type}
              value={this.value}
              onInput={(event) => this.changeInput.emit((event.target as HTMLTextAreaElement).value)} />
            {!checkValidationState && <span class='validation-error'>{this._validator.errorMessage}</span>}
          </div>
        </div>
      </Host>
    );
  }
}
