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

const EditUserModal = ({user}) => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [isChangingStatus, setIsChangingStatus] = React.useState(false)
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    const toast = useToast()
    const toastIdRef: React.Ref<any> = React.useRef()


    async function handleStatusUser(id: number, status: boolean) {
        setIsChangingStatus(true)
        try {
            const response = await axiosInstance.get(`/user/${status === true ? 'delete' : 'activate'}?id=` + id);
            if (response.status === 200) {
                //@ts-ignore
                toastIdRef.current = toast({
                    title: 'Success',
                    description: 'User status changed',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top',
                })
            } else {
                //@ts-ignore
                toastIdRef.current = toast({
                    title: 'Error',
                    description: 'User status not changed',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: 'top',
                })
            }
            setIsChangingStatus(false)
        } catch (err) {
            console.log(err)
            //@ts-ignore
            toastIdRef.current = toast({
                title: 'Error',
                description: 'User status not changed',
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top',
            })
            setIsChangingStatus(false)
        }
    }

    async function handleResetUser(id: number) {
        try{
            const response = await axiosInstance.get(`/user/reset?id=` + id);
            if (response.status === 200) {
                //@ts-ignore
                toastIdRef.current = toast({
                    title: 'Success',
                    description: 'User password reset   ',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top',
                })
            } else {
                //@ts-ignore
                toastIdRef.current = toast({
                    title: 'Error',
                    description: 'User password not reset',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: 'top',
                })
            }
        }catch (err) {
            console.log(err)
        }
    }


    return (

        <>
            <Button
                variantColor='facebook'
                variant='outline'
                size='sm'
                onClick={onOpen}
            >
                Edit
            </Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Edit User</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody pb={6}>
                        <Formik
                            enableReinitialize={true}
                            validateOnChange={true}
                            initialValues={{
                                id: user.id || "",
                                email: user.email || '',
                                name: user.name || '',
                                phone: user.phone || '',
                                access_level: user.access_level || '',
                                is_active: user.is_active || '',
                            }}
                            validationSchema={yup.object({
                                id: yup.number().required(),
                                email: yup.string().required().email(),
                                name: yup.string().required(),
                                phone: yup.string().required(),
                                access_level: yup.string().required(),
                            })}
                            onSubmit={async (data, {setSubmitting}) => {
                                setSubmitting(true);
                                const response = await axiosInstance.post('/user/update', data)

                                if (response.status === 200) {
                                    // @ts-ignore
                                    toastIdRef.current = toast({
                                        title: 'Success',
                                        description: 'User updated successfully',
                                        status: 'success',
                                    })
                                    onClose()
                                } else {
                                    // @ts-ignore
                                    toastIdRef.current = toast({
                                        title: 'Error',
                                        description: 'User cant be updated',
                                        status: 'error',
                                    })
                                }
                            }}
                        >
                            {({values, isSubmitting}) => (
                                <Form>
                                    <InputField
                                        placeholder={"ID"}
                                        name={"id"}
                                        type={'text'}
                                        disabled={true}
                                    />

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
                                        Save
                                    </Button>
                                    <Button
                                        colorScheme='blue'
                                        mt={3}
                                        mr={3}
                                        onClick={() => handleStatusUser(values.id, values.is_active)}
                                        isLoading={isChangingStatus}
                                    >
                                        {values.is_active === true ? 'Deactivate' : 'Activate'}
                                    </Button>
                                    <Button
                                        colorScheme='blue'
                                        mt={3}
                                        onClick={() => handleResetUser(values.id)}
                                    >
                                        Reset Password
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

export default EditUserModal;