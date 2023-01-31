"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { textContainer, textVariant2 } from "../utils/motion";

type TypingTextProps = {
  title: string;
  textStyles: string;
};

export const TypingText = ({ title, textStyles }: TypingTextProps) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

type TitleTextProps = {
  title: ReactNode | string;
  textStyles: string;
};

export const TitleText = ({ title, textStyles }: TitleTextProps) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
