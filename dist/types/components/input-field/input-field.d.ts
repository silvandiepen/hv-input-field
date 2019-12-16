export declare class InputField {
    elementId: string;
    optional: boolean;
    required: boolean;
    value: string;
    name: string;
    label: string;
    placeholder: string;
    description: string;
    dirty: boolean;
    errorMessage: string;
    error: boolean;
    handleBlur(event: any): void;
    handleChange(event: any): void;
    render(): any;
}
