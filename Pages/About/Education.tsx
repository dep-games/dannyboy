"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { format } from "date-fns";
import { motion } from "framer-motion";
import { SchoolIcon } from "lucide-react";

type Education = {
  title: {
    en: string;
    es: string;
  };
  place: string;
  description: {
    en: string;
    es: string;
  };
  yearStart: Date;
  yearEnd?: Date;
};
const variants = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.25,
    },
  }),
  hidden: (i: number) => ({
    opacity: 0,
    x: -10,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  }),
};

export default function Education({
  title,
  locale,
}: Record<"title" | "locale", string>) {
  const educations: Education[] = [
    {
      title: {
        en: "Bachelor's Degree in Computer Systems Engineering",
        es: "Ingeniería en Sistemas Computacionales",
      },
      place: "Universidad Politécnica de Aguascalientes",
      description: {
        en: "Currently in the 6th quarter. The program focuses on designing, developing, and implementing information systems in organizations, applying information and communication technologies to ensure efficiency in productive processes.",
        es: "Actualmente cursando el 6° cuatrimestre. La carrera se enfoca en el diseño, desarrollo e implementación de sistemas informáticos en las organizaciones, aplicando tecnologías de información y comunicaciones para asegurar la eficiencia en los procesos productivos.",
      },
      yearStart: new Date(2022, 8, 14),
      //yearEnd: new Date(2025, 11, 5),
    },
    {
      title: {
        en: "Technical Degree in Programming",
        es: "Técnico en Programación",
      },
      place: "CECyTEJ 10, Plantel Encarnación de Díaz",
      description: {
        en: "High school program with a technical specialization in programming, including courses in programming languages, web development, database management, and computer maintenance.",
        es: "Programa de preparatoria con especialización técnica en programación, que incluyó cursos de lenguajes de programación, desarrollo web, gestión de bases de datos y mantenimiento de computadoras.",
      },
      yearStart: new Date(2017, 7, 13),
      yearEnd: new Date(2020, 6, 3),
    },
  ];

  return (
    <section className="grid relative gap-4 after:w-1 after:h-full after:absolute dark:after:bg-white after:bg-black after:right-0 after:z-0">
      <h2 className="text-fs-600 font-bold">{title}</h2>
      <div className="grid gap-4 relative">
        {educations.map((education, i) => (
          <motion.article
            aria-description="styling element"
            custom={i}
            variants={variants}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.25 }}
            key={i}
            className="relative mr-8 inline"
          >
            <Card className="backdrop-blur-xs bg-opacity-60 dark:bg-opacity-60 flex flex-col">
              <CardHeader>
                <CardTitle>{education.title[locale as "en" | "es"]}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold fs-300">{education.place}</p>
                <p className="fs-300">
                  {education.description[locale as "en" | "es"]}
                </p>
              </CardContent>
              <CardFooter className="mt-auto">
                <time className="fs-300">
                  {format(education.yearStart, "dd.MM.yyyy")} -{" "}
                  {education.yearEnd
                    ? format(education?.yearEnd, "dd.MM.yyyy")
                    : locale === "es" ? "Presente" : "Present"}
                </time>
              </CardFooter>
            </Card>
            <figure className="absolute -right-14 top-0 z-50 bg-gray-200 dark:bg-gray-600 rounded-full p-2">
              <SchoolIcon className="w-8 h-8" />
            </figure>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
