import {extendTheme,ThemeConfig } from '@chakra-ui/react'

const theme : ThemeConfig  = extendTheme({
    initialColorMode: 'light',
    styles: {
        global: (props) => ({
            '*': {
                boxSizing: 'border-box'
            },
            body: {
                overflowX: 'hidden',
                color: props.colorMode === 'light' ? 'black' : 'white',
                bg: props.colorMode === 'light' ? 'gray.100' : 'gray.800',
            }
        })
    },
    colors: {
        default: {
            light: '#fafafa',
            dark: 'gray.800'
        },
        primary: {},
        secondary: {},
    }
})

export default theme;