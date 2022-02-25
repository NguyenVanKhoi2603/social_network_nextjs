import { PostGatewayAPI } from '../../../lib/api'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default async (req: any, res: any) => {
  try {
    switch (req.method) {
      case 'GET':
        const params = req.query
        let response = await PostGatewayAPI.test().get(params as Record<string, any>)
        res.status(200).send(response)
        return
    }
  } catch (error: any) {
    res.status(400).send({
      errorMsg: 'Dịch vụ không thực hiện được trong lúc này. Vui lòng liên hệ CSKH 1900575720 để được trợ giúp.',
      errorCode: 400,
      error,
    })
  }
}
