const sendEmail = require("./../../service");
require("dotenv").config();

const { SUPPORT_EMAIL } = process.env;

const sendHelpEmail = async (req, res) => {
  const { email, message } = req.body;

  const letter = `<p><span style="font-weight: 700;">Message: </span>${message}</p>
<p><span style="font-weight: 700;">Response to: </span><a href="mailto:${email}">${email}</a></p>`;

  const dataEmail = {
    html: letter,
    to: SUPPORT_EMAIL,
    subject: "Needing technical support",
  };

  await sendEmail(dataEmail);
  res.json({
    message: "begging for help email sent ",
  });
};

module.exports = sendHelpEmail;
