'use client'
import React, { createContext, useContext, useState } from 'react';

const initialVavlueLikeContext = {
  saldo: 0,
  handleGenerateSaldo: () => { }
}
interface InitialVavlueLikeContext {
  saldo: number,
  handleGenerateSaldo: (min: number, max: number) => void
}

const LikeContext = createContext<InitialVavlueLikeContext>(initialVavlueLikeContext)
export const useLikeContext = () => useContext<InitialVavlueLikeContext>(LikeContext)

const LikeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  // Reducers
  // State
  const [saldo, setSaldo] = useState(0)

  // Effects

  // Functions
  function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const handleGenerateSaldo = (min: number, max: number) => setSaldo(st => st + random(min, max))

  // Render
  return (
    <LikeContext.Provider value={{
      saldo, handleGenerateSaldo
    }}>
      {children}
    </LikeContext.Provider>
  );
}

export default LikeContextProvider;
