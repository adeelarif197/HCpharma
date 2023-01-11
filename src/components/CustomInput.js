import React from 'react';
import {Text, TextInput, StyleSheet, View} from 'react-native';
import {Colors} from '../Theme/Colors';

const CustomInput = props => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <>
      <View style={styles.inputbox}>
        <TextInput
          style={[styles.textInput, hasError && styles.errorInput]}
          value={value}
          onChangeText={text => onChange(name)(text)}
          onBlur={() => {
            setFieldTouched(name);
            onBlur(name);
          }}
          {...inputProps}
        />
        <View style={styles.errobox}>
          {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputbox: {
    alignItems: 'center',
  },
  textInput: {
    // paddingVertical: '2%',
    // padding: 6,
    width: '90%',
    marginVertical: 10.5,
    borderColor: 'grey',
    borderWidth: 0.5,
    borderRadius: 3,
    paddingLeft: 15,
  },
  errobox: {
    width: '90%',
  },
  errorText: {
    fontSize: 8,
    color: Colors.red,
    bottom: 8,

    // color: '#fe4042',
  },
  errorInput: {
    borderColor: Colors.red,
    // borderColor: '#fe4042',
  },
});

export default CustomInput;
