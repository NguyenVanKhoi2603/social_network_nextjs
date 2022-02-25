import { ITest } from "../../../types/common"
import { get } from "../common"

const test = () => {
  return {
    get: async (params?: Record<string, any>) => await get<ITest[]>(`/test`, params)
  }
}

export { test }
