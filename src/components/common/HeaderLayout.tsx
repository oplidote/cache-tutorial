'use client'

import React, { ReactNode } from 'react'
import Header from './Header'

interface HeaderLayoutProps {
  children: ReactNode
}
const HeaderLayout = ({ children }: HeaderLayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default HeaderLayout
