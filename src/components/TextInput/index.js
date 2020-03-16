import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {useField} from '@unform/core';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text} from 'react-native';
import {Container, TInput} from './styles';

export default function Input({name, icon, placeholder, ...rest}) {
  const inputRef = useRef(null);
  const {fieldName, defaultValue = '', registerField, error} = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: '_lastNativeText',
      getValue(ref) {
        return ref._lastNativeText || '';
      },
      setValue(ref, value) {
        ref.setNativeProps({text: value});
        ref._lastNativeText = value;
      },
      clearValue(ref) {
        ref.setNativeProps({text: ''});
        ref._lastNativeText = '';
      },
    });
  }, [fieldName, registerField]);
  return (
    <Container {...rest}>
      <TInput
        ref={inputRef}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
      {icon && <Icon name={icon} size={20} color="#000" />}
    </Container>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  name: null,
  icon: null,
  placeholder: null,
};
