import React from 'react';
import {Layout} from "../../components/ui/Layout";
import {connect} from "react-redux";
import {useRouter} from 'next/router'
import ResetPasswordForm from "../../components/ui/ResetPassoword";
import {Box, Flex, Heading} from "@chakra-ui/react";
import LoginForm from "../../components/ui/Login/LoginForm";


const ResetPassword: React.FC = (props) => {
    const router = useRouter()
    const {id} = router.query

    return (
        <Layout>
            <Flex mt={4} width='full' align='center' justifyContent='center'>
                <Box
                    borderWidth={1}
                    px={4}
                    width='full'
                    maxWidth='500px'
                    borderRadius={4}
                    textAlign='center'
                    boxShadow='lg'
                >
                    <Box p={4}>
                        <Box textAlign='center'>
                            <Heading>Reset Your Password</Heading>
                        </Box>
                        <ResetPasswordForm
                            id={id}
                        />
                    </Box>
                </Box>
            </Flex>
        </Layout>
    );
}

const mapStateToProps = (state: any) => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);