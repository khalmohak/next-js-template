import {Box, Button, Link} from "@chakra-ui/react";
import React from "react";
import {useRouter} from "next/router";
import {Form, Formik} from 'formik'
import InputField from "../custom/InputField";
import * as yup from 'yup'

function RegisterForm({color}) {
    const router = useRouter()

    const validationSchema = yup.object({
        email: yup.string().required().email(),
        password: yup.string().min(6).required(),
        username: yup.string().required(),
        phone: yup.string().min(10).required()
    });

    return (
        <Box my={8} textAlign='left'>
            <Formik
                enableReinitialize={true}
                validateOnChange={true}
                initialValues={{
                    email: '',
                    phone: '',
                    password: '',
                    username: '',
                }}
                validationSchema={validationSchema}
                onSubmit={async (data, {setSubmitting}) => {
                    setSubmitting(true);
                    console.log(data)
                    setSubmitting(false);
                }}
            >
                {({values, isSubmitting}) => (
                    <Form>
                        <InputField
                            placeholder={"Email"}
                            name={"email"}
                            type={'email'}
                            value={values.email}
                        />

                        <InputField
                            placeholder={"Full Name"}
                            name={"username"}
                            type={'text'}
                            value={values.username}
                        />

                        <InputField
                            placeholder={"Password"}
                            name={"password"}
                            type={'password'}
                            value={values.password}
                        />

                        <InputField
                            placeholder={"Phone"}
                            name={"phone"}
                            type={'text'}
                            value={values.phone}
                        />

                        <Button
                            type={'submit'}
                            variantColor={color}
                            isLoading={isSubmitting}
                            width='full'
                            mt={4}>Sign Up</Button>

                        <Box mt={2}>
                            <Link onClick={() => router.push('/login')} color={`${color}.500`}>Already have an account?
                                Sign
                                In
                            </Link>
                        </Box>
                    </Form>
                )}</Formik>
        </Box>
    )
}

export default RegisterForm