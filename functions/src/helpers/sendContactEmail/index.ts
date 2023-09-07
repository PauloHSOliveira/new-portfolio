import functions from "firebase-functions"
import nodemailer from "nodemailer"
import { ContactFormData } from "../../types"

const sendContactEmail = async (data: ContactFormData) => {
  const { name, email, message } = data

  const transporter = nodemailer.createTransport({
    host: String(functions.config().email.host),
    port: Number(functions.config().email.port),
    secure: true,
    auth: {
      user: String(functions.config().email.username),
      pass: String(functions.config().email.password),
    },
  })

  const info = await transporter.sendMail({
    from: String(functions.config().email.username),
    to: String(functions.config().email.to),
    subject: `NEW CONTACT - ${name} - ${email}`,
    text: message,
  })

  console.log("Message sent: %s", info.messageId)
  return info
}

export default sendContactEmail
