import React from 'react';
import { TextInput } from 'react-native';

import { input } from './styles/input';

interface inputProps {
    placeHolder: string;
    value: string;
    name: string;
    handleChange: any;
}

export default function InputDisabled(props: inputProps) {

    const {name, handleChange, placeHolder, value } = props;

    return (

        <TextInput
            editable={false}
            style={input.container}
            placeholder={placeHolder}
            value={value}
            selectTextOnFocus={false}
            onChangeText={handleChange(name)} 
        />

    )
}
