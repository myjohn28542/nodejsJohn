const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Token = require("../models/token");
const config = process.env;
const nodemailer = require('nodemailer');

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

const verifyEmail = (req, res) => {
  const {verifyCode} = req.body;

  try {
    Token.findOne({user: req.params.id}).exec((err, result) => {
      console.log(result)
      if (err) res.status(500).json({ message: err.message });
      else {
        console.log(verifyCode)
        //console.log(result.verifyEmailcode)
        if (verifyCode == result.code) {
          try {
            // console.log("createdAt: "+result.createdAt)
            // console.log("createdAt: "+result.createdAt.getTime())
            const updatedAt = result.updatedAt.getTime();
            const dateNow = new Date().getTime();
            const min = (dateNow - updatedAt)/60000;
            
            console.log("เวลานาที: "+min)
         
            if(min <= 5){
              User.findByIdAndUpdate(
                req.params.id,
                { verifyEmail: true },
                (err, result) => {
                  if (err) res.status(500).json({ message: err.message });
                  else {
                    res.status(200).json({ message: "verify Email succeed" });
                  }
                }
              );
            }else{
              res.status(200).json({ message: "timeout 5 minutes verifyemail" });
            }
           
          } catch (error) {
            console.log("error: " + error);
            res
              .status(400)
              .json({ message: "Error insert verify Email to database" });
          }
        }else{
          res.json({ message: "Error  verifyCode == result.verifyCode" });
        }
      }
    });
  } catch (error) {
    console.log("error: " + error);
    res.status(400).json({ message: "Error insert User to database" });
  }
};

const again = (req,res) => {
  try{
    
    const code = key()
    Token.findOneAndUpdate({user: req.params.id}, {code :code}).exec((err, result) => {
      if (err) res.status(500).json({ message: err.message });
      else {
        try { 
          User.findById(req.params.id).exec(
            (err, result) => {
                 if (err) res.status(500).json({ message: err.message})
                 else {
                  console.log("result.email:"+result.email)
                  
                  const mailOptions = {
      from: 'john2805422@gmail.com',
      to: `${result.email}`,
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
                  mail.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                      res.status(400).json({ message: error.message })
                    } else {
                      console.log('Email sent: ' + info.response);
                      res.status(200).send(result).json(info)
                    }
                  });
                     }
                 }
         );

         
          // Token.findByIdAndUpdate(result._id,{updatedAt: new Date()},(err, result) => {
          //     if (err) res.status(500).json({ message: err.message})
          //     else {
                  
          //         res.status(200).send(result)
          //     }
          // })

       
      } catch(error){
          console.log("error: "+error)
          res.status(400).json({ message:'Error insert  to database'})
      }

      }
    });

  }catch{
    res.status(400).json({ message: "Token.findOneAndUpdate" })
  }
}


module.exports = { verifyEmail, again };
