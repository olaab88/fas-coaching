"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const navn = formData.get("navn")?.toString().trim() ?? "";
  const epost = formData.get("epost")?.toString().trim() ?? "";
  const emne = formData.get("emne")?.toString().trim() ?? "";
  const melding = formData.get("melding")?.toString().trim() ?? "";

  if (!navn || !epost || !melding) {
    return { status: "error", message: "Fyll ut alle påkrevde felt." };
  }

  try {
    await resend.emails.send({
      from: "FAS Coaching <onboarding@resend.dev>",
      to: "finnarnes@yahoo.no",
      replyTo: epost,
      subject: `Ny henvendelse fra ${navn}${emne ? ` — ${emne}` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #111110;">
          <h2 style="color: #002850; margin-bottom: 4px;">Ny henvendelse via fas-coaching.no</h2>
          <hr style="border: none; border-top: 1px solid #E2DDD7; margin: 16px 0;" />
          <p><strong>Navn:</strong> ${navn}</p>
          <p><strong>E-post:</strong> ${epost}</p>
          ${emne ? `<p><strong>Gjelder:</strong> ${emne}</p>` : ""}
          <p><strong>Melding:</strong></p>
          <p style="background: #F8F7F4; border-left: 3px solid #002850; padding: 12px 16px; border-radius: 4px; white-space: pre-wrap;">${melding}</p>
          <hr style="border: none; border-top: 1px solid #E2DDD7; margin: 16px 0;" />
          <p style="color: #888; font-size: 12px;">Svar direkte på denne e-posten for å svare til ${navn}.</p>
        </div>
      `,
    });

    return { status: "success" };
  } catch {
    return { status: "error", message: "Noe gikk galt. Prøv igjen eller ring +47 906 90 635." };
  }
}
