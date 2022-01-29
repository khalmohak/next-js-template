import {useQuery} from "react-query";
import axiosInstance from "./axios";
import {useToast} from "@chakra-ui/react";
import React from "react";
import {ToastProps} from "@chakra-ui/toast/dist/declarations/src/toast";

function ReactQuery(queryKey: string, url: string,criteria?: any) {
    const toast = useToast()
    let toastIdRef: React.Ref<ToastProps> = React.useRef()
    const {data, isFetching, refetch, error} = useQuery([queryKey, criteria], async function () {
        const response = (await axiosInstance.get(url));
        if (response.status === 404) {
            //@ts-ignore
            toastIdRef.current = toast({
                title: "Error",
                description: "No data found",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top"
            })
        }
        if (response.status !== 200) {
            // @ts-ignore
            toastIdRef.current = toast({
                title: 'Error',
                description: 'Something went wrong',
                status: 'error',
            })
        }
        return response.data;
    });

    return {data, isFetching, refetch, error};
}

export default ReactQuery;