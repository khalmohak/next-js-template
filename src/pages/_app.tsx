import {ChakraProvider} from '@chakra-ui/react'
import {wrapper, store} from "../redux/store"
import React from "react";
import axiosInstance from "../utils/axios";
import {setUser} from "../redux/actions/user";
import theme from "../styles/themes";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

function MyApp({Component, pageProps}) {

    React.useEffect(() => {
        async function me() {
            try {
                const response = await axiosInstance.get("/user/me")
                if (response.status === 200) {
                    // @ts-ignore
                    store.dispatch(setUser(response.data))
                }
            } catch (err) {
                console.log(err)
            }


        }

        me()
    }, [])
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </QueryClientProvider>

    )
}

export default wrapper.withRedux(MyApp);
