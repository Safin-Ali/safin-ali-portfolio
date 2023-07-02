import React, { ChangeEvent, FocusEvent, KeyboardEvent, MouseEvent } from 'react';
export default interface InputFieldProps {
    // Attributes
    type: string;
    value?: string | number;
    name?: string;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    autoComplete?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    maxLength?: number;
    minLength?: number;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    step?: number | string;
    pattern?: string;

    // Event handlers
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
    onClick?: (event: MouseEvent<HTMLInputElement>) => void;
    onMouseEnter?: (event: MouseEvent<HTMLInputElement>) => void;
    onMouseLeave?: (event: MouseEvent<HTMLInputElement>) => void;
    onWheel?: (event: React.WheelEvent<HTMLInputElement>) => void;
}