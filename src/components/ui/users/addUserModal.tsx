import React from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay, Select, toast,
    useDisclosure, useToast
} from "@chakra-ui/react";
import InputField from "../custom/InputField";
import {Form, Formik} from "formik";
import * as yup from "yup";
import SelectField from "../custom/SelectField";
import axiosInstance from "../../../utils/axios";

const AddUserModal = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()

    const initialRef = React.useRef()
    const finalRef = React.useRef()
    const toast = useToast()
    const toastIdRef: React.Ref<any> = React.useRef()


    return (

        <>
            <Button
                colorScheme='blue'
                my={3}
                mx={3}
                onClick={onOpen}
            >
                Add User
            </Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Add User</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody pb={6}>
                        <Formik
                            enableReinitialize={true}
                            validateOnChange={true}
                            initialValues={{
                                email: '',
                                name: '',
                                phone: '',
                                access_level: '',
                                password: 'paavan@admin'
                            }}
                            validationSchema={yup.object({
                                email: yup.string().required().email(),
                                name: yup.string().required(),
                                phone: yup.string().required(),
                                access_level: yup.string().required(),
                                password: yup.string().required(),
                            })}
                            onSubmit={async (data, {setSubmitting}) => {
                                setSubmitting(true);
                                const response = await axiosInstance.post('/user/add', data)

                                if (response.status === 200) {
                                    // @ts-ignore
                                    toastIdRef.current = toast({
                                        title: 'Success',
                                        description: 'User added successfully',
                                        status: 'success',
                                    })
                                    onClose()
                                } else {
                                    // @ts-ignore
                                    toastIdRef.current = toast({
                                        title: 'Error',
                                        description: 'User cant be added',
                                        status: 'error',
                                    })
                                }
                            }}
                        >
                            {({isSubmitting}) => (
                                <Form>
                                    <InputField
                                        placeholder={"Email"}
                                        name={"email"}
                                        type={'email'}
                                    />

                                    <InputField
                                        placeholder={"Name"}
                                        name={"name"}
                                        type={'text'}
                                    />

                                    <InputField
                                        placeholder={"Phone"}
                                        name={"phone"}
                                        type={'text'}
                                    />

                                    <InputField
                                        placeholder={"Default Password"}
                                        name={"password"}
                                        type={'text'}
                                        disabled={true}
                                    />

                                    <SelectField
                                        placeholder={"Access Level"}
                                        name={'access_level'}
                                        options={[
                                            {value: '0', label: 'Admin'},
                                            {value: '1', label: 'Editor'},
                                            {value: '2', label: 'Viewer'},
                                        ]}
                                    />
                                    <Button
                                        mt={3}
                                        mr={3}
                                        type='submit'
                                        isLoading={isSubmitting}
                                    >
                                        Create
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </ModalBody>

                    <ModalFooter>

                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>

    )
}

export default AddUserModal;