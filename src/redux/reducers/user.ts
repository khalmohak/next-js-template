import * as t from "../types";

const user = (state = {
    name: "",
    email: "",
    token: "",
    authenticated: false,
    role: "",
    authLevel: 0,
    avatar_url: "",
}, action) => {
    switch (action.type) {
        case t.LOGIN:
            return {
                ...state,
                token: action.payload.token,
                authenticated: true,
                name: action.payload.user_name,
                email: action.payload.user_email,
            };
        case t.SETUSER:
            return {
                ...state,
                name: action.payload.user_name,
                email: action.payload.user_email,
                role: action.payload?.user_role,
                authLevel: action.payload?.user_access_level,
                avatar_url: action.payload?.user_avatar_url,
                authenticated: true
            };

        default:
            return {...state};
    }
}

export default user;