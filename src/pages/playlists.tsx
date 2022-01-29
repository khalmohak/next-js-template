import React from 'react';
import {connect} from "react-redux";
import {Layout} from "../components/ui/Layout";
import {useQuery} from "react-query";
import axiosInstance from "../utils/axios";
import axios from "axios";
import {Box, CircularProgress, Skeleton, Stack} from "@chakra-ui/react";
import CommonSkeleteon from "../components/ui/CommonSkeleteon";

const Playlists = ({user}) => {
    const {authenticated} = user;

    const {data} = useQuery('playlists', () => {
        return axios.get('https://abapi.paavan.app/api/development/get/playlists')
    });


    return (
        <Layout
            authenticated={authenticated}
        >
            {!data && <CommonSkeleteon val={5} height={"50px"}/>}
            <Box>{JSON.stringify(data, null, 2)}</Box>

        </Layout>
    );
};

const mapStateToProps = (state: any) => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);