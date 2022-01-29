import React from 'react';
import {FormControl, FormErrorMessage, FormLabel, Input} from "@chakra-ui/react";
import {useField} from "formik";
import {InputHTMLAttributes} from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    placeholder: string;
    disabled?: boolean;
    name: string;
    props?: any;
};

const InputField: React.FC<InputFieldProps> = ({
                                                   placeholder,
                                                   size: _,
                                                   disabled = false,
                                                   ...props
                                               }) => {

    const [field, meta] = useField({...props});
    const errorText = meta.error && meta.touched ? meta.error : "";
    return (
        <>
            <FormControl isInvalid={!!meta.error}>
                <FormLabel htmlFor={field.name}>{placeholder}</FormLabel>
                <Input
                    id={field.name}
                    {...field}
                    disabled={disabled}
                    {...props}
                />
                {errorText && <FormErrorMessage>{errorText}</FormErrorMessage>}
            </FormControl>
        </>
    );
};

export default InputField;