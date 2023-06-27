const nodemailer = require("nodemailer");
require("dotenv").config();
const { UKR_NET_EMAIL, UKR_NET_PASS, SUPPORT_EMAIL } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: UKR_NET_EMAIL,
    pass: UKR_NET_PASS,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (textLetter) => {
  const email = {
    html: textLetter,
    from: UKR_NET_EMAIL,
    to: SUPPORT_EMAIL,
    subject: "Needing technical support",
  };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
