import React from "react";
import {Wrapper, WrapperVariant} from "./Wrapper";
import NavBar from "./Navbar";
import Sidebar from "./home/Sidebar/drawer";
import {Grid, GridItem} from "@chakra-ui/react";

interface LayoutProps {
    variant?: WrapperVariant;
    authenticated?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({children, variant,authenticated}) => {

    return (
        <>
            <NavBar/>
            {authenticated &&
            <Grid templateColumns="1fr 5fr" gap={0}>
                <GridItem>
                    <Sidebar/>
                </GridItem>
                <GridItem>
                    <Wrapper variant={variant}>
                        {children}
                    </Wrapper>
                </GridItem>

            </Grid>
            }
            {!authenticated && children}
        </>
    );
};