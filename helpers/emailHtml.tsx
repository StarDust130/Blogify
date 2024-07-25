const getEmailHtml = (emailType: any) => {
  const baseStyle = `
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    background-color: #e6f7ff;
    padding: 20px;
    border-radius: 10px;
  `;

  const containerStyle = `
    max-width: 600px;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    border: 1px solid #d9e7ff;
  `;

  const buttonStyle = `
    background-color: #007bff;
    color: white;
    padding: 12px 25px;
    text-decoration: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    display: inline-block;
  `;

  if (emailType === "verify") {
    return `
      <div style="${baseStyle}">
        <div style="${containerStyle}">
          <h2 style="color: #007bff; text-align: center;">Welcome to Blogify!</h2>
          <p style="color: #333333; text-align: center;">Thank you for signing up. Please verify your email address by clicking the button below:</p>
          <div style="text-align: center; margin: 20px 0;">
            <a href="your-verification-link" style="${buttonStyle}">Verify Email</a>
          </div>
          <p style="color: #333333; text-align: center;">If you did not create an account, no further action is required.</p>
          <p style="color: #333333; text-align: center;">Cheers,<br>The Blogify Team</p>
        </div>
      </div>
    `;
  } else if (emailType === "reset") {
    return `
      <div style="${baseStyle}">
        <div style="${containerStyle}">
          <h2 style="color: #007bff; text-align: center;">Reset Your Password</h2>
          <p style="color: #333333; text-align: center;">We received a request to reset your password. Click the button below to reset your password:</p>
          <div style="text-align: center; margin: 20px 0;">
            <a href="your-reset-link" style="${buttonStyle}">Reset Password</a>
          </div>
          <p style="color: #333333; text-align: center;">If you did not request a password reset, please ignore this email.</p>
          <p style="color: #333333; text-align: center;">Cheers,<br>The Blogify Team</p>
        </div>
      </div>
    `;
  } else {
    return `<p style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333333; text-align: center;">Invalid email type.</p>`;
  }
};

export default getEmailHtml;