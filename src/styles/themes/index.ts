import {extendTheme} from '@chakra-ui/react'

const theme = extendTheme({
    styles: {
        global: (props) => ({
            '*': {
                boxSizing: 'border-box'
            },
            body: {
                overflowX: 'hidden',
                color: props.colorMode === 'light' ? 'black' : 'white',
                bg: props.colorMode === 'light' ? 'white' : 'black',
            }
        })
    },
    colors: {
        default: {
            light: '#fafafa',
            dark: '#121212'
        },
        primary: {},
        secondary: {},
    }
})