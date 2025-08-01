import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sri Gowri Vidya Nikethan - Empowering Minds, Building Futures</title>
        <meta name="description" content="Sri Gowri Vidya Nikethan is a premier educational institution dedicated to academic excellence, character development, and preparing students for success in a global society." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="school, education, academy, students, learning, excellence" />
        <meta name="author" content="Sri Gowri Vidya Nikethan" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sgvn.edu" />
        <meta property="og:title" content="Sri Gowri Vidya Nikethan - Empowering Minds, Building Futures" />
        <meta property="og:description" content="Sri Gowri Vidya Nikethan is a premier educational institution dedicated to academic excellence, character development, and preparing students for success in a global society." />
        <meta property="og:image" content="/images/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sgvn.edu" />
        <meta property="twitter:title" content="Sri Gowri Vidya Nikethan - Empowering Minds, Building Futures" />
        <meta property="twitter:description" content="Sri Gowri Vidya Nikethan is a premier educational institution dedicated to academic excellence, character development, and preparing students for success in a global society." />
        <meta property="twitter:image" content="/images/og-image.jpg" />


        

      </Head>
      <Component {...pageProps} />
    </>
  )
}