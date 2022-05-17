import { AxiosResponse } from 'axios'
import axiosInstance from 'modules/axios'

type AddUser = (body: Pick<UserDto, 'name'>) => Promise<AxiosResponse<unknown>>
const addUser: AddUser = (body) => axiosInstance.post('/users', body)

export default addUser
