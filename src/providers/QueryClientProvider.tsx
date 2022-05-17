import queryClient from 'modules/queryClient'
import { ReactNode } from 'react'
import { QueryClientProvider as Provider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

type Props = {
  children: ReactNode
}

const QueryClientProvider = ({ children }: Props) => {
  return (
    <Provider client={queryClient}>
      <ReactQueryDevtools />
      {children}
    </Provider>
  )
}
export default QueryClientProvider
