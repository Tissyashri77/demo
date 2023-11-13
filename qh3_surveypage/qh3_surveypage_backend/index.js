const express = require('express')
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended : true }));
app.use(express.json())
app.use(cors())


const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Mohan@19",
    database:"task"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.get('/',(req,res) => {
    res.send("Hello")
})

app.post('/send', (req, res) => {
  console.log("Getting call");
  console.log(req.body);

  const insertQuery = `INSERT INTO details (firstname, lastname, email, message) 
                      VALUES (?, ?, ?, ?)`;

  // Execute the query with parameterized values
  con.query(insertQuery, [req.body.firstName, req.body.lastName, req.body.email, req.body.message], (err, results) => {
    if (err) {
      console.error('Error inserting data into the table: ' + err.message);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }   
  })

  const output = `
  <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.firstName}</li>
      <li>Company: ${req.body.lastName}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
`;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    name:'ethereal.email',
    host: 'smtp.ethereal.email',
    port: 587,
    secure:false,
    auth: {
        user: 'lucas.rohan8@ethereal.email',
        pass: 'z9MnzvDasMCCZBe6nk'
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: 'willie.medhurst@ethereal.email', // sender address
      to: req.body.email, // list of receivers
      subject: 'Node Contact Request', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.send("Message sent");
  });
  });

app.listen(3000, () => {
    console.log("Server running");
})