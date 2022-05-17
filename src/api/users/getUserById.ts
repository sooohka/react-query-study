import { AxiosResponse } from 'axios'
import axiosInstance from 'modules/axios'

type GetUserById = () => Promise<AxiosResponse<UserDto>>

const getUserById: GetUserById = () => axiosInstance.get('/users/:id')

export default getUserById
