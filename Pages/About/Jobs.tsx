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
import { Briefcase } from "lucide-react";

type Job = {
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
  const jobs: Job[] = [
    {
      title: {
        en: "Developer",
        es: "Programador",
      },
      place: "MegaPCs",
      description: {
        en: "Developed a multiplatform system for managing computer equipment, with features for adding images, printing receipts, and supporting multiple employees.",
        es: "Desarrollé un sistema multiplataforma para gestionar equipos de cómputo, con funcionalidades para agregar imágenes, imprimir recibos y soportar múltiples empleados.",
      },
      yearStart: new Date(2024, 0, 3),
      yearEnd: new Date(2024, 4, 25),
    },
    {
      title: {
        en: "Assistant",
        es: "Auxiliar",
      },
      place: "Jachi",
      description: {
        en: "Performed hardware and software maintenance, installed operating systems and Office, and cleaned printers.",
        es: "Realicé mantenimiento y limpieza de hardware y software, instalación de sistemas operativos y Office, y limpieza de impresoras.",
      },
      yearStart: new Date(2023, 1, 6),
      yearEnd: new Date(2023, 11, 23),
    },
  ];
  return (
    <section className="grid relative gap-4 after:w-1 after:h-full after:absolute dark:after:bg-white after:bg-black after:right-0 after:z-0">
      <h2 className="text-fs-600 font-bold">{title}</h2>
      <div className="grid gap-4 relative">
        {jobs.map((job, i) => (
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
                <CardTitle>{job.title[locale as "en" | "es"]}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold fs-300">{job.place}</p>
                <p className="fs-300">
                  {job.description[locale as "en" | "es"]}
                </p>
              </CardContent>
              <CardFooter className="mt-auto">
                <time className="fs-300">
                  {format(job.yearStart, "dd.MM.yyyy")} -{" "}
                  {job.yearEnd
                    ? format(job?.yearEnd, "dd.MM.yyyy")
                    : "Present"}
                </time>
              </CardFooter>
            </Card>
            <figure className="absolute -right-14 top-0 z-50 bg-gray-200 dark:bg-gray-600 rounded-full p-2">
              <Briefcase className="w-8 h-8" />
            </figure>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
