const nodemailer = require("nodejs-nodemailer-outlook")

type config = {
    auth: {
        user?: string,
        pass?: string,
    },
    mailsConfig: {
        from?: string,
        to?: string,
    }
}

type mailOptions = {
    sender: string,
    email: string,
    message: string,
}

const defaultConfig = {

    auth: {
        user: process.env.NOTIFYER_EMAIL,
        pass: process.env.NOTIFYER_PASS
    },

    mailsConfig: {
        from: process.env.NOTIFYER_EMAIL,
        to: process.env.PERSONAL_EMAIL
    }
}

class MessageSender {
    mailer: any
    auth: any
    mailsConfig

    constructor({ auth, mailsConfig }: config){
        this.mailer = nodemailer
        this.auth = auth
        this.mailsConfig = mailsConfig
    }

    sendMail = async (message: string) => {
        return new Promise ((resolve, reject) => {
            this.mailer.sendEmail({
                auth: this.auth,
                from: this.mailsConfig.from,
                to: this.mailsConfig.to,
                text: message,
                onError: () => {
                    console.error(`Error enviando email de ${this.mailsConfig.from} a ${this.mailsConfig.to}`)
                    reject()
                },
                onSuccess: () => {
                    console.log(`Mensaje enviado correctamente de ${this.mailsConfig.from} a ${this.mailsConfig.to}`)
                    resolve(message)
                }
            }
        )})
    } 
}

export class Transporter{

    sender: MessageSender

    constructor(currentConfig: config = defaultConfig){
        this.sender = new MessageSender(currentConfig)
    }

    async send({sender, email, message}: mailOptions){
        const text = 
                    `from: ${sender}
                    reply-to: ${email}
                    message: ${message}`

        return await this.sender.sendMail(text)
    }
}