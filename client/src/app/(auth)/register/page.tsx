"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import RegisterForm from "@/components/Auth/RegisterForm";

export default function Register() {
  return (
    <div>
      <HeroHighlight>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          <RegisterForm />
        </motion.div>
      </HeroHighlight>
    </div>
  );
}
