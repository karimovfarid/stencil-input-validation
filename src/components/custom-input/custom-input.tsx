import { Component, Prop, Event, EventEmitter, h, Host, Watch } from '@stencil/core';
import { defaultValidator, getValidator } from '../../utils/validators';

@Component({
  tag: 'custom-input',
  styleUrl: 'custom-input.css',
  shadow: true,
})
export class CustomInput {
  @Prop({ mutable: true }) value: string;
  @Prop() inputId: string;
  @Prop() type: string;
  @Prop({ mutable: true }) label: string;
  @Prop() validation: string;
  @Prop({ mutable: true }) isValid: boolean;
  @Prop() name: string;
  @Prop({ mutable: true }) isSubmitted: boolean = false;
  @Event() changeInput: EventEmitter<string>;
  _validator;

  @Watch('isSubmitted')
  validateDate(newValue) {
    this.isSubmitted = newValue
  }

  componentWillLoad() {
    this._validator = defaultValidator;
  }

  componentWillUpdate() {
    this._validator = Boolean(this.value) || this.isSubmitted  ? getValidator(this.validation) : defaultValidator;
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
            <label htmlFor={this.inputId}>{this.label}</label>
            <input
              id={this.inputId}
              name={this.name}
              type={this.type}
              value={this.value}
              onInput={this.handleChange} />
            {!checkValidationState && <span class='validation-error'>{this._validator.errorMessage}</span>}
          </div>
      </Host>
    );
  }
}
