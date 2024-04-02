import DateInputField, { DateInputFieldProps } from './date-input-field';
import NumberInputField, { NumberInputFieldProps } from './number-input-field';
import PasswordInputField, {
  PasswordInputFieldProps,
} from './password-input-field';
import RadioInputField, { RadioInputFieldProps } from './radio-input-field';
import SelectField, { SelectFieldProps } from './select-input-field';
import SubmitField, { SubmitFieldProps } from './submit-field';
import TextInputField, { TextInputFieldProps } from './text-input-field';

export type InputProps =
  | TextInputFieldProps
  | PasswordInputFieldProps
  | DateInputFieldProps
  | NumberInputFieldProps
  | RadioInputFieldProps
  | SubmitFieldProps
  | SelectFieldProps;

export default function Input(props: InputProps) {
  switch (props.type) {
    case 'date':
      return <DateInputField {...props} />;
    case 'select':
      return <SelectField {...props} />;
    case 'password':
      return <PasswordInputField {...props} />;
    case 'number':
      return <NumberInputField {...props} />;
    case 'radio':
      return <RadioInputField {...props} />;
    case 'submit':
      return <SubmitField {...props} />;
    case 'text':
    case 'email':
    case 'tel':
    default:
      return <TextInputField {...props} />;
  }
}
