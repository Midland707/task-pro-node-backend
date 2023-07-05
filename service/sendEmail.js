const nodemailer = require("nodemailer");
require("dotenv").config();
const { UKR_NET_EMAIL, UKR_NET_PASS, SUPPORT_EMAIL } = process.env;

const nodemailerConfig = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: UKR_NET_EMAIL,
    pass: UKR_NET_PASS,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = {
    ...data,
    from: UKR_NET_EMAIL,
  };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
