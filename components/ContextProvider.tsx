import React, { createContext, PropsWithChildren, useState } from 'react'

export const StoreContext = createContext({})

const StoreProvider: <T>(props: PropsWithChildren<{ initialStore?: T }>) => JSX.Element = (props) => {
  const [store, setStore] = useState<any>(props.initialStore)

  const updateStore = (newStore: typeof props.initialStore) => {
    setStore({ ...store, ...newStore })
  }

  return <StoreContext.Provider value={{ store, updateStore }}>{props.children}</StoreContext.Provider>
}

export default StoreProvider
export const useStore = StoreProvider
