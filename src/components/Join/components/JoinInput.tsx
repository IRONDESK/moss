import { UseFormRegisterReturn } from 'react-hook-form';

//TS
interface InputProps {
  required: boolean;
  name: string;
  type: string;
  register: UseFormRegisterReturn;
  placeholer: string;
}

export default function JoinInput({
  required,
  name,
  type,
  register,
  placeholer,
}: InputProps) {
  return (
    <>
      <input
        required={required}
        id={name}
        {...register}
        type={type}
        placeholder={placeholer}
      />
    </>
  );
}
