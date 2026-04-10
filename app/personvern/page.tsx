import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personvernerklæring — FAS Coaching",
  description: "Les hvordan FAS Coaching behandler personopplysninger i henhold til GDPR og personopplysningsloven.",
  alternates: { canonical: "https://www.fas-coaching.no/personvern" },
};

export default function PersonvernPage() {
  return (
    <div className="bg-[#F8F7F4] pt-16">
      <section className="py-24 px-6 border-b border-[#E2DDD7]">
        <div className="max-w-3xl mx-auto">
          <p className="font-[family-name:var(--font-dm)] text-[#64C8C8] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Juridisk
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl text-[#111110] font-bold leading-tight">
            Personvernerklæring
          </h1>
          <p className="font-[family-name:var(--font-dm)] text-[#111110] text-sm mt-4">
            Sist oppdatert: april 2025
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-10 font-[family-name:var(--font-dm)] text-[#111110] text-[1rem] leading-[1.8]">

          <div className="space-y-3">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#111110]">1. Behandlingsansvarlig</h2>
            <p>
              FAS Coaching, ved Finn Arne Sivertsen, er behandlingsansvarlig for personopplysninger som samles inn via dette nettstedet.
            </p>
            <p>
              <strong>Kontakt:</strong> Skårerveien 12, 1470 Lørenskog · Telefon: +47 906 90 635 · E-post: finnarnes@yahoo.no
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#111110]">2. Hvilke personopplysninger samler vi inn?</h2>
            <p>Via kontaktskjemaet på nettstedet samles følgende inn:</p>
            <ul className="list-disc pl-6 space-y-1 text-[0.95rem]">
              <li>Navn</li>
              <li>E-postadresse</li>
              <li>Meldingsinnhold (det du selv skriver)</li>
              <li>Valgt kategori (type henvendelse)</li>
            </ul>
            <p>Vi samler ikke inn sensitive personopplysninger (helseopplysninger, politisk overbevisning etc.) via skjemaet.</p>
          </div>

          <div className="space-y-3">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#111110]">3. Formål og rettslig grunnlag</h2>
            <p>
              Personopplysningene brukes utelukkende til å besvare henvendelser og inngå avtale om coaching-tjenester. Det rettslige grunnlaget er <strong>berettiget interesse</strong> (GDPR art. 6 nr. 1 f) og oppfyllelse av avtale (GDPR art. 6 nr. 1 b).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#111110]">4. Lagring og sletting</h2>
            <p>
              Opplysninger fra kontaktskjemaet lagres i e-postinnboksen til behandlingsansvarlig og slettes senest 12 måneder etter at henvendelsen er avsluttet, med mindre det er nødvendig å oppbevare dem lenger av regnskapsmessige eller juridiske årsaker.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#111110]">5. Deling med tredjeparter</h2>
            <p>
              Vi selger aldri personopplysninger til tredjeparter. Opplysningene deles ikke med andre enn det som er nødvendig for å levere tjenesten (f.eks. e-postleverandør).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#111110]">6. Dine rettigheter</h2>
            <p>Du har rett til å:</p>
            <ul className="list-disc pl-6 space-y-1 text-[0.95rem]">
              <li>Få innsyn i hvilke opplysninger vi har om deg</li>
              <li>Kreve retting av uriktige opplysninger</li>
              <li>Kreve sletting av opplysningene dine</li>
              <li>Protestere mot behandlingen</li>
              <li>Klage til Datatilsynet (datatilsynet.no)</li>
            </ul>
            <p>
              For å benytte deg av disse rettighetene, ta kontakt på finnarnes@yahoo.no eller ring +47 906 90 635.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#111110]">7. Informasjonskapsler (cookies)</h2>
            <p>
              Nettstedet bruker ikke markedsføringsinformasjonskapsler eller tredjeparts sporingsverktøy. Tekniske informasjonskapsler som er nødvendige for nettstedets funksjon kan brukes av Vercel (vår hostingleverandør).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#111110]">8. Endringer</h2>
            <p>
              Denne erklæringen kan oppdateres. Vesentlige endringer varsles på nettstedet. Gjeldende versjon er alltid tilgjengelig på fas-coaching.no/personvern.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
