import { useState } from 'react';
import { Header } from '../components/header';

export const PlanetLayout = ({children}) => {

  return (
    <>
        <Header/>

        <main>
            {children}
        </main>
    </>
  )
}
