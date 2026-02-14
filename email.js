require("dotenv").config()
const express = require("express")
const nodemailer = require("nodemailer")

const app = express()
app.use(express.json())

// Create transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD
    }
})

// Send email route
app.post("/send-email", async (req, res) => {
    try {
        const { to, subject, text } = req.body

        const mailOptions = {
            from: process.env.EMAIL,
            to: to,
            subject: subject,
            text: text
        }

        await transporter.sendMail(mailOptions)

        res.status(200).json({ message: "Email sent successfully" })
    } catch (error) {
        res.status(500).json({ message: "Email sending failed", error: error.message })
    }
})

app.listen(process.env.PORT, () => {
    console.log("Server running on port", process.env.PORT)
})
