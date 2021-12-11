import React from 'react';
import { TextInput } from 'react-native';
import { inputStyle } from './inputStyles';

interface inputProps {
    name: string;
    placeHolder: string;
    handleChange: any;
    value: string;
    handleBlur: any;
}

export default function InputForm(props: inputProps) {

    const { name, placeHolder, handleBlur, handleChange, value } = props;

    return (

        <TextInput
            style={inputStyle.container}
            placeholder={placeHolder}
            onChangeText={handleChange(name)} 
            value={value}
            onBlur={handleBlur(name)}
        />

    )
}
