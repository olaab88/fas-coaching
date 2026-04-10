import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referanser — FAS Coaching",
  description: "Les hva klienter sier om coaching med Finn Arne Sivertsen. Ekte erfaringer fra folk i alle livssituasjoner.",
};

const testimonials = [
  {
    name: "Jon Henning",
    role: "42 år",
    sessions: "4 måneder",
    quote: "Desember 2018 var et vendepunkt i livet mitt, hvor jeg måtte innse at jeg over en lengre periode hadde jobbet for mye og sovet for lite. Det var bare å innse at man kan bli syk av det, og at man må finne tilbake til seg selv og livet igjen. Min kone hadde forstått og fortalt dette over en lengre periode, og endelig fikk hun meg til å forstå alvoret.\n\nVia bekjente kom jeg i kontakt med Finn Arne, som satte av tid allerede dagen etter. Det som slo meg aller mest da jeg kom inn i rommet, var at han møtte meg med åpne armer og ga meg en klem.\n\nFinn Arne er en mann som virkelig får deg til å finne ut av hvem og hva som er viktigst i livet, ved å lytte til hjerte og følelser — ikke via hjerne og mekanismer som er satt i et system. Han finner dine behov og avdekker hva du trenger. Ved hjelp av dette kom vi frem til mange gode ting man skal minne seg selv på daglig, for å huske hva som er viktigst. Nemlig deg selv.\n\nHistorien kunne vært en lang roman, men fortalt i korte trekk: Jeg hadde ikke kommet dit jeg er i dag uten Finn Arnes hjelp på 4 måneder, og opplever nå min beste tid i livet i en alder av 42 år.",
  },
  {
    name: "Per",
    role: "40 år",
    sessions: "Flere samtaler",
    quote: "I flere år med et stadig sterkere fokus på hvordan virksomheten burde forholde seg til meg og mitt, måtte jeg innse at jeg ikke hjalp meg selv særlig bra. Jeg har over tid erfart en økt grad av irritasjon og forundring over hvordan «verden» kunne velge å misforstå meg i det som for meg var opplagt.\n\nEtter noen samtaler med Finn Arne ble jeg raskt klar over at her var det en som var oppriktig engasjert og opptatt av å hjelpe meg. Han er ikke belærende, ikke instruerende, og har ikke alltid svaret — men han er meget god til å stille de rette spørsmålene.\n\nGjennom gode samtaler og dialog leder han meg gjennom nye måter å se ting på, og via gode spørsmål ender jeg oftest opp med svaret selv. Finn Arne oppklarte raskt at det er en lettere og mer realistisk oppgave å endre på seg selv fremfor å tro at en skal lykkes med å endre verden. Bonusen er at når jeg endret meg, endret det også omgivelsene mine positivt. Noen ganger trenger vi noen for å se det åpenbare. Stor takk for kunnskap og profesjonell hjelp — du har min beste anbefaling.",
  },
  {
    name: "Tore",
    role: "38 år",
    sessions: "Flere samtaler",
    quote: "Når jeg kom til deg hadde jeg få eller ingen positive tanker. Var sint og skylte på omgivelser og andre rundt meg. Lei av livet og meg selv, lite sosial og murte meg inne. Du fikk meg til å gå i meg selv, og vi fant raskt noen av årsakene til mine problemer.\n\nNå smiler livet igjen. Jeg er sosial, positiv og har fått meg kjæreste. Dette kan varmt anbefales. Tusen takk.",
  },
  {
    name: "Frode",
    role: "49 år — bedriftsleder",
    sessions: "Krisetid",
    quote: "Jeg eier og leder ett solid firma med 35 ansatte, som jeg overtok av familien for 11 år siden. Jeg har alltid jobbet hardt og hatt full kontroll og god drift. Så smalt det — 12. mars og full nedstengning av landet. Jeg var plutselig i en helt ny situasjon hvor jeg i løpet av én dag ble bombardert av hendelser jeg ikke klarte å håndtere slik jeg ønsket.\n\nJeg druknet i forventninger og krav fra alle rundt meg, uten å se noen løsning. Jeg måtte ha hjelp til å sortere. Jeg tok kontakt med Finn Arne, som vi hadde fått anbefalt av en bekjent. Han imponerte meg da, og han imponerte meg igjen. På få dagers varsel hadde vi igjen gode samtaler og begynte å nøste det sammen. På rekord tid klarte han å få meg til å innse at det faktisk ikke var noen som hadde alle svarene. Alle er ulike, og ingen besitter alle de absolutte sannheter.\n\nAlle ansatte, leverandører og kunder ble informert, og vi ga god informasjon med de riktige formuleringene til de rette tidspunktene. Kommunikasjonen fungerte, og det var ingen panikk. Han får meg til å tenke selv og støtter, dytter meg i front og er selv usynlig støtte — og sørger for at vi har fremdrift og følger planen.\n\nTakk for det jeg klart ser som «avgjørende bidrag» for meg i noen uker preget av rådløshet og handlekraft.",
  },
];

const stats = [
  { value: "100+", label: "Klienter" },
  { value: "5 år", label: "Erfaring" },
  { value: "98%", label: "Anbefaler" },
  { value: "★ 5.0", label: "Snittrating" },
];

export default function ReferanserPage() {
  return (
    <div className="bg-[#F8F7F4] pt-16">

      {/* HERO */}
      <section className="py-24 px-6 border-b border-[#E2DDD7]">
        <div className="max-w-7xl mx-auto">
          <p className="font-[family-name:var(--font-dm)] text-[#64C8C8] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Referanser
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(3rem,8vw,7rem)] text-[#111110] font-bold leading-[1.0]">
            Ekte<br />
            <span className="text-[#002850]">endring</span>
          </h1>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b border-[#E2DDD7] py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#111110]">{value}</p>
              <p className="font-[family-name:var(--font-dm)] text-[#111110] text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CARDS */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-[#E2DDD7] hover:border-[#64C8C8] hover:shadow-md transition-all duration-200 flex flex-col gap-5">
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => <Star key={j} size={12} className="fill-[#64C8C8] text-[#64C8C8]" />)}
              </div>
              <div className="flex-1 space-y-3">
                {t.quote.split("\n\n").map((para, j) => (
                  <p key={j} className="font-[family-name:var(--font-dm)] text-sm text-[#111110] leading-relaxed">
                    {j === 0 && <>&ldquo;</>}{para}{j === t.quote.split("\n\n").length - 1 && <>&rdquo;</>}
                  </p>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-[#F8F7F4]">
                <div>
                  <p className="font-[family-name:var(--font-dm)] font-semibold text-[#111110] text-sm">{t.name}</p>
                  <p className="font-[family-name:var(--font-dm)] text-[#111110] text-xs mt-0.5">{t.role}</p>
                </div>
                <span className="font-[family-name:var(--font-dm)] text-xs text-[#111110] bg-[#F8F7F4] border border-[#E2DDD7] px-3 py-1 rounded-full">
                  {t.sessions}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE BREAK */}
      <section className="py-20 px-6 bg-[#002850]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[family-name:var(--font-dm)] text-[#64C8C8] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Finn Arne Sivertsen
          </p>
          <p className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-white leading-tight">
            Den beste investeringen du kan gjøre,{" "}
            <span className="text-[#64C8C8]">er i deg selv.</span>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#111110]">
            Skriv din egen <span className="text-[#002850]">historie</span>
          </h2>
          <p className="font-[family-name:var(--font-dm)] text-[#111110] text-[1rem] leading-relaxed">
            Start med en gratis intro-samtale og se hva coaching kan gjøre for deg.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-[#111110] text-white font-[family-name:var(--font-dm)] font-medium px-8 py-4 rounded-full hover:bg-[#002850] transition-colors duration-200 cursor-pointer text-sm"
          >
            Book gratis intro <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </div>
  );
}
