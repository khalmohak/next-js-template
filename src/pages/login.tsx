import React from 'react'
import {
    Box,
    Flex,
    Heading,
    Text,
    Link,
} from '@chakra-ui/react'
import LoginForm from "../components/ui/Login/LoginForm";
import {Layout} from "../components/ui/Layout";

const VARIANT_COLOR = 'teal'

function Login() {
    return (
        <Layout>
            <Flex mt={4} width='full' align='center' justifyContent='center'>
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
                            <Heading>Sign In to Your Account</Heading>
                        </Box>
                        <LoginForm
                            color={VARIANT_COLOR}
                        />
                    </Box>
                </Box>
            </Flex>
        </Layout>
    )
}

export default Login



