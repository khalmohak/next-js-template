import React from 'react';
import {connect} from "react-redux"
import {Layout} from "../components/ui/Layout";
import {setUser} from "../redux/actions/user";
import axiosInstance from "../utils/axios";

function Index(props) {
    const {auth} = props

    return (
        <Layout
        authenticated={auth}
        >

        </Layout>
    )
}

const mapStateToProps = state => {
    return {name: state.user.name, auth: state.user.authenticated, email: state.user.email}
}


export default connect(mapStateToProps)(Index)