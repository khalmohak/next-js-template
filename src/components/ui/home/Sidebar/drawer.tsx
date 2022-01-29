import React, { useState } from 'react'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading
} from '@chakra-ui/react'
import {
    FiHome,
    FiCalendar,
} from 'react-icons/fi'
import NavItem from './NavItem'
import {connect} from "react-redux";
import {useRouter} from "next/router";

function Sidebar(props) {
    const {name,role} = props
    const router = useRouter();
    return (
        <Flex
            pos="sticky"
            left="5"
            marginTop="2.5vh"
            boxShadow="md"
            borderRadius={"5px"}
            w={"200px" }
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={"flex-start"}
                as="nav"
            >
                <Flex
                    p="5%"
                      flexDir="column"
                    w="100%"
                    alignItems={"flex-start"}
                    mb={4}
                >
                    <Flex mt={4} align="center">
                        <Avatar size="sm" src="" />
                        <Flex flexDir="column" ml={4} display={"flex"}>
                            <Heading as="h3" size="sm">{name}</Heading>
                            <Text color="gray">{role}</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <NavItem icon={FiHome} title="Playlists" route={'playlists'} active={true} />
                <NavItem icon={FiHome} title="Users" route={'users'} active={true} />

            </Flex>


        </Flex>
    )
}

const mapStateToProps = state => {
    return {name: state.user.name, auth: state.user.authenticated, email: state.user.email,role: state.user.role}
}

export default connect(mapStateToProps)(Sidebar)