import { Component, Prop, Event, EventEmitter, h, Host, Watch } from "@stencil/core";

import { defaultValidator, getValidator } from "../../utils/validators";
import { Validator } from "../../interfaces/validator";

@Component({
  tag: "custom-input",
  styleUrl: "custom-input.scss",
  shadow: true,
})
export class CustomInput {
  /**
   * Takes the value of the input.
   */
  @Prop({ mutable: true }) value: string;

  /**
   * Takes the id of the input.
   */
  @Prop() inputId: string;

  /**
   * Takes the type of the input (url, text, etc).
   */
  @Prop() type: string;

  /**
   * Takes the lable of the input.
   */
  @Prop({ mutable: true }) label: string;

  /**
   * A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user.
   */
  @Prop() validation: string;

  /**
   * Checks final state of validation.
   */
  @Prop({ mutable: true }) isValid: boolean;

  /**
  * The name of the control, which is submitted with the form data.
  */
  @Prop() name: string;

  /**
   * Determines the size of the input.
   */
  @Prop({ mutable: true }) size: "small" | "medium" | "large";

  /**
   * Takes the error message of the input.
   */
  @Prop() error: string;

  /**
   * Emitted when the value has changed.
   */
  @Event() changeInput: EventEmitter<string>;

  /**
   * When used in forms, it checks whether the form has been submitted or not.
   */
  @Prop({ mutable: true }) isSubmitted: boolean = false;

  @Watch("isSubmitted")
  validateDate(newValue) {
    this.isSubmitted = newValue
    this.setValidatorAndStatus()
  }

  _validator: Validator<string>;

  setValidatorAndStatus() {
    this._validator = Boolean(this.value) || this.isSubmitted ? getValidator(this.validation) : defaultValidator;
    this.isValid = this._validator.validate(this.value);
  }

  componentWillLoad() {
    this.setValidatorAndStatus()
  }

  componentWillUpdate() {
    this.setValidatorAndStatus()
  }

  handleChange = (event) => {
    this.value = event.target ? (event.target as HTMLTextAreaElement).value : null;
    this.changeInput.emit(event)
  };

  render() {
    return (
      <Host>
          <div class={{ "input-container": true, "input-error": !this.isValid }}>
            <label htmlFor={this.inputId}>{this.label}</label>
            <input
              id={this.inputId}
              name={this.name}
              type={this.type}
              value={this.value}
              onInput={this.handleChange}
              class={{
                "border-green": this.isValid && Boolean(this.value),
                [this.size]: true
              }}
            />
            {!this.isValid && <span class="validation-error">{this.error}</span>}
          </div>
      </Host>
    );
  }
}
