import type { NextApiRequest, NextApiResponse } from 'next'
import { languages, Project } from '../../types'
import MongoPromise from "../../mongoConnection"

type Data = {
  projects: Project[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const lang = req.query.lang as languages || languages.EN
  const connection = await MongoPromise
  const projectsPromise = await connection.db("portfolio")
    .collection<Project>("projects")
    .find({})
    .toArray()

  const projects = await Promise.all(projectsPromise)

  const transformedData = projects.map(project => {
    if(project.descriptionTranslations) {
        return {
            ...project,
            description: project.descriptionTranslations[lang]
        }
    } else {
        return { ...project }
    }    
  })

  res.status(200).json({ projects: transformedData })
}