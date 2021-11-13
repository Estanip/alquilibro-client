import React from 'react';
import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { RootStackScreenProps } from '../types';

export default function UploadBookScreen({ navigation }: RootStackScreenProps<'Upload'>) {

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

    return (
        <View>
          <Controller
            control={control}
            rules={{
             required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
/*             name="firstName"
 */          />
{/*           {errors.firstName && <Text>This is required.</Text>}
 */}    
          <Controller
            control={control}
            rules={{
             maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
          />
    
          <Button title="Submit" />
        </View>
      );
}


