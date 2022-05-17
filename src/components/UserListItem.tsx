type Props = {
  user: { id: number; name: string }
}

const UserListItem = ({ user }: Props) => {
  return (
    <li>
      <dl>
        <dt>id:</dt>
        <dd>{user.id}</dd>
      </dl>
      <dl>
        <dt>name:</dt>
        <dd>{user.name}</dd>
      </dl>
    </li>
  )
}
export default UserListItem
