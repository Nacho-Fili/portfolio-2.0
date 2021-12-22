import type { NextApiRequest, NextApiResponse } from 'next'
import { Icon } from "../../types"
import MongoPromise from "../../mongoConnection"

type Data = {
  icons: Icon[],
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const connection = await MongoPromise
  const icons: Icon[] =  await connection
    .db("portfolio")
    .collection<Icon>("technology_icons")
    .find({})
    .toArray()

  res.status(200).json({ icons })

}
