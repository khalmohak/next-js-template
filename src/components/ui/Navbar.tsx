import React from "react";
import {Box, Link, Flex, Button, Heading, Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/react";
import NextLink from "next/link";
import {useRouter} from "next/router";
import {connect} from "react-redux"
import axiosInstance from "../../utils/axios";

interface NavBarProps {
    name: string;
    auth: boolean;
    email: string;
}

const NavBar: React.FC<NavBarProps> = (props) => {
    const router = useRouter();
    const {auth} = props;
    const loading = false
    let body = null;
    console.log(auth);
    if (loading) {
        // user not logged in
    } else if (auth === false) {
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

                <Menu>
                    {({isOpen}) => (
                        <>
                            <MenuButton
                                isActive={isOpen}
                                as={Button}
                                // rightIcon={<CgProfile />}
                            >
                                Profile
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={async () => {
                                    await axiosInstance.get("/auth/logout")
                                     router.reload();
                                }}>Logout</MenuItem>
                            </MenuList>
                        </>
                    )}
                </Menu>
            </Flex>
        );
    }

    return (
        <Flex zIndex={2} position="sticky" top={0} p={4} boxShadow='md' bg={'white'}>
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

const mapStateToProps = state => {
    return {name: state.user.name, auth: state.user.authenticated, email: state.user.email}
}

export default connect(mapStateToProps)(NavBar);