import { deleteUser } from 'api/users'
import queryClient from 'modules/queryClient'
import { ChangeEventHandler, CSSProperties, FormEventHandler, useState } from 'react'
import { useMutation } from 'react-query'
import Swal from 'sweetalert2'

const formStyle: CSSProperties = {
  display: 'inline-grid',
  width: 'fit-content',
  gap: '5px',
  border: '5px solid black',
}

const DeleteUserForm = () => {
  const mutation = useMutation(deleteUser, {
    onSuccess: () => {
      Swal.fire({
        title: 'Success!',
        icon: 'success',
        confirmButtonText: 'Success',
      })
      queryClient.invalidateQueries()
    },
    onError: (err, variable) => {
      Swal.fire({
        title: 'Error!',
        icon: 'error',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: 'retry',
        cancelButtonText: 'cancel',
      }).then((v) => {
        if (v.isConfirmed) {
          mutation.mutate({ id: variable.id })
        }
      })
    },
  })

  const [input, setInput] = useState('')

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.currentTarget.value)
  }

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    mutation.mutate({ id: Number(input) })
  }

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <h3>Delete User</h3>
      <label>
        id:
        <input type='number' style={{ border: '1px solid gray' }} value={input} onChange={handleInputChange} />
      </label>
      <button style={{ background: 'gray' }} type='submit'>
        submit
      </button>
    </form>
  )
}
export default DeleteUserForm
