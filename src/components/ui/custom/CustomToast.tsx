import {toast, useToast} from "@chakra-ui/react";
import React from "react";

const CustomToast = ({show}) => {
    const toast = useToast()
    const toastIdRef = React.useRef()

    function addToast() {
        // @ts-ignore
        toastIdRef.current = toast({description: 'some text'})
    }

    return (
        <>
            {show && addToast()}
        </>
    )
}

export default CustomToast;