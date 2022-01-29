import React from 'react';
import {Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/table";
import {connect} from "react-redux";
import EditUserModal from "./editUserModal";
import AddUserModal from "./addUserModal";
import CommonSkeleteon from "../CommonSkeleteon";

interface UsersTableProps {
    users: any[];
    refetch: any;
    error: string;
    isFetching: boolean;
    authLevel: any;
}

const UsersTable: React.FC<UsersTableProps> = ({users, isFetching, refetch, error,authLevel}) => {
    React.useEffect(() => {
        refetch();
    }, [refetch]);
    console.log(authLevel);
    return (
        <>
            {isFetching && <CommonSkeleteon
                val={4}
                height={'50px'}
            />}
            {!isFetching &&
            <>
                {authLevel===0 || authLevel ==='0' && <AddUserModal/>}
                <Table variant='striped' colorScheme='facebook'>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Phone</Th>
                            <Th>Access Level</Th>
                            <Th>Is Active</Th>
                            <Th>Created At</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {users && users.map((user, index) => (
                            <Tr key={index}>
                                <Td>{user.id}</Td>
                                <Td>{user.name}</Td>
                                <Td>{user.email}</Td>
                                <Td>{user.phone}</Td>
                                <Td>{user.access_level}</Td>
                                <Td>{user.is_active === true ? "YES" : "NO"}</Td>
                                <Td>{new Date(user.created_at).toDateString()}</Td>
                                <Td>
                                    <EditUserModal
                                        user={user}
                                    />
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </>
            }
        </>
    )
}
const mapStateToProps = (state: any) => {
    return {
        authLevel: state.user.authLevel,
    }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);
