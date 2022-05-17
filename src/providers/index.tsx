import QueryClientProvider from 'providers/QueryClientProvider'
import { ReactNode, StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'

type Props = {
  children: ReactNode
}

const AppProvider = ({ children }: Props) => {
  return (
    <StrictMode>
      <BrowserRouter>
        <QueryClientProvider>{children}</QueryClientProvider>
      </BrowserRouter>
    </StrictMode>
  )
}
export default AppProvider
