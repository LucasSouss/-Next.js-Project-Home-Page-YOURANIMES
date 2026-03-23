import { globalCss } from "@stitches/react";
import '../styles/global.css'

const globalSyles = globalCss({
    '*': {margin: 0, padding: 0, boxSizing: 'border-box'},
    body: {
        fontFamily: '$body',
        backgroundColor: 'background',
        color: '$text',
    }
})

export default function App({Component, pageProps}) {
    globalSyles()

    return <Component {...pageProps}/>
}