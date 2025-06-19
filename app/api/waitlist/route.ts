import { supabase } from "@/lib/supabaseClient";
import { sendConfirmationEmail } from "@/lib/sendEmail";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, name, wants_updates } = body;

    if (!email || !name) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
      });
    }

    const { data: existing, error: fetchError } = await supabase
      .from("waitlist")
      .select("id")
      .eq("email", email);

    if (fetchError) {
      console.error("❌ Supabase query error:", fetchError.message);
      return new Response(JSON.stringify({ error: "Database error" }), {
        status: 500,
      });
    }

    if (existing && existing.length > 0) {
      return new Response(JSON.stringify({ error: "Email already exists" }), {
        status: 409,
      });
    }

    const { error } = await supabase
      .from("waitlist")
      .insert([{ email, name, wants_updates }]);

    if (error) {
      console.error("❌ Supabase insert error:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
      });
    }

    try {
      await sendConfirmationEmail(email, name);
    } catch (e) {
      console.error("❌ Email sending failed:", e);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (err) {
    console.error("❌ JSON parse or server error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
