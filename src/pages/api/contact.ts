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
    host: 'smtp.umbler.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'contato@pholiveira.dev', // your email
      pass: '88495456@Ph', // your email password
    },
  })

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"${name}" <${email}>`, // sender address
    to: 'contato@pholiveira.dev', // list of receivers
    subject: 'New message from your portfolio site', // Subject line
    text: message, // plain text body
  })

  // eslint-disable-next-line no-console
  console.log('Message sent: %s', info.messageId)
  res.status(200).json({ message: 'Message sent successfully' })
}

export default contactApi
