import * as t from "../types";


export const login = (payload) => dispatch => {
    dispatch({
        type: t.LOGIN,
        payload: payload
    });
}

export const setUser = (payload) => dispatch => {
    dispatch({
        type: t.SETUSER,
        payload: payload
    });
}