import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { input } from './styles/input';

interface inputProps {
    name: string;
    placeHolder: string;
    handleChange: any;
    value: string;
}

export default function InputForm(props: inputProps) {

    const { name, placeHolder, handleChange, value } = props;

    return (

        <TextInput
            style={input.container}
            placeholder={placeHolder}
            onChangeText={handleChange(name)}
            value={value}
        />

    )
}
