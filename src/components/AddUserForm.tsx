import { addUser } from 'api/users'
import { ChangeEventHandler, CSSProperties, FormEventHandler, useState } from 'react'
import { useMutation } from 'react-query'
import Swal from 'sweetalert2'

const formStyle: CSSProperties = {
  display: 'inline-grid',
  width: 'fit-content',
  gap: '5px',
  border: '5px solid black',
}

const AddUserForm = () => {
  const mutation = useMutation(addUser, {
    onSuccess: (res, variable) => {
      Swal.fire({
        title: 'success',
        html: `user <strong style="font-weight:bold">${variable.name}</strong> added`,
        icon: 'success',
        confirmButtonText: 'success',
      })
    },
    onError: (err) => {
      console.error(err)
    },
  })

  const [input, setInput] = useState('')

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.currentTarget.value)
  }

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    mutation.mutate({ name: input })
  }

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <h3>Add User</h3>
      <label>
        name:
        <input style={{ border: '1px solid gray' }} value={input} onChange={handleInputChange} />
      </label>
      <button style={{ background: 'gray' }} type='submit'>
        submit
      </button>
    </form>
  )
}
export default AddUserForm
