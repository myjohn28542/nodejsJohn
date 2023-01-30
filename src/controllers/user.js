const User = require('../models/user')
const Token = require('../models/token')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const create = require('./product')
const nodemailer = require('nodemailer');


dotenv.config()

const key = (req,res) => {
    let code = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 6) {
      code += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }


    console.log(code);
    return code;
}


const mail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'john2805422@gmail.com',
      pass: 'cnfndrbhnxpalehn'
    }
  });



const register = async (req, res) => {

    try{
        const code = key()
        console.log(code)
        const {username, password, email, firstName, lastName } = req.body

        const mailOptions = {
            from: 'john2805422@gmail.com',
            to: `${email}`,
            subject: 'Sending Email using Node.js',
            html: `<!DOCTYPE html>
            <html>
            <head>
            
              <meta charset="utf-8">
              <meta http-equiv="x-ua-compatible" content="ie=edge">
              <title>Email Confirmation</title>
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <style type="text/css">
              /**
               * Google webfonts. Recommended to include the .woff version for cross-client compatibility.
               */
              @media screen {
                @font-face {
                  font-family: 'Source Sans Pro';
                  font-style: normal;
                  font-weight: 400;
                  src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
                }
                @font-face {
                  font-family: 'Source Sans Pro';
                  font-style: normal;
                  font-weight: 700;
                  src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
                }
              }
              /**
               * Avoid browser level font resizing.
               * 1. Windows Mobile
               * 2. iOS / OSX
               */
              body,
              table,
              td,
              a {
                -ms-text-size-adjust: 100%; /* 1 */
                -webkit-text-size-adjust: 100%; /* 2 */
              }
              /**
               * Remove extra space added to tables and cells in Outlook.
               */
              table,
              td {
                mso-table-rspace: 0pt;
                mso-table-lspace: 0pt;
              }
              /**
               * Better fluid images in Internet Explorer.
               */
              img {
                -ms-interpolation-mode: bicubic;
              }
              /**
               * Remove blue links for iOS devices.
               */
              a[x-apple-data-detectors] {
                font-family: inherit !important;
                font-size: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
                color: inherit !important;
                text-decoration: none !important;
              }
              /**
               * Fix centering issues in Android 4.4.
               */
              div[style*="margin: 16px 0;"] {
                margin: 0 !important;
              }
              body {
                width: 100% !important;
                height: 100% !important;
                padding: 0 !important;
                margin: 0 !important;
              }
              /**
               * Collapse table borders to avoid space between cells.
               */
              table {
                border-collapse: collapse !important;
              }
              a {
                color: #1a82e2;
              }
              img {
                height: auto;
                line-height: 100%;
                text-decoration: none;
                border: 0;
                outline: none;
              }
              </style>
            
            </head>
            <body style="background-color: #e9ecef;">
            
              <!-- start preheader -->
              <div class="preheader" style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;">
                A preheader is the short summary text that follows the subject line when an email is viewed in the inbox.
              </div>
              <!-- end preheader -->
            
              <!-- start body -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
            
                <!-- start logo -->
                <tr>
                  <td align="center" bgcolor="#e9ecef">
                    <!--[if (gte mso 9)|(IE)]>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
                    <tr>
                    <td align="center" valign="top" width="600">
                    <![endif]-->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                      <tr>
                        <td align="center" valign="top" style="padding: 36px 24px;">
                          
                            <img src="https://thumbs.dreamstime.com/b/emailcheck-218747668.jpg" alt="Logo" border="0" width="500" style="display: block; width: 500px; max-width: 500px; min-width: 48px;">
                          
                        </td>
                      </tr>
                    </table>
                    <!--[if (gte mso 9)|(IE)]>
                    </td>
                    </tr>
                    </table>
                    <![endif]-->
                  </td>
                </tr>
                <!-- end logo -->
            
                <!-- start hero -->
                <tr>
                  <td align="center" bgcolor="#e9ecef">
                    <!--[if (gte mso 9)|(IE)]>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
                    <tr>
                    <td align="center" valign="top" width="600">
                    <![endif]-->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                      <tr>
                        <td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;">
                          <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;">Confirm Your Email Address</h1>
                        </td>
                      </tr>
                    </table>
                    <!--[if (gte mso 9)|(IE)]>
                    </td>
                    </tr>
                    </table>
                    <![endif]-->
                  </td>
                </tr>
                <!-- end hero -->
            
                <!-- start copy block -->
                <tr>
                  <td align="center" bgcolor="#e9ecef">
                    <!--[if (gte mso 9)|(IE)]>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
                    <tr>
                    <td align="center" valign="top" width="600">
                    <![endif]-->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
            
                      <!-- start copy -->
                      <tr>
                        <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
                          <p style="margin: 0;">Code below to verify your email address. </p>
                        </td>
                      </tr>
                      <!-- end copy -->
            
                      <!-- start button -->
                      <tr>
                        <td align="left" bgcolor="#ffffff">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                              <td align="center" bgcolor="#ffffff" style="padding: 12px;">
                                <table border="0" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td align="center" bgcolor="#1a82e2" style="border-radius: 6px;">
                                      <a  target="_blank" style="display: inline-block; padding: 16px 36px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 30px; color: #ffffff; text-decoration: none; border-radius: 20px;">${code}</a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <!-- end button -->
            
                      <!-- start copy -->
                     
                      <!-- end copy -->
            
                      <!-- start copy -->
                      
                      <!-- end copy -->
            
                    </table>
                    <!--[if (gte mso 9)|(IE)]>
                    </td>
                    </tr>
                    </table>
                    <![endif]-->
                  </td>
                </tr>
                <!-- end copy block -->
            
                <!-- start footer -->
                
            
              </table>
              <!-- end body -->
            
            </body>
            </html>`,
         //    attachments: [{
         //        filename: 'text1',
         //        content: 'hello world!'
         //    }]
           };
           
        if (!(username && password && email)) {
            return res.status(400).json({"detail" : "All input is required"});
        }

        let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (!email.match(validEmail)) return res.status(400).json({ "detail": "Invalid email address"});

        const oldUser = await User.find({
            username: username
        })
        if (oldUser.length > 0) return res.status(400).json({ "detail": "User Already Exist"});

        let encryptedPassword = await bcrypt.hash(password, 10)

        try {
            User.create({
                username,
                password: encryptedPassword,
                email,
                firstName,
                lastName
            },(err, result) => {
                if (err) res.status(500).json({ message: err.message})
                else {
                    delete result.password
                    delete result.__v
                    try{
                        Token.create({code: code,user: result._id},(err, result) => {
                            if (err) res.status(500).json({ message: err.message})
                            else {
                                try {
                                    
                                    mail.sendMail(mailOptions, function(error, info){
                                        if (error) {
                                          console.log(error);
                                          res.status(400).json({ message: error.message })
                                        } else {
                                          console.log('Email sent: ' + info.response);
                                          res.status(200).send(result).json(info)
                                        }
                                  });
                                } catch (error) {
                                    res.status(400).json({ message: error.message })
                                }
                                //res.status(200).send(result)
                            }
                        })
                        
                    }catch{
                        res.status(400).json({ message:'Error insert verifyCode to database'})
                    }
                    
                }
            })
        } catch(error){
            res.status(400).json({ message:'Error insert user to database'})
        }

    } catch (error){
        return res.status(400).json({ message: error.message})
    }
}

const login = async (req, res) => {
    try {
        const { username, password} = req.body

        if (!(username && password)){
            return res.status(400).json({ "detail": "All input is required"});
        }

        let loginUser = await User.findOne({
            username: username
        })

        if (!loginUser) return res.status(400).json({ message:'This user not found.'})

        if (!loginUser.isActive) return res.status(200).json({ message: 'This user in no longer used.'})

        if (!(await bcrypt.compare(password, loginUser.password)))
            return res.status(400).json({ message:'Incorrect password.'})

        const token = jwt.sign({
            id: loginUser.id
        }, process.env.JWT_SECRET_KEY,{
            expiresIn:"30d"
        })

        res.status(200).json({
            id: loginUser.id,
            firstName:loginUser.firstName,
            isActive: loginUser.isActive,
            token: token
        })
        

        

    }catch (error){
        res.status(400).json({ message: error.message})
    }
}

const retrieve = async (req, res) => {
    try {
        const user = User.findById(req.params.id)
        console.log(req.params.id)
        
        delete user.password
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
    
}


module.exports = {
    register,
    login,
    retrieve

}