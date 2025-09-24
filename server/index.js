import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ ok: true })
})

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {}
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing fields' })
  }
  console.log('New inquiry:', { name, email, message })

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE, CONTACT_TO, CONTACT_FROM } = process.env

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO || !CONTACT_FROM) {
    // Fallback to logging when SMTP not configured
    return res.json({ ok: true, delivered: false, info: 'Email transport not configured; message logged only.' })
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: String(SMTP_SECURE || '').toLowerCase() === 'true',
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  })

  const mailOptions = {
    from: CONTACT_FROM,
    to: CONTACT_TO,
    subject: `New Shadow Interior inquiry from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`
  }

  transporter.sendMail(mailOptions)
    .then(info => {
      console.log('Mail sent:', info.messageId)
      res.json({ ok: true, delivered: true })
    })
    .catch(err => {
      console.error('Mail error:', err)
      res.status(500).json({ ok: false, error: 'Failed to send email' })
    })
})

app.listen(PORT, () => {
  console.log(`Shadow Interior server listening on http://localhost:${PORT}`)
})
