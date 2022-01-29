import {Box, Button, useToast} from "@chakra-ui/react";
import React from "react";
import {useRouter} from "next/router";
import {Form, Formik} from "formik";
import InputField from "./custom/InputField";
import * as yup from "yup";
import axiosInstance from "../../utils/axios";
import {connect} from "react-redux"

function ResetPasswordForm(props) {
    const {color,id} = props
    const router = useRouter()
    const toast = useToast()
    const toastIdRef: React.Ref<any> = React.useRef()

    const validationSchema = yup.object({
        id: yup.string().required(),
        password: yup.string().min(5).required(),
        password_confirm: yup.string().min(5).required(),
    });

    return (
        <Box my={8} textAlign='left'>
            <Formik
                enableReinitialize={true}
                validateOnChange={true}
                initialValues={{
                    password_confirm: '',
                    password: '',
                    id: id || '',
                }}
                validationSchema={validationSchema}
                onSubmit={async (data, {setSubmitting}) => {
                    if(data.password !== data.password_confirm){
                        //@ts-ignore
                        toastIdRef.current = toast({
                            title: 'Password not match',
                            description: 'Please check your password',
                            status: 'error',
                            duration: 5000,
                            isClosable: true,
                        })
                        setSubmitting(false)
                        return
                    }
                    setSubmitting(true);
                    const response = await axiosInstance.post('/user/reset-password', data);
                    if (response.status === 200) {
                        //@ts-ignore
                        toastIdRef.current = toast({
                            title: 'Password reset successfully',
                            description: 'Please login with your new password',
                            status: 'success',
                            duration: 5000,
                            isClosable: true,
                        })
                        setSubmitting(false)
                        await router.push('/login')
                    } else {
                        //@ts-ignore
                        toastIdRef.current = toast({
                            title: 'Something went wrong',
                            description: 'Please try again',
                            status: 'error',
                            duration: 5000,
                            isClosable: true,
                        })
                        setSubmitting(false)
                    }

                    setSubmitting(false);

                }}
            >
                {({values, isSubmitting}) => (
                    <Form>
                        <InputField
                            placeholder={"Password"}
                            name={"password"}
                            type={'password'}
                            value={values.password}
                        />

                        <InputField
                            placeholder={"Confirm Password"}
                            name={"password_confirm"}
                            type={'password'}
                            value={values.password_confirm}
                        />

                        <Button
                            type={'submit'}
                            variantColor={color}
                            isLoading={isSubmitting}
                            width='full'
                            mt={4}>Reset Password</Button>

                    </Form>
                )}
            </Formik>
        </Box>
    )
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordForm)