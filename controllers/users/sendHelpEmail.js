const sendEmail = require("./../../service");

const sendHelpEmail = async (req, res) => {
  const { email, message } = req.body;

  const letter = `<p><span style="font-weight: 700;">Message: </span>${message}</p>
<p><span style="font-weight: 700;">Response to:</span><a href="mailto:${email}">${email}</a></p>`;

  await sendEmail(letter);
  res.json({
    message: "begging for help email sent ",
  });
};

module.exports = sendHelpEmail;
