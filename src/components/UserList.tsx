import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const UserList = ({ children }: Props) => {
  return <ul style={{ display: 'grid', gap: '1rem' }}>{children}</ul>
}
export default UserList
