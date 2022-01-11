import type { NextApiRequest, NextApiResponse } from 'next'
import { Transporter } from "../../config/mailer"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) { 
    const transporter = new Transporter()
    const { data } = req.body
    const { sender, email, message } = data

    const mailOptions = {
        sender: sender,
        email: email,
        message: message
    }

    try{
        await transporter.send(mailOptions)
        return res.status(200).json({message: "success"})
    } catch(err) {
        return res.status(400).json({message: "An error has ocurred posting the message", err})
    }
    
}