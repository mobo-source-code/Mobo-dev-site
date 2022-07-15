
export default function (req, res) {

    let nodemailer = require('nodemailer')
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          type: 'OAuth2',
          user: 'bouaziz.tech@gmail.com',
          clientId: '372539980335-uh3bcnfc77hvla0tuijhd0onji0ktaqq.apps.googleusercontent.com',
          clientSecret: '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',
          refreshToken: '1/XXxXxsss-xxxXXXXXxXxx0XXXxxXXx0x00xxx',
          accessToken: 'ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x',
          expires: 1484314697598
      }
  });

    const mailData = {
        from: 'bouaziz.tech@gmail.com',
        to: 'bouaziz.tech@gmail.com',
        subject: `Message From ${req.body.name}`,
        phone: req.body.phone,
        country: `From Country ${req.body.country}`,
        Mail: req.body.mail,
       }

       transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })
    
      res.status(200)

    console.log(req.body)
  }