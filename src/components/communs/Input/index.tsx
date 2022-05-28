import React, { InputHTMLAttributes } from 'react'
import * as S from './styles'
import { useField } from '@unform/core';

type InputProps = {
  label?: string;
  placeholder?: string;
  name: string;
} & InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<InputProps> = ({ placeholder, label, name }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error, clearError } = useField(name);

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      }
    });
  }, [fieldName, registerField]);
  return (
    <>
      {label && <S.Label htmlFor={fieldName}>{label}</S.Label>}
      <S.InputComponent
        placeholder={placeholder}
        onFocus={clearError}
        autoComplete={'on'}
        defaultValue={defaultValue}
        name={fieldName}
      />
      {error && <span className="validate-error">{error}</span>}
    </>
  )
}
