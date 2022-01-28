import React from "react";
import {Box, Link, Flex, Button, Heading} from "@chakra-ui/react";
import NextLink from "next/link";
import {useRouter} from "next/router";

interface NavBarProps {
}

export const NavBar: React.FC<NavBarProps> = ({}) => {
    const router = useRouter();
    const loading = false
    let data;
    let body = null;

    if (loading) {
        // user not logged in
    } else if (data===undefined || !data?.me) {
        body = (
            <>
                <NextLink href="/login">
                    <Button mr={2}>Login</Button>
                </NextLink>
                <NextLink href="/register">
                    <Button>Register</Button>
                </NextLink>
            </>
        );
    } else {
        body = (
            <Flex align="center">
                <Box mr={2}>{data.me.username}</Box>
            </Flex>
        );
    }

    return (
        <Flex zIndex={1} position="sticky" top={0} p={4} boxShadow='md'>
            <Flex flex={1} m="auto" align="center" maxW={800}>
                <NextLink href="/">
                    <Link>
                        <Heading>Next JS </Heading>
                    </Link>
                </NextLink>
                <Box ml={"auto"}>{body}</Box>
            </Flex>
        </Flex>
    );
};