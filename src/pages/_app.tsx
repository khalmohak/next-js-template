import {ChakraProvider} from '@chakra-ui/react'
import {wrapper, store} from "../redux/store"
import React from "react";
import axiosInstance from "../utils/axios";
import {setUser} from "../redux/actions/user";

function MyApp({Component, pageProps}) {
    React.useEffect(() => {
        async function me() {
            try{
                const response = await axiosInstance.get("/user/me")
                if(response.status === 200) {
                    // @ts-ignore
                    store.dispatch(setUser(response.data))
                }
            }catch (err){
                console.log(err)
            }


        }

        me()
    }, [])
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>

    )
}

export default wrapper.withRedux(MyApp);
