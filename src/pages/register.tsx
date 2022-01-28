import React from 'react'
import {
    Box,
    Flex,
    Heading,
    Text,
    Link,
} from '@chakra-ui/react'
import RegisterForm from "../components/ui/Register/RegisterForm";
import {Layout} from "../components/ui/Layout";

const VARIANT_COLOR = 'teal'

function Register() {
    return (
        <Layout>
            <Flex  width='full' align='center' justifyContent='center'>
                <Box
                    borderWidth={1}
                    px={4}
                    width='full'
                    maxWidth='500px'
                    borderRadius={4}
                    textAlign='center'
                    boxShadow='lg'
                >
                    <Box p={4}>
                        <Box textAlign='center'>
                            <Heading>Register</Heading>
                        </Box>
                        <RegisterForm
                            color={VARIANT_COLOR}
                        />
                    </Box>
                </Box>
            </Flex>
        </Layout>
    )
}

export default Register



