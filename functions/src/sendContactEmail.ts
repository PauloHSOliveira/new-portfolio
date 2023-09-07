import * as functions from "firebase-functions"
import { corsHandler } from "./utils/corsHandler"
import { ContactFormData } from "./types"
import sendContactEmail from "./helpers/sendContactEmail"

export const sendContact = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    try {
      const data = req.body.data as ContactFormData

      if (!data || !data.name || !data.email || !data.message) {
        throw new Error(
          "Invalid data. Please provide name, email, and message.",
        )
      }

      const info = await sendContactEmail(data)

      res.status(200).json({
        message: "Message sent successfully",
        messageId: info.messageId,
      })
    } catch (error) {
      console.error("Error sending email:", error)
      res
        .status(500)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .json({ message: "Error sending email", error: (error as any).message })
    }
  })
})
