import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document'
import {ColorModeScript} from '@chakra-ui/react'
import theme from '../styles/themes/index'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        return await Document.getInitialProps(ctx)
    }
    render() {
        return (
            <Html>
                <Head />
                <body>
                <ColorModeScript initialColorMode={theme.initialColorMode} />
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument