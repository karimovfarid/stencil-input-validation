/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CustomInput {
        "inputId": string;
        "isSubmitted": boolean;
        "isValid": boolean;
        "label": string;
        "name": string;
        "type": string;
        "validation": string;
        "value": string;
    }
}
export interface CustomInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCustomInputElement;
}
declare global {
    interface HTMLCustomInputElement extends Components.CustomInput, HTMLStencilElement {
    }
    var HTMLCustomInputElement: {
        prototype: HTMLCustomInputElement;
        new (): HTMLCustomInputElement;
    };
    interface HTMLElementTagNameMap {
        "custom-input": HTMLCustomInputElement;
    }
}
declare namespace LocalJSX {
    interface CustomInput {
        "inputId"?: string;
        "isSubmitted"?: boolean;
        "isValid"?: boolean;
        "label"?: string;
        "name"?: string;
        "onChangeInput"?: (event: CustomInputCustomEvent<string>) => void;
        "type"?: string;
        "validation"?: string;
        "value"?: string;
    }
    interface IntrinsicElements {
        "custom-input": CustomInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "custom-input": LocalJSX.CustomInput & JSXBase.HTMLAttributes<HTMLCustomInputElement>;
        }
    }
}
