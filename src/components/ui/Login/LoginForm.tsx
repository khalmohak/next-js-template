import {Box, Button, Checkbox, FormControl, FormLabel, Input, Link, Stack} from "@chakra-ui/react";
import React from "react";
import {useRouter} from "next/router";
import {Form, Formik} from "formik";
import InputField from "../InputField";
import * as yup from "yup";
import axiosInstance from "../../../utils/axios";
import {login} from "../../../redux/actions/user";
import {connect} from "react-redux"

function LoginForm(props) {
    const {login,color} = props
    const router = useRouter()

    const validationSchema = yup.object({
        email: yup.string().required().email(),
        password: yup.string().min(5).required()
    });

    return (
        <Box my={8} textAlign='left'>
            <Formik
                enableReinitialize={true}
                validateOnChange={true}
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={validationSchema}
                onSubmit={async (data, {setSubmitting}) => {
                    setSubmitting(true);
                    const response = await axiosInstance.post('/auth/login', data);
                    console.log(response.data);
                    await login(response.data)
                    setSubmitting(false);
                     await router.push('/')
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
                            placeholder={"Password"}
                            name={"password"}
                            type={'password'}
                            value={values.password}
                        />

                        <Stack isInline justifyContent='space-between' mt={4}>
                            <Box>
                                <Checkbox>Remember Me</Checkbox>
                            </Box>
                            <Box>
                                <Link color={`${color}.500`}>Forgot your password?</Link>
                            </Box>
                        </Stack>

                        <Button
                            type={'submit'}
                            variantColor={color}
                            isLoading={isSubmitting}
                            width='full'
                            mt={4}>Sign In</Button>

                        <Box mt={2}>
                            <Link onClick={() => router.push('/register')} color={`${color}.500`}>Don't have an account?
                                Sign Up</Link>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}

const mapStateToProps = state => {
    return {name: state.user.name, token: state.user.token}
}

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)