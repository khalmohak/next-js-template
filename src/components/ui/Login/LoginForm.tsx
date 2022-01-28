import {Box, Button, Checkbox, FormControl, FormLabel, Input, Link, Stack} from "@chakra-ui/react";
import React from "react";
import {useRouter} from "next/router";

function LoginForm({color}) {
    const router = useRouter()

    return (
        <Box my={8} textAlign='left'>
            <form>
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' placeholder='Enter your email address'/>
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <Input type='password' placeholder='Enter your password'/>
                </FormControl>

                <Stack isInline justifyContent='space-between' mt={4}>
                    <Box>
                        <Checkbox>Remember Me</Checkbox>
                    </Box>
                    <Box>
                        <Link color={`${color}.500`}>Forgot your password?</Link>
                    </Box>
                </Stack>

                <Button variantColor={color} width='full' mt={4}>Sign In</Button>

                <Box mt={2}>
                    <Link onClick={() => router.push('/register')} color={`${color}.500`}>Don't have an account? Sign Up</Link>
                </Box>
            </form>
        </Box>
    )
}

export default LoginForm