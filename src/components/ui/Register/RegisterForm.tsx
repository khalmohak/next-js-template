import {Box, Button, Checkbox, FormControl, FormLabel, Input, Link, Stack} from "@chakra-ui/react";
import React from "react";
import {useRouter} from "next/router";

function RegisterForm({color}) {
    const router = useRouter()

    return (
        <Box my={8} textAlign='left'>
            <form>
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' placeholder='Enter your email address'/>
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Full Name</FormLabel>
                    <Input type='text' placeholder='Enter your name'/>
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <Input type='password' placeholder='Enter your password'/>
                </FormControl>

                <Button variantColor={color} width='full' mt={4}>Sign Up</Button>

                <Box mt={2}>
                    <Link onClick={() => router.push('/login')} color={`${color}.500`}>Already have an account? Sign
                        In</Link>
                </Box>
            </form>
        </Box>
    )
}

export default RegisterForm