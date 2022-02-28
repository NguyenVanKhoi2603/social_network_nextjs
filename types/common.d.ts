export interface IGateWayResponse<T> {
  data: T
  total: number
  page: number
  limit: number
}
export interface ITest {
  id: number
  name: string
  slug: string
}
