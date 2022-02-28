import Head from 'next/head'
import React, { FC } from 'react'

const MyHead: FC<{}> = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1.0, user-scalable=0"
      />
      <title>Douglas</title>
      <meta name="description" content="Social network" />
      <link rel="icon" href="/icons/d-icon.jpeg" />
      <meta name="keywords" content="bongda" />
      <meta name="robots" content="index,follow" />
      <meta name="author" content="test" />
      <meta name="copyright" content="test" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="no-img" />
      <meta property="og:image:alt" content="no-img" />
      <meta property="og:title" content="Social network" />
      <meta property="og:url" content="" />
      <meta property="og:description" content="Social network" />
      <meta name="theme-color" content="#84ae9f" />
      <link type="image/x-icon" rel="shortcut icon" href="/icons/d-icon.png" />
      <link rel="apple-touch-icon" href="/icons/d-icon.png"></link>
      <link rel="canonical" href="" />
      <link rel="alternate" href="" hrefLang="vi-vn" />
    </Head>
  )
}

export default MyHead
