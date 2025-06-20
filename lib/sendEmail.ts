import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendConfirmationEmail(email: string, name: string) {
  try {
    const res = await resend.emails.send({
      from: "pathBlaze <team@pathblaze.in>",
      to: [email],
      subject: "You're on the PathBlaze Waitlist 🎉",
      html: `
        <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; padding: 32px;">
          <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">

            <!-- Header -->
            <div style="background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899); padding: 24px;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px;">Welcome to PathBlaze 🚀</h1>
            </div>

            <!-- Body -->
            <div style="padding: 24px; color: #333;">
              <p style="font-size: 16px;">Hi ${name || "there"},</p>
              <p style="font-size: 16px;">
                Thanks for joining the <strong>PathBlaze</strong> waitlist! 🎓<br/>
                You're now part of a learning revolution tailored for <strong>growth</strong>, <strong>progress</strong>, and <strong>community</strong>.
              </p>

              <ul style="padding-left: 20px; font-size: 16px; margin: 20px 0;">
                <li>🔥 Structured learning paths with real progress</li>
                <li>📦 Curated video resources & tools</li>
                <li>📈 Personalized dashboards & shareable badges</li>
                <li>💬 Connect with a growing developer community</li>
              </ul>

              <p style="font-size: 16px;">
                We're excited to help you <strong>blaze your learning path</strong>. Stay tuned for early access!
              </p>

              <p style="margin-top: 32px; font-size: 14px; color: #777;">
                — The PathBlaze Team 💙
              </p>
            </div>

            <!-- Footer Banner -->
            <div>
              <img 
                src="https://pathblaze.in/banner.png" 
                alt="PathBlaze Banner" 
                style="width: 100%; display: block; border-top: 1px solid #e5e5e5;"
              />
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
