import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import LowerNav from '../home/nav'
import Header from '@/components/header'

export interface IProps {
  children?: ReactElement
}

const BaseLayout: FC<IProps> = memo((props) => {
  const { children } = props

  return (
    <>
      <Header />
      <LowerNav />
      {children}
    </>
  )
})

BaseLayout.displayName = 'BaseLayout'
export default BaseLayout
