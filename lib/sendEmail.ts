import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendConfirmationEmail(email: string, name: string) {
  try {
    const res = await resend.emails.send({
      from: "PathBlaze <team@pathblaze.in>", // ✅ updated
      to: [email],
      subject: "You're on the PathBlaze Waitlist 🎉",
      html: `
      <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9f9f9; padding: 40px;">
        <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); overflow: hidden;">
          <div style="background: linear-gradient(to right, #6366f1, #8b5cf6, #ec4899); padding: 24px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Welcome to PathBlaze 🚀</h1>
          </div>
          <div style="padding: 24px; color: #333333;">
            <p style="font-size: 16px;">Hi ${name || "there"},</p>
            <p style="font-size: 16px;">
              Thanks for joining the <strong>PathBlaze</strong> waitlist! 🎓<br/>
              You’re now part of a learning revolution tailored for growth, progress, and community.
            </p>
            <p style="font-size: 16px;">
              We’ll keep you updated with:
              <ul style="padding-left: 20px; margin: 10px 0;">
                <li>🔥 Fresh, structured learning paths</li>
                <li>📦 Curated video resources & tools</li>
                <li>📈 Progress tracking & shareable badges</li>
                <li>💬 Access to the PathBlaze community</li>
              </ul>
            </p>
            <p style="font-size: 16px;">We’re excited to help you <strong>blaze your learning path</strong>. Stay tuned!</p>
            <p style="margin-top: 32px; font-size: 14px; color: #888;">— The PathBlaze Team 💙</p>
          </div>
        </div>
      </div>
    `,
    });
    return res;
  } catch (error) {
    console.error("❌ Resend error:", error);
    throw error;
  }
}
