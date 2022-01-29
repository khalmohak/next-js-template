import React from "react";
import {Box, useColorModeValue} from "@chakra-ui/react";
import CustomBreadCrumb from "./Breadcrumb";

export type WrapperVariant = "small" | "regular";

interface WrapperProps {
    variant?: WrapperVariant;
    authenticated?: boolean;
}

export const Wrapper: React.FC<WrapperProps> = ({
                                                    children,
                                                    variant = "regular",
                                                    authenticated
                                                }) => {
    return (
        <Box
            mt={8}
            mx={'auto'}
            bg={useColorModeValue("gray.200", "gray.800")}
            w="100%"
        >
            {authenticated && <CustomBreadCrumb/>}
            {children}
        </Box>
    );
};