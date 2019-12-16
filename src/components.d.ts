/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface InputField {
    'description': string;
    'elementId': string;
    'label': string;
    'name': string;
    'optional': boolean;
    'placeholder': string;
    'required': boolean;
    'value': string;
  }
}

declare global {


  interface HTMLInputFieldElement extends Components.InputField, HTMLStencilElement {}
  var HTMLInputFieldElement: {
    prototype: HTMLInputFieldElement;
    new (): HTMLInputFieldElement;
  };
  interface HTMLElementTagNameMap {
    'input-field': HTMLInputFieldElement;
  }
}

declare namespace LocalJSX {
  interface InputField {
    'description'?: string;
    'elementId': string;
    'label'?: string;
    'name': string;
    'onChange'?: (event: CustomEvent<any>) => void;
    'optional'?: boolean;
    'placeholder'?: string;
    'required'?: boolean;
    'value'?: string;
  }

  interface IntrinsicElements {
    'input-field': InputField;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'input-field': LocalJSX.InputField & JSXBase.HTMLAttributes<HTMLInputFieldElement>;
    }
  }
}


