"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a <span className="font-medium">Master’s student in Information Technology at Arizona State University</span>, graduating in <span className="font-medium">May 2025</span>, with a strong passion for <span className="font-medium">Full Stack Development, Cloud Computing, and Artificial Intelligence</span>.  
        I specialize in building scalable and efficient digital solutions, leveraging modern technologies to create intelligent, high-performance applications.
      </p>

      <p className="mb-3">
        My expertise spans <span className="font-medium">React, Next.js, TypeScript, and Node.js</span> for full-stack development, while also integrating <span className="font-medium">AWS, GCP, Docker, and Kubernetes</span> for seamless cloud computing.  
        I thrive at the intersection of <span className="font-medium">software engineering and AI</span>, continuously exploring ways to optimize workflows and drive innovation.  
        My development approach prioritizes <span className="font-medium">clean, maintainable code, automation, and scalability</span>, ensuring that every solution is both efficient and future-proof.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy  
        <span className="font-medium"> traveling, going to the gym, and endlessly scrolling through dog memes</span>.
      </p>
    </motion.section>
  );
}
