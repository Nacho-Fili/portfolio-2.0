import type { NextApiRequest, NextApiResponse } from 'next'
import { Profile } from '../../types'
import MongoPromise from "../../mongoConnection"

type Data = {
  profile: Profile
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const connection = await MongoPromise
  const profile = await connection.db("portfolio")
    .collection<Profile>("profile")
    .findOne({ name: "Ignacio"})

  if(!profile)res.status(404)
  else res.status(200).json({ profile })
}
