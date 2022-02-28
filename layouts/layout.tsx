import React, { Context, createContext, useState, useEffect } from 'react'
import Head from './head'
import Header from './header'

export const LayoutContext: Context<{}> = createContext({})

const Layout = ({ children }: any) => {
  return (
    <LayoutContext.Provider value={{}}>
      <Head />
      <div className="main-container">
        {/* <Header /> */}
        <Header />
        <main id="content" role="main">
          {children}
        </main>
      </div>
    </LayoutContext.Provider>
  )
}

export default Layout
