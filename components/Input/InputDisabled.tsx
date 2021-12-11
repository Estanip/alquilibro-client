import React from 'react';
import { TextInput } from 'react-native';
import { inputStyle } from './inputStyles';

interface inputProps {
    placeHolder: string;
    value: string;
    name: string;
    handleChange: any;
    handleBlur: any;
}

export default function InputDisabled(props: inputProps) {

    const { name, handleChange, handleBlur, placeHolder, value } = props;

    return (

        <TextInput
            editable={false}
            style={{...inputStyle.container, color: 'red'}}
            placeholder={placeHolder}
            value={value}
            selectTextOnFocus={false}
            onChangeText={handleChange(name)}
            onBlur={handleBlur(name)}

        />

    )
}
