import type { NextApiRequest, NextApiResponse } from 'next'
import { Experience, languages } from '../../types'
import MongoPromise from "../../mongoConnection"

type Data = {
  experience: Experience
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const lang = req.query.lang as languages
  const connection = await MongoPromise
  const experiences = await connection.db("portfolio")
    .collection<Experience>("experiences")
    .find({})
    .toArray()

  const [experience] = experiences || [{}]
  if (experience.descriptionTranslations) experience.description = experience.descriptionTranslations[lang]
  res.status(200).json({ experience })
}