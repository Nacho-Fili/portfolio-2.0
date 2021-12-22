import type { NextApiRequest, NextApiResponse } from 'next'
import Experience from '../../models/Experience'
import MongoPromise from "../../mongoConnection"

type Data = {
  experience: Experience
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const connection = await MongoPromise
  const experiences = await connection.db("portfolio")
    .collection<Experience>("experiences")
    .find({})
    .toArray()

  const [experience] = experiences || [{}]
  res.status(200).json({ experience })
}
