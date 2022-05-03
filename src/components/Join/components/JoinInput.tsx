import { UseFormRegisterReturn } from 'react-hook-form';

//TS
interface InputProps {
  required: boolean;
  name: string;
  type: string;
  register: UseFormRegisterReturn;
  placeholer: string;
  label: string;
}

export default function JoinInput({
  required,
  name,
  type,
  register,
  placeholer,
  label,
}: InputProps) {
  return (
    <div>
      <label htmlFor={name} className="a11y-hidden">
        {label}
      </label>
      <input
        required={required}
        id={name}
        {...register}
        type={type}
        placeholder={placeholer}
      />
    </div>
  );
}
