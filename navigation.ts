import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "es"] as const;

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  "/": "/",

  // If locales use different paths, you can
  // specify each external path per locale.
  "/about": {
    en: "/about",
    es: "/sobre_mi",
  },
  "/about#guestbook": {
    en: "/about#guestbook",
    es: "/sobre_mi#ziyaretcidefteri",
  },
  "/projects": {
    en: "/projects",
    es: "/proyectos",
  },
  // Dynamic params are supported via square brackets
  "/projects/[endpoint]": {
    en: "/projects/[endpoint]",
    es: "/proyectos/[endpoint]",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, pathnames });
