import type { NextApiRequest, NextApiResponse } from 'next'
import { Profile, languages } from '../../types'
import MongoPromise from "../../mongoConnection"

type Data = {
  profile: Profile
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const lang: languages = req.query.lang as languages
  const connection = await MongoPromise
  const profile = await connection.db("portfolio")
    .collection<Profile>("profile")
    .findOne({ name: "Ignacio"})
    
  if (!profile) {
    res.status(404)
    return
  }
  
  const { textTranslations, ...rest } = profile

  if(textTranslations) rest.text = textTranslations[lang]

  res.status(200).json({ profile: { ...rest } })
}
