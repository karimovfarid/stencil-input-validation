# custom-input



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                                                                                                                              | Type                             | Default     |
| ------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| `error`       | `error`        | Takes the error message of the input.                                                                                                                                                    | `string`                         | `undefined` |
| `inputId`     | `input-id`     | Takes the id of the input.                                                                                                                                                               | `string`                         | `undefined` |
| `isSubmitted` | `is-submitted` | When used in forms, it checks whether the form has been submitted or not.                                                                                                                | `boolean`                        | `false`     |
| `isValid`     | `is-valid`     | Checks final state of validation.                                                                                                                                                        | `boolean`                        | `undefined` |
| `label`       | `label`        | Takes the lable of the input.                                                                                                                                                            | `string`                         | `undefined` |
| `name`        | `name`         | The name of the control, which is submitted with the form data.                                                                                                                          | `string`                         | `undefined` |
| `size`        | `size`         | Determines the size of the input.                                                                                                                                                        | `"large" \| "medium" \| "small"` | `undefined` |
| `type`        | `type`         | Takes the type of the input (url, text, etc).                                                                                                                                            | `string`                         | `undefined` |
| `validation`  | `validation`   | A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. | `string`                         | `undefined` |
| `value`       | `value`        | Takes the value of the input.                                                                                                                                                            | `string`                         | `undefined` |


## Events

| Event         | Description                         | Type                  |
| ------------- | ----------------------------------- | --------------------- |
| `changeInput` | Emitted when the value has changed. | `CustomEvent<string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
