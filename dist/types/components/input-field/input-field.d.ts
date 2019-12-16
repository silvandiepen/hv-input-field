import { EventEmitter } from "../../stencil.core";
export declare class InputField {
    el: HTMLElement;
    elementId: string;
    optional: boolean;
    required: boolean;
    value: string;
    name: string;
    label: string;
    placeholder: string;
    description: string;
    valueModel: EventEmitter;
    dirty: boolean;
    errorMessage: string;
    error: boolean;
    valueChanged(): void;
    inputChanged(event: any): void;
    handleBlur(): void;
    render(): any;
}
