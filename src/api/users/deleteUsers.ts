import axiosInstance from 'modules/axios'
import { MutationFunction } from 'react-query'

const deleteUser: MutationFunction<unknown, Pick<UserDto, 'id'>> = (v) => axiosInstance.delete(`/users/${v.id}`)

export default deleteUser
