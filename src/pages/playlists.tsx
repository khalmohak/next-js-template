import React from 'react';
import {connect} from "react-redux";
import {Layout} from "../components/ui/Layout";

const Playlists = ({user}) => {
    const {authenticated} = user;
    return (
        <Layout
            authenticated={authenticated}
        >
            <h1>Playlists</h1>

        </Layout>
    );
};

const mapStateToProps = (state: any) => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchPlaylists: () => dispatch({type: 'FETCH_PLAYLISTS'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);