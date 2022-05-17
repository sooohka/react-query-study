import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

type Props = {
  children: ReactNode
}

const RouterProvider = ({ children }: Props) => {
  return <BrowserRouter>{children}</BrowserRouter>
}
export default RouterProvider
