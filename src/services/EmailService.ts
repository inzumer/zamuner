/** Resources */
import { Resend } from 'resend';

class EmailService {
  private apiKey?: string;
  private emailFrom?: string;
  private emailTo?: string;

  constructor() {
    this.apiKey = process.env.PUBLIC_API_KEY;
    this.emailFrom = process.env.EMAIL_FROM;
    this.emailTo = process.env.EMAIL_TO;
  }

  /**
   * Sends an email using the Resend API.
   * @param from - The email address of the sender.
   * @param subject - The subject of the email.
   * @param message - The content of the email message.
   * @returns A promise that resolves to the API response from Resend.
   * @throws An error if the request fails or the Resend API returns an error.
   */
  async sendEmail(from: string, subject: string, message: string) {
    try {
      const resend = new Resend(this.apiKey!);

      const data = await resend.emails.send({
        from: this.emailFrom!,
        to: this.emailTo!,
        subject,
        html: `
          <div style='background-color:#E0E0E0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;'>
            <h1 style='color: #E0E0E0; background-color: #0f171b; padding: 16px; font-size: 24px; text-align: center;'> Message from @Inzumer
            </h1>
            <div style='color: #0f171b; padding: 16px; font-size: 16px; text-align: left;'>
                <p><strong>Email:</strong><br />${from}</p>
                <p><strong>Asunto:</strong><br />${subject}</p>
                <p><strong>Mensaje:</strong><br />${message}</p>
            </div>
          </div>
        `,
      });

      return data;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An unknown error occurred';

      throw new Error(`Error: ${errorMessage}`);
    }
  }
}

export default EmailService;
