import { NextUIProvider } from '@nextui-org/react'
import 'nextra-theme-blog/style.css'

import '../styles/main.css'

export default function Nextra({ Component, pageProps }) {
  return (
    <NextUIProvider disableBaseline="true">
        <Component {...pageProps} />
    </NextUIProvider>
  )
}
