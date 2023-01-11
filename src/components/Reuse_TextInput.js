import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {Colors} from '../Theme/Colors';
// import Fonts from '../Theme/Fonts'

const Reuse_TextInput = props => {
  return (
    <View
      style={{
        ...styles.InputStyle,
        ...props.CustomInputStyle,
        marginTop: props.marginTop || '2.5%',
      }}>
      {props.addLeft}
      <TextInput
        style={{
          flex: 1,
          color: Colors.black,
          fontSize: 13,
          //   fontFamily: Fonts.NunitoRegular,
        }}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        placeholderTextColor={Colors.AccountText}
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        editable={props.editable}
        secureTextEntry={props.secureTextEntry}
      />
      {props.addIcon}
    </View>
  );
};

export default Reuse_TextInput;

const styles = StyleSheet.create({
  InputStyle: {
    width: '90%',
    // height: 45,
    borderRadius: 6,
    borderColor: Colors.gray,
    borderWidth: 1,
    alignSelf: 'center',
    paddingHorizontal: '2%',
    // marginTop: '2.5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
