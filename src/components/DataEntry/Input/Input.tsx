// @ts-nocheck
import React, { FunctionComponent, forwardRef } from 'react';

// styles
import { Input as InputStyled } from './InputStyled';

type TProps = {
  className?: string;
  disabled?: boolean;
  onChange?: (e: Event) => void;
  placeholder?: string;
  prefix?: React.ReactNode;
  ref?: React.RefObject<any>;
  size?: 'large' | 'middle' | 'small';
  suffix?: React.ReactNode;
  styles?: any;
  value?: string;
};

const Input: FunctionComponent<TProps> = forwardRef(
  (
    {
      className = '',
      disabled = false,
      onChange,
      placeholder = '',
      prefix,
      size = 'small',
      suffix = null,
      styles = null,
      value = '',
    },
    ref
  ) => {
    return (
      <InputStyled
        className={className}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        size={size}
        styles={styles}
        {...(prefix ? { prefix: prefix } : {})}
        {...(ref ? { ref: ref } : {})}
        {...(suffix ? { suffix: suffix } : {})}
        value={value}
      />
    );
  }
);

export default Input;
