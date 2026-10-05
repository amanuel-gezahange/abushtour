"use client";

import { useState } from "react";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaRoute,
  FaComments,
} from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristInformationCenter",
    name: "Abush Tour",
    url: "https://abushtour.com",
    description:
      "Local tour guide in Arba Minch offering private tours and local experiences around Arba Minch and Southern Ethiopia.",
    areaServed: {
      "@type": "Place",
      name: "Arba Minch, Ethiopia",
    },
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappUrl =
    "https://wa.me/251960398456?text=Hi%20Abush!%20I'm%20interested%20in%20visiting%20Arba%20Minch%20and%20would%20like%20to%20know%20more%20about%20your%20tours.";

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* ========================= */}
      {/* HEADER */}
      {/* ========================= */}

      <header className="absolute left-0 top-0 z-40 w-full">
        <div className="flex items-center justify-between px-5 py-5 md:px-12">
          <a
            href="/"
            className={`text-lg font-semibold tracking-tight text-white transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          >
            Abush | Arba Minch Guide
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm"
          >
            <span className="text-2xl leading-none">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>
      </header>

      {/* ========================= */}
      {/* MENU */}
      {/* ========================= */}

      {menuOpen && (
        <div className="fixed inset-y-0 right-0 z-50 w-[75%] max-w-sm bg-neutral-950 text-white md:w-[360px]">
          <div className="flex h-full flex-col px-6 py-6 md:py-10">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-lg font-semibold">
                Abush | Arba Minch Guide
              </span>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>

            <nav className="flex flex-col">
              <a
                href="#tours"
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/15 py-4 text-xl font-medium"
              >
                Experiences
              </a>

              <a
                href="#guide"
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/15 py-4 text-xl font-medium"
              >
                Meet Abush
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/15 py-4 text-xl font-medium"
              >
                Plan Your Trip
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto mt-6 flex min-h-12 w-[90%] items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-5 text-sm font-semibold text-white shadow-lg md:mx-0 md:w-[220px] md:px-8"
              >
                <FaWhatsapp className="text-lg" />
                Message Abush
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* ========================= */}
      {/* MAIN PHOTO */}
      {/* ========================= */}

      <section className="relative flex min-h-screen items-end overflow-hidden bg-neutral-900">
        <Image
          src="/images/hero-v3.jpg"
          alt="View over Arba Minch and the surrounding landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/80" />

        <div className="relative z-10 w-full px-5 pb-20 text-white md:px-16 md:pb-24">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em]">
            Arba Minch, Ethiopia
          </p>

          <h1 className="max-w-sm text-4xl font-semibold leading-[0.95] tracking-[-0.04em]">
            Explore Arba Minch & Southern Ethiopia with a local guide.
          </h1>

          <p className="mt-5 max-w-sm text-base leading-7 text-white/80">
            Private tours, local experiences, and flexible trips around Arba
            Minch and Southern Ethiopia.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href="#tours"
              className="flex items-center justify-center gap-2 py-2 text-base font-semibold text-white"
            >
              Explore experiences
              <span className="text-lg">↓</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto flex min-h-12 w-[90%] items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-5 text-sm font-semibold text-white shadow-lg md:w-[220px]"
            >
              <FaWhatsapp className="text-xl" />
              Message Abush
            </a>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* EXPERIENCES */}
      {/* ========================= */}

      <section
        id="tours"
        className="mx-auto w-full max-w-6xl bg-white px-5 pb-12 pt-16 md:px-8"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
          Explore Arba Minch
        </p>

        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-neutral-950">
          Experiences worth traveling for.
        </h2>

        {/* ========================= */}
        {/* NECH SAR */}
        {/* ========================= */}

        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
            Nech Sar National Park
          </p>

          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950">
            Explore Nech Sar National Park
          </h3>

          <p className="mt-3 text-base font-medium text-neutral-500">
            Wildlife · Landscapes · Hiking · Nature
          </p>

          <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-600">
            Explore the beautiful landscapes and wildlife of Nech Sar National
            Park, just outside Arba Minch. Discover open grasslands, scenic
            viewpoints, wildlife, and the natural beauty surrounding the lakes.
          </p>

          <div className="mt-6 w-full overflow-hidden rounded-[28px]">
            <Image
              src="/images/zebra.jpg"
              alt="Zebra in Nech Sar National Park near Arba Minch"
              width={1280}
              height={853}
              sizes="(max-width: 768px) 100vw, 1152px"
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* ========================= */}
        {/* LAKE CHAMO */}
        {/* ========================= */}

        <div className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
            Lake Chamo
          </p>

          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950">
            Crocodiles & Wildlife
          </h3>

          <p className="mt-2 text-sm font-medium text-neutral-500">
            Crocodiles · Hippos · Birds · Lake Chamo
          </p>

          <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-600">
            Get close to Lake Chamo&apos;s incredible wildlife, famous for its
            giant Nile crocodiles, hippos, and abundant birdlife.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-[1.6fr_1fr]">
            {/* Crocodiles - landscape */}
            <div className="w-full overflow-hidden rounded-[28px]">
              <Image
                src="/images/lake-chamo.jpg"
                alt="Crocodiles and wildlife at Lake Chamo"
                width={1280}
                height={853}
                sizes="(max-width: 768px) 100vw, 60vw"
                className="h-auto w-full"
              />
            </div>

            {/* Monkey - portrait */}
            <div className="relative h-[420px] w-full overflow-hidden rounded-[28px] md:h-[360px]">
              <Image
                src="/images/monkey.jpg"
                alt="Wildlife around Arba Minch"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* DORZE */}
        {/* ========================= */}

        <div className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
            Dorze Village
          </p>

          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950">
            Dorze Culture & Village
          </h3>

          <p className="mt-3 text-base font-medium text-neutral-500">
            Culture · Traditional homes · Weaving · Local life
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-600">
            Discover Dorze traditions, famous woven textiles, unique homes, and
            everyday village life in the highlands above Arba Minch.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="w-full overflow-hidden rounded-[28px]">
              <Image
                src="/images/dorze.jpg"
                alt="Dorze cultural experience near Arba Minch"
                width={1280}
                height={853}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full"
              />
            </div>

            <div className="w-full overflow-hidden rounded-[28px]">
              <Image
                src="/images/village.jpg"
                alt="Traditional Dorze village near Arba Minch"
                width={1280}
                height={853}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* KOCHO */}
        {/* ========================= */}

        <div className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
            Traditional Kocho Making
          </p>

          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950">
            Make & Taste Traditional Kocho
          </h3>

          <p className="mt-3 text-base font-medium text-neutral-500">
            Local food · Enset · Hands-on experience · Dorze tradition
          </p>

          <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-600">
            Experience traditional kocho making with local Dorze families.
            Learn how kocho is prepared from the enset plant, take part in the
            preparation yourself, and enjoy tasting it afterward.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="relative h-[430px] w-full overflow-hidden rounded-[28px] md:h-[480px]">
              <Image
                src="/images/kocho.jpg"
                alt="Traditional kocho making in Dorze"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            <div className="relative h-[430px] w-full overflow-hidden rounded-[28px] md:h-[480px]">
              <Image
                src="/images/kocho1.jpg"
                alt="Visitor experiencing traditional kocho making in Dorze"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* WEAVING */}
        {/* ========================= */}

        <div className="mt-16 md:grid md:grid-cols-2 md:items-center md:gap-16">
          {/* Text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Local Craft
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950">
              Traditional Dorze Weaving
            </h3>

            <p className="mt-3 text-base font-medium text-neutral-500">
              Weaving · Craftsmanship · Tradition
            </p>

            <p className="mt-5 text-lg leading-8 text-neutral-600">
              Meet local weavers and discover the traditional skills behind
              Dorze textiles, passed down through generations.
            </p>
          </div>

          {/* Weaving photo */}
          <div className="relative mt-6 h-[430px] w-full overflow-hidden rounded-[28px] md:mt-0 md:h-[480px]">
            <Image
              src="/images/weaving.jpg"
              alt="Traditional weaving in Dorze"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* WHY ABUSH */}
      {/* ========================= */}

      <section className="bg-[#f3efe7] px-5 pb-10 pt-10 md:px-0 md:py-16">
        <div className="mx-auto max-w-6xl md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
            Why Abush
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950">
            Explore like a local.
          </h2>

          <div className="mt-8 grid gap-7 md:mt-10 md:max-w-5xl md:grid-cols-3 md:gap-12">
            <div>
              <FaMapMarkerAlt className="mb-3 text-xl text-neutral-950" />

              <h3 className="text-lg font-semibold">Local knowledge</h3>

              <p className="mt-2 text-base leading-7 text-neutral-600">
                Discover places, culture, and experiences with someone who knows
                the area.
              </p>
            </div>

            <div>
              <FaRoute className="mb-3 text-xl text-neutral-950" />

              <h3 className="text-lg font-semibold">Flexible trips</h3>

              <p className="mt-2 text-base leading-7 text-neutral-600">
                Plan your experience around your interests, schedule, and travel
                style.
              </p>
            </div>

            <div>
              <FaComments className="mb-3 text-xl text-neutral-950" />

              <h3 className="text-lg font-semibold">Direct planning</h3>

              <p className="mt-2 text-base leading-7 text-neutral-600">
                Message Abush directly on WhatsApp to ask questions and plan
                your visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* MEET ABUSH */}
      {/* ========================= */}

      <section
        id="guide"
        className="bg-neutral-950 px-5 pb-16 pt-10 text-white md:px-12 md:py-16"
      >
        <div className="mx-auto max-w-6xl md:grid md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              Your Local Guide
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight">
              Explore with someone who calls this place home.
            </h2>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
                Meet your guide
              </p>

              <h3 className="mt-2 text-3xl font-semibold">Abush</h3>
            </div>

            <p className="mt-5 text-lg leading-8 text-white/75">
              Discover Arba Minch and Southern Ethiopia with a local guide who
              knows the people, culture, landscapes, and experiences that make
              this region special.
            </p>
          </div>

          <div className="relative mt-10 h-[560px] w-full overflow-hidden rounded-[28px] md:mt-0 md:max-h-[600px]">
            <Image
              src="/images/guide.jpg"
              alt="Local guide in Southern Ethiopia"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* CONTACT */}
      {/* ========================= */}

      <section
        id="contact"
        className="bg-[#f3efe7] px-5 pb-10 pt-14 md:px-12 md:py-16"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
            Plan your trip
          </p>

          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-neutral-950">
            Ready to explore Southern Ethiopia?
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-600">
            Tell Abush when you&apos;re visiting and what you&apos;d like to
            experience. Your trip can be planned around your interests and
            schedule.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-8 flex min-h-12 w-[90%] items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-5 text-sm font-semibold text-white md:mx-0 md:w-[290px]"
          >
            <FaWhatsapp className="text-xl" />
            Message Abush on WhatsApp
          </a>
        </div>
      </section>

      {/* ========================= */}
      {/* FOOTER */}
      {/* ========================= */}

      <footer className="bg-neutral-950 px-5 pb-6 pt-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3">
          <p className="text-lg font-semibold">
            Abush | Arba Minch Guide
          </p>

          <p className="text-sm text-white/60">
            Local tours and experiences in Arba Minch & Southern Ethiopia.
          </p>

          <p className="mt-5 text-xs text-white/40">
            © 2026 Abush | Arba Minch Guide
          </p>
        </div>
      </footer>
    </main>
  );
}