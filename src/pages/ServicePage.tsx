import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingTelegramButton from "@/components/FloatingTelegramButton";

import serviceHome from "@/assets/service-home.jpg";
import serviceOffice from "@/assets/service-office.jpg";
import serviceFacade from "@/assets/service-facade.jpg";
import serviceSofa from "@/assets/service-sofa.jpg";
import serviceCarpet from "@/assets/service-carpet.jpg";
import serviceTile from "@/assets/service-tile.jpg";

const services = {
  "uy-tozalash-toshkent": {
    title: "Uy tozalash xizmati Toshkentda",
    shortTitle: "Uy tozalash",
    image: serviceHome,
    description:
      "Toshkentda professional uy tozalash xizmati. Kvartira, hovli va xonadonlar uchun sifatli cleaning xizmati.",
    intro:
      "Clean Master Toshkent bo'ylab uy tozalash xizmatini professional darajada taklif qiladi. Uyingizni ozoda, qulay va yoqimli holatga keltirish uchun zamonaviy uskunalar va tajribali jamoa bilan ishlaymiz.",
    content: [
      "Uy tozalash xizmati Toshkentda kundan-kunga ko‘proq talab qilinmoqda. Tez hayot tarzi sabab ko‘pchilik uy ishlariga yetarlicha vaqt ajrata olmaydi. Shu sabab professional cleaning xizmati juda qulay yechim hisoblanadi.",
      "Biz kvartira, xususiy uy, hovli va turli xonadonlar uchun umumiy hamda chuqur tozalash xizmatlarini ko‘rsatamiz. Xonalar, oshxona, hammom, pol, chang bosgan yuzalar va boshqa joylar puxta tozalanadi.",
      "Sifatli vositalar va ehtiyotkor yondashuv yordamida uyingizda tozalik, tartib va yoqimli muhit yaratishga yordam beramiz."
    ],
    faq: [
      {
        q: "Uy tozalash xizmatiga nimalar kiradi?",
        a: "Xonalarni changdan tozalash, pol yuvish, yuzalarni artish, oshxona va hammomni umumiy tozalash ishlari kiradi."
      },
      {
        q: "Toshkentning qaysi hududlariga borasizlar?",
        a: "Toshkent shahri bo‘ylab xizmat ko‘rsatamiz."
      }
    ]
  },

  "ofis-tozalash-toshkent": {
    title: "Ofis tozalash xizmati Toshkentda",
    shortTitle: "Ofis tozalash",
    image: serviceOffice,
    description:
      "Toshkentda professional ofis tozalash xizmati. Ish joylari va biznes markazlar uchun puxta cleaning xizmati.",
    intro:
      "Ofis tozaligi ish muhiti, xodimlar qulayligi va kompaniya imidji uchun muhim. Clean Master Toshkentda ofis cleaning xizmatini ishonchli tarzda taklif qiladi.",
    content: [
      "Ofis tozalash xizmati ish joyining doimo ozoda va tartibli bo‘lishiga yordam beradi. Toza ofis mijozlarda yaxshi taassurot qoldiradi va xodimlarning samaradorligini oshiradi.",
      "Biz stol yuzalari, pol, umumiy maydonlar, kirish qismi, oshxona va sanitar zonalarni professional usulda tozalaymiz.",
      "Kichik ofislar, yirik biznes markazlar va tijorat maydonlari uchun qulay cleaning yechimlarini taklif qilamiz."
    ],
    faq: [
      {
        q: "Doimiy ofis tozalash xizmati ham bormi?",
        a: "Ha, bir martalik ham, doimiy grafik asosida ham xizmat ko‘rsatamiz."
      },
      {
        q: "Ishdan keyin kelib tozalash mumkinmi?",
        a: "Ha, qulay vaqt bo‘yicha kelishib ishlash mumkin."
      }
    ]
  },

  "fasad-tozalash-toshkent": {
    title: "Fasad tozalash xizmati Toshkentda",
    shortTitle: "Fasad tozalash",
    image: serviceFacade,
    description:
      "Toshkentda professional fasad tozalash xizmati. Bino tashqi qismi va oynalarni xavfsiz usulda tozalash.",
    intro:
      "Fasad tozalash binoning tashqi ko‘rinishini yaxshilaydi va obyektni yanada ozoda ko‘rsatadi.",
    content: [
      "Fasad yuzalari vaqt o‘tishi bilan chang, ifloslik va atmosferadagi qoldiqlarni yig‘adi. Bu esa bino ko‘rinishiga salbiy ta’sir qiladi.",
      "Professional uskunalar va xavfsiz yondashuv yordamida fasad va tashqi yuzalarni ehtiyotkorlik bilan tozalaymiz.",
      "Toshkentdagi ofislar, savdo nuqtalari va boshqa obyektlar uchun fasad cleaning xizmati ko‘rsatamiz."
    ],
    faq: [
      {
        q: "Fasad tozalash xavfsiz bajariladimi?",
        a: "Ha, barcha ishlar xavfsizlik qoidalariga rioya qilgan holda amalga oshiriladi."
      },
      {
        q: "Faqat fasadmi yoki oyna ham tozalanadimi?",
        a: "Obyekt turiga qarab fasad va tegishli tashqi yuzalar tozalanadi."
      }
    ]
  },

  "divan-tozalash-toshkent": {
    title: "Divan tozalash xizmati Toshkentda",
    shortTitle: "Divan tozalash",
    image: serviceSofa,
    description:
      "Toshkentda divan va yumshoq mebel tozalash xizmati. Dog‘, chang va noxush hidlarni kamaytirish uchun professional cleaning.",
    intro:
      "Divan va yumshoq mebel kundalik foydalanishda tez ifloslanadi. Professional tozalash mebel ko‘rinishi va gigiyenasini yaxshilashga yordam beradi.",
    content: [
      "Divan, kreslo va boshqa yumshoq mebellar ichiga chang, mayda kir va turli hidlar singib qolishi mumkin.",
      "Oddiy artish bilan yetarli natija bo‘lmagan holatlarda professional usuldagi mebel tozalash ancha samarali bo‘ladi.",
      "Clean Master Toshkent bo‘ylab uy va ofislar uchun divan cleaning xizmatini taklif qiladi."
    ],
    faq: [
      {
        q: "Dog‘larni to‘liq ketkazish mumkinmi?",
        a: "Dog‘ turi va eski-yangiligiga qarab natija farq qiladi, lekin maksimal tozalash qilinadi."
      },
      {
        q: "Mebel qancha vaqtda quriydi?",
        a: "Bu mato turi va xona sharoitiga bog‘liq."
      }
    ]
  },

  "gilam-tozalash-toshkent": {
    title: "Gilam tozalash xizmati Toshkentda",
    shortTitle: "Gilam tozalash",
    image: serviceCarpet,
    description:
      "Toshkentda professional gilam tozalash xizmati. Gilamlarni chang, dog‘ va hidlardan tozalash uchun sifatli cleaning xizmati.",
    intro:
      "Gilam tozalash xizmati uy va ofisdagi tozalikni saqlashda juda muhim. Clean Master gilamlarni ehtiyotkor va sifatli usulda tozalashga yordam beradi.",
    content: [
      "Gilam uy ichida eng ko‘p chang va mayda ifloslik yig‘adigan buyumlardan biri hisoblanadi. Shu sabab uni muntazam parvarish qilish kerak.",
      "Professional gilam tozalash orqali chang, yuzaki kirlar, ayrim dog‘lar va noxush hidlarni kamaytirish mumkin.",
      "Toshkent bo‘ylab gilam cleaning xizmati kerak bo‘lsa, Clean Master qulay va ishonchli yechim taklif qiladi."
    ],
    faq: [
      {
        q: "Gilamni olib ketasizlarmi?",
        a: "Xizmat formati bo‘yicha kelishiladi: ayrim holatlarda joyida ishlanadi."
      },
      {
        q: "Barcha dog‘lar ketadimi?",
        a: "Dog‘ turi va materialga qarab natija farq qiladi."
      }
    ]
  },

  "kafel-bruschatka-tozalash-toshkent": {
    title: "Kafel va bruschatka tozalash xizmati Toshkentda",
    shortTitle: "Bruschatka / kafel",
    image: serviceTile,
    description:
      "Toshkentda kafel va bruschatka tozalash xizmati. Ichki va tashqi qoplamalarni professional usulda tozalash.",
    intro:
      "Kafel va bruschatka yuzalar vaqt o‘tishi bilan kir, chang va dog‘larni yig‘adi. Professional tozalash ularni ancha yangilab ko‘rsatadi.",
    content: [
      "Kafel, tosh va bruschatka yuzalarida suv izi, chang, ifloslik va qotib qolgan kirlar paydo bo‘lishi mumkin.",
      "To‘g‘ri vositalar va mos usullar bilan bu yuzalarni chuqurroq va xavfsiz tozalash mumkin.",
      "Clean Master Toshkent bo‘ylab hovli, yo‘lak, kirish qismi va ichki kafel yuzalar uchun cleaning xizmatini taklif qiladi."
    ],
    faq: [
      {
        q: "Tashqi maydonlarni ham tozalaysizlarmi?",
        a: "Ha, tashqi va ichki qoplamalar uchun ham xizmat ko‘rsatamiz."
      },
      {
        q: "Kafelga zarar bo‘lmaydimi?",
        a: "Mos usul va vosita tanlanganda yuzaga zarar yetkazilmaydi."
      }
    ]
  }
};

export default function ServicePage() {
  const { slug } = useParams();

  const service = useMemo(() => {
    if (!slug) return null;
    return services[slug as keyof typeof services] || null;
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-3xl font-bold mb-4">Sahifa topilmadi</h1>
          <Link to="/" className="text-blue-600 underline">
            Bosh sahifaga qaytish
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const pageUrl = `https://www.clean-master.uz/${slug}`;

  return (
    <>
      <Helmet>
        <title>{service.title} | Clean Master</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:title" content={`${service.title} | Clean Master`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="container mx-auto px-4 py-16">
          <nav className="mb-6 text-sm text-gray-500">
            <Link to="/" className="hover:underline">
              Bosh sahifa
            </Link>{" "}
            / <span>{service.shortTitle}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <img
                src={service.image}
                alt={`${service.shortTitle} xizmati Toshkent`}
                className="w-full rounded-2xl object-cover"
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
              <p className="text-lg text-gray-600 mb-6">{service.intro}</p>

              <div className="space-y-4 text-gray-700 leading-8">
                {service.content.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="tel:+998335881111"
                  className="inline-block rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold"
                >
                  Buyurtma berish
                </a>
              </div>
            </div>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">
              Ko‘p beriladigan savollar
            </h2>

            <div className="space-y-4">
              {service.faq.map((item, index) => (
                <div key={index} className="rounded-xl border p-5">
                  <h3 className="font-semibold mb-2">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <FloatingTelegramButton />
        <Footer />
      </div>
    </>
  );
}