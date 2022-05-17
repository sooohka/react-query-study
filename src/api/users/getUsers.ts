import { AxiosResponse } from 'axios'
import axiosInstance from 'modules/axios'
import { QueryFunction } from 'react-query'

type GetUsers = QueryFunction<AxiosResponse<UserDto[]>>

const getUsers: GetUsers = () => axiosInstance.get('/users')

export default getUsers
