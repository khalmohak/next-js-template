import React from "react";
import {
    Box,
    Link,
    Flex,
    Button,
    Heading,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useColorMode,
    useColorModeValue, Input
} from "@chakra-ui/react";
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
    const {colorMode, toggleColorMode} = useColorMode()
    const router = useRouter();
    const {auth} = props;
    let body = null;
    if (auth === false) {
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
                            >
                                Profile
                            </MenuButton>

                            <MenuList>
                                <MenuItem>
                                    <Button onClick={toggleColorMode}>
                                        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                                    </Button>
                                </MenuItem>
                                <MenuItem><Button onClick={async () => {
                                    await axiosInstance.get("/auth/logout")
                                    router.reload();
                                }}>
                                    Logout
                                </Button></MenuItem>
                            </MenuList>
                        </>
                    )}
                </Menu>
            </Flex>
        );
    }

    return (
        <Flex zIndex={2} position="sticky" top={0} p={4} boxShadow='md'
              bg={useColorModeValue('white', 'gray.900')}
              color={useColorModeValue('gray.900', 'white')}
        >
            <Flex flex={1} m="auto" align="center" maxW={800}>
                <NextLink href="/">
                    <Link>
                        <Heading>Next JS </Heading>
                    </Link>
                </NextLink>
                <Box ml={"auto"}>
                    <Input placeholder="Search" mx="auto" w={"100%"}/>
                </Box>
                <Box ml={"auto"}>{body}</Box>
            </Flex>
        </Flex>
    );
};

const mapStateToProps = state => {
    return {name: state.user.name, auth: state.user.authenticated, email: state.user.email}
}

export default connect(mapStateToProps)(NavBar);