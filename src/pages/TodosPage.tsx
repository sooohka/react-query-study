import { getUsers } from 'api/users'
import AddUserForm from 'components/AddUserForm'
import DeleteUserForm from 'components/DeleteUserForm'
import UserList from 'components/UserList'
import UserListItem from 'components/UserListItem'
import { useQuery } from 'react-query'

const TodosPage = () => {
  const queryResult = useQuery('getUsers', getUsers, {
    cacheTime: 5000,
    staleTime: 3000,
  })

  if (queryResult.isError) {
    return <p>Error</p>
  }
  if (queryResult.isLoading) {
    return <p>Loading...</p>
  }
  if (queryResult.isIdle) {
    return null
  }
  return (
    <main>
      <AddUserForm />
      <DeleteUserForm />
      <UserList>
        {queryResult.data.data.map((user) => (
          <UserListItem key={user.id} user={user} />
        ))}
      </UserList>
    </main>
  )
}

export default TodosPage
