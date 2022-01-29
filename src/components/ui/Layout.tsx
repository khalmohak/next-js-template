import React from "react";
import {Wrapper, WrapperVariant} from "./Wrapper";
import NavBar from "./Navbar";
import Sidebar from "./home/Sidebar/drawer";
import {Grid, GridItem} from "@chakra-ui/react";
import {useRouter} from "next/router";

interface LayoutProps {
    variant?: WrapperVariant;
    authenticated?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({children, variant, authenticated}) => {
    const router = useRouter();

    async function LoginRegister() {
        if (router.pathname === "/login" || router.pathname === "/register" || router.pathname.includes("reset-password") ) {
            return true;
        } else {
            await router.push("/login");
            return false;
        }
    }

    return (
        <>
            <NavBar/>
            {authenticated &&
            <Grid templateColumns="1fr 5fr 0.05fr" gap={2}>
                <GridItem>
                    <Sidebar/>
                </GridItem>
                <GridItem>
                    <Wrapper variant={variant} authenticated={authenticated}>
                        {children}
                    </Wrapper>
                </GridItem>

            </Grid>
            }
            {!authenticated && LoginRegister() &&

            <Wrapper variant={variant} authenticated={authenticated}>
                {children}
            </Wrapper>

            }

        </>
    );
};