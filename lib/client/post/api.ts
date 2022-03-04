import { IGateWayResponse } from "../../../types/common"
import { IPost } from "../../../types/post"
import { get } from "../common"

const posts = () => {
  return {
    get: async (params?: Record<string, any>,) => await get<IGateWayResponse<IPost[]>>(`/api/post/posts`, params)
  }
}

export { posts }
