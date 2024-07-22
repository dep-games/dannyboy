import React from "react";
import Image from "next/image";
import dartIcon from "@/public/svgs/dart.svg";
import flutterIcon from "@/public/svgs/flutter.svg";
import cppIcon from "@/public/svgs/cpp.svg";
import javaIcon from "@/public/svgs/java.svg";
import pythonIcon from "@/public/svgs/python.svg";
import htmlIcon from "@/public/svgs/html.svg";
import cssIcon from "@/public/svgs/css.svg";

export default function TechIcons() {
  return (
    <>
      <Image
        alt="Dart Icon"
        src={dartIcon}
        width={100}
        height={100}
        className="w-max-w w-full"
      />
      <Image
        alt="Flutter Icon"
        src={flutterIcon}
        width={100}
        height={100}
        className="w-max-w w-full"
      />
      <Image
        alt="C++ Icon"
        src={cppIcon}
        width={100}
        height={100}
        className="w-max-w w-full"
      />
      <Image
        alt="Java Icon"
        src={javaIcon}
        width={100}
        height={100}
        className="w-max-w w-full"
      />
      <Image
        alt="Python Icon"
        src={pythonIcon}
        width={100}
        height={100}
        className="w-max-w w-full"
      />
      <Image
        alt="HTML Icon"
        src={htmlIcon}
        width={100}
        height={100}
        className="w-max-w w-full"
      />
      <Image
        alt="CSS Icon"
        src={cssIcon}
        width={100}
        height={100}
        className="w-max-w w-full"
      />
    </>
  );
}
