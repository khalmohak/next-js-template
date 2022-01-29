import {Box, Button, Checkbox, FormControl, FormLabel, Input, Link, Stack, useToast} from "@chakra-ui/react";
import React from "react";
import {useRouter} from "next/router";
import {Form, Formik} from "formik";
import InputField from "../custom/InputField";
import * as yup from "yup";
import axiosInstance from "../../../utils/axios";
import {login} from "../../../redux/actions/user";
import {connect} from "react-redux"

function LoginForm(props) {
    const {login, color} = props
    const router = useRouter()
    const toast = useToast()
    const toastIdRef: React.Ref<any> = React.useRef()
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
                    try {
                        const response = await axiosInstance.post('/auth/login', data);
                        if (response.status === 200) {
                            await login(response.data)
                            //@ts-ignore
                            toastIdRef.current = toast({
                                title: 'Login Successful',
                                description: 'You have successfully logged in',
                                status: 'success',
                                duration: 5000,
                                isClosable: true,
                                position: 'top-right'
                            })
                        }
                    } catch (err) {
                        //@ts-ignore
                        toastIdRef.current = toast({
                            title: 'Login Failed',
                            status: 'error',
                            duration: 5000,
                            isClosable: true,
                            position: 'top-right',
                        })
                        return;
                    }

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