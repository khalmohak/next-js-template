import {Skeleton, Stack} from "@chakra-ui/react";
import React from "react";

const CommonSkeleteon = ({val, height}) => {

    const Skeletons = () => {
        const arr = [];
        for (let i = 0; i < val; i++) {
            arr.push(
                <Skeleton key={i} height={height} />
            )
        }
        return arr;
    }

    return (
        <Stack>
            {
                Skeletons()
            }
        </Stack>
    )
}
export default CommonSkeleteon;