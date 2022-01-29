import React, {InputHTMLAttributes} from 'react';
import {FormControl, FormErrorMessage, FormLabel, Select} from "@chakra-ui/react";
import {useField} from "formik";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    placeholder: string;
    name: string;
    options: Array<{
        label: string;
        value: string;
    }>;
    props?: any;
};

const SelectField: React.FC<InputFieldProps> = ({
                                                    placeholder,
                                                    size: _,
                                                    ...props
                                                }) => {

    const [field, meta] = useField({...props});
    const errorText = meta.error && meta.touched ? meta.error : "";
    return (
        <>
            <FormControl isInvalid={!!meta.error}>
                <FormLabel htmlFor={field.name}>{placeholder}</FormLabel>
                <Select
                    id={field.name}
                    {...field}
                    {...props}
                >
                    {props.options.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </Select>
                {errorText && <FormErrorMessage>{errorText}</FormErrorMessage>}
            </FormControl>
        </>
    );
};

export default SelectField;