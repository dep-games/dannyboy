import About from "@/Pages/About/About";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import React from "react";
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: ["About.metadata"] });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      type: "website",
      locale: locale,
      url: locale === "en" ? "/about" : "/es/sobre_mi",
      title: `${t("title")} | Daniel Pedroza`,
      description: t("description"),
    },
    alternates: {
      canonical: "/about",
      languages: {
        en: "/about",
        es: "/es/sobre_mi",
      },
    },
  };
}

export default function page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <About locale={locale} />;
}
