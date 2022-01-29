import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList, useColorMode, useColorModeValue
} from '@chakra-ui/react'
import {useRouter} from "next/router";

export default function NavItem({ icon, title, route, active }) {
    const router = useRouter();

    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={"flex-start"}
        >
            <Menu placement="right">
                <Link
                    backgroundColor={useColorModeValue('gray.300', 'gray.700')}
                    p={3}
                    _disabled={active}
                    borderRadius={8}
                    _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}
                    w={"100%"}
                >
                    <MenuButton w="100%" onClick={()=>router.push(`/${route}`)}>
                        <Flex>
                            <Icon as={icon} fontSize="xl" color={active ? "#82AAAD" : "gray.500"} />
                            <Text ml={5} display={"flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
            </Menu>
        </Flex>
    )
}