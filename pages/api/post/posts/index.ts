import { PostGatewayAPI } from '../../../../lib/api'
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default async (req: any, res: any) => {
  try {
    switch (req.method) {
      case 'GET':
        const params = req.query
        let response = await PostGatewayAPI.posts().get(params as Record<string, any>)
        res.status(200).send(response)
        return
    }
  } catch (error: any) {
    res.status(error?.statusCode || 400).send({
      errorMsg: 'Error',
      errorCode: error?.statusCode || 400,
      error,
    })
  }
}

