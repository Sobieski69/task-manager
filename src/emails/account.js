const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'kubusob1@gmail.com',
        subject: 'Thanks for foining in!',
        text: `Welcome to the app, ${name}. Let me know how yhou get along with the app.`
    })
}

const sendCancelEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'kubusob1@gmail.com',
        subject: 'Goodbye',
        text: `We are sorry that you leave us ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}

