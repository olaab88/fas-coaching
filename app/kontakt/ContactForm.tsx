"use client";

import { useActionState } from "react";
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { sendContactEmail, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { status: "idle" };

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-[#E2DDD7] bg-white font-[family-name:var(--font-dm)] text-sm text-[#111110] placeholder:text-[#B8B4AE] focus:outline-none focus:border-[#111110] transition-all";

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContactEmail, initialState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 py-10">
        <div className="w-12 h-12 rounded-full bg-[#E8F7F7] flex items-center justify-center">
          <CheckCircle size={22} className="text-[#00617A]" />
        </div>
        <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#111110]">
          Melding sendt!
        </h3>
        <p className="font-[family-name:var(--font-dm)] text-[#111110] text-sm leading-relaxed">
          Takk for henvendelsen. Finn Arne svarer innen én arbeidsdag.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="navn" className="block font-[family-name:var(--font-dm)] text-xs font-semibold text-[#111110] tracking-[0.1em] uppercase mb-2">
            Navn
          </label>
          <input
            type="text" id="navn" name="navn" required
            placeholder="Ditt fulle navn"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="epost" className="block font-[family-name:var(--font-dm)] text-xs font-semibold text-[#111110] tracking-[0.1em] uppercase mb-2">
            E-post
          </label>
          <input
            type="email" id="epost" name="epost" required
            placeholder="din@epost.no"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="emne" className="block font-[family-name:var(--font-dm)] text-xs font-semibold text-[#111110] tracking-[0.1em] uppercase mb-2">
          Hva gjelder det?
        </label>
        <select id="emne" name="emne" className={inputClass + " cursor-pointer"}>
          <option value="">Velg kategori...</option>
          <option value="Gratis intro-samtale">Gratis intro-samtale</option>
          <option value="Individuell coaching — voksen">Individuell coaching — voksen</option>
          <option value="Coaching for barn/unge">Coaching for barn/unge</option>
          <option value="Gruppecoaching">Gruppecoaching</option>
          <option value="Annet spørsmål">Annet spørsmål</option>
        </select>
      </div>

      <div>
        <label htmlFor="melding" className="block font-[family-name:var(--font-dm)] text-xs font-semibold text-[#111110] tracking-[0.1em] uppercase mb-2">
          Melding
        </label>
        <textarea
          id="melding" name="melding" rows={6} required
          placeholder="Fortell litt om deg selv og hva du ønsker å jobbe med..."
          className={inputClass + " resize-none"}
        />
      </div>

      {state.status === "error" && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          <AlertCircle size={15} className="shrink-0" />
          <p className="font-[family-name:var(--font-dm)] text-sm">{state.message}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center gap-2 bg-[#111110] text-white font-[family-name:var(--font-dm)] font-medium px-8 py-4 rounded-full hover:bg-[#002850] transition-colors duration-200 cursor-pointer text-sm disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? (
          <>
            <Loader2 size={14} className="animate-spin" />
            Sender...
          </>
        ) : (
          <>
            Send melding <ArrowRight size={14} />
          </>
        )}
      </button>
    </form>
  );
}
