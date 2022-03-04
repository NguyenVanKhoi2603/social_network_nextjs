import { IGateWayResponse } from "../../../types/common"
import { IUser } from "../../../types/user"
import { get } from "../common"

const users = () => {
  return {
    get: async (params?: Record<string, any>,) => await get<IGateWayResponse<IUser[]>>(`/api/user/users`, params)
  }
}

export { users }
