import React from 'react';
import {Layout} from "../components/ui/Layout";
import {connect} from "react-redux";
import UsersTable from "../components/ui/users";
import ReactQuery from "../utils/ReactQuery";

const Users = ({user}) => {
    const {authenticated} = user;
    const {data, isFetching, refetch, error} = ReactQuery("users", '/user/all')
    return (
        <Layout
            authenticated={authenticated}

        >
            <UsersTable
                users={data}
                refetch={refetch}
                isFetching={isFetching}
                error={error as string}
            />
        </Layout>
    )
}
const mapStateToProps = (state: any) => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
