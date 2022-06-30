const nodeSchedule = require("node-schedule");

let nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yourEmail@gmail.com",
    pass: "yourPassword",
  },
});

let mailOptions = {
  from: "yourEmail@gmail.com",
  to: "yourEmail@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

nodeSchedule.scheduleJob("*/1 * * * *", () => {
  console.log("Task is running every minute " + new Date());
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});
