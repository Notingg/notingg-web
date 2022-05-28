import React, { InputHTMLAttributes } from 'react';
import * as S from './styles';
import { useField } from '@unform/core';
import SearchIcon from '../../../../public/assets/icons/searchIcon.svg';

type SearchInputProps = {
  label?: string;
  placeholder?: string;
  name: string;
  // eslint-disable-next-line
  onSubmit: (data: any) => void;
  iconPosition: 'right' | 'left';
} & InputHTMLAttributes<HTMLInputElement>;

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  label,
  iconPosition,
  name,
  onSubmit,
}) => {
  const SearchInputRef = React.useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error, clearError } =
    useField(name);

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: SearchInputRef,
      getValue: ref => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: ref => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  const onClickSubmit = React.useCallback(
    // eslint-disable-next-line
    (data: any) => {
      if (onSubmit) {
        onSubmit(data);
      }
    },
    [onSubmit],
  );

  return (
    <S.SearchInputWrapper>
      {label && <S.Label htmlFor={fieldName}>{label}</S.Label>}
      <S.SearchInputComponent
        placeholder={placeholder}
        onFocus={clearError}
        autoComplete={'on'}
        defaultValue={defaultValue}
        name={fieldName}
        type="search"
      />
      {error && <span className="validate-error">{error}</span>}
      <S.Icon iconPosition={iconPosition} onClick={onClickSubmit} type="button">
        <SearchIcon alt="Search icon" />
      </S.Icon>
    </S.SearchInputWrapper>
  );
};
