import { NextApiHandler } from 'next'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  message: string
}

const contactApi: NextApiHandler = async (req, res) => {
  const { name, email, message } = req.body as ContactFormData
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: String(process.env.NEXT_PUBLIC_EMAIL_HOST),
    port: Number(process.env.NEXT_PUBLIC_EMAIL_PORT),
    secure: true,
    auth: {
      user: String(process.env.NEXT_PUBLIC_EMAIL_USERNAME),
      pass: String(process.env.NEXT_PUBLIC_EMAIL_PASSWORD),
    },
  })

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: String(process.env.NEXT_PUBLIC_EMAIL_USERNAME), // sender address
    to: String(process.env.NEXT_PUBLIC_EMAIL_TO), // list of receivers
    subject: `NEW CONTACT - <${name}> - <${email}>`, // Subject line
    text: message, // plain text body
  })

  // eslint-disable-next-line no-console
  console.log('Message sent: %s', info.messageId)
  res.status(200).json({ message: 'Message sent successfully' })
}

export default contactApi
