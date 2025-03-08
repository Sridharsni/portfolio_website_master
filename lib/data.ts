import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdOutlineSchool } from "react-icons/md"; // Added icon for Teaching Assistant
import { AiFillCloud } from "react-icons/ai"; // Added icon for Cloud & Full Stack
import { SiMongodb } from "react-icons/si"; // Added icon for Full Stack Dev
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Teaching Assistant",
    location: "Arizona State University · Part-time",
    description:
      "Assist in teaching IFT 512: Advanced Big Data Analytics and IFT 536: Natural Language Processing (NLP). Conduct lab sessions on Python, R, TensorFlow, and Apache Spark, guiding students on data visualization, text mining, and big data processing.",
    icon: React.createElement(MdOutlineSchool),
    date: "Jan 2025 – Present",
  },
  {
    title: "Software Development Engineer Intern – Cloud & Full Stack",
    location: "HyperData API – Remote, United States",
    description:
      "Developed and deployed a FastAPI, PostgreSQL, and Docker-based admin application on AWS EC2. Automated deployments using Jenkins CI/CD and optimized ETL pipelines with Kubernetes and Terraform on GCP.",
    icon: React.createElement(AiFillCloud),
    date: "June 2024 – Aug 2024",
  },
  {
    title: "Full Stack Developer",
    location: "Big Bang Creations – Tamil Nadu, India",
    description:
      "Led development of high-performance, SEO-optimized web platforms using React.js, Next.js, and D3.js. Built interactive dashboards, optimized API caching, and implemented scalable cloud architecture.",
    icon: React.createElement(SiMongodb),
    date: "Dec 2021 – Aug 2022",
  },
] as const;

export const projectsData = [
  {
    title: "🚀 SkyComm: AI-Powered ATC Error Correction",
    description:
      "An AI system that listens to air traffic conversations, detects communication errors using Whisper AI, and corrects errors with a T5 model to improve flight safety.",
    tags: ["Python", "PyTorch", "Whisper AI", "T5 Transformer", "ALMS", "Active Learning", "JiWER"],
    imageUrl: corpcommentImg,
  },
  {
    title: "📈 TradeSense: LLM-Powered Predictive Trading Systemev",
    description:
      "An AI-powered tool that analyzes real-time market trends using DeepSeek AI and Apache Spark to predict stock movements for companies like Netflix and Nvidia.",
    tags: ["Python", "TensorFlow", "LLM", "DeepSeek", "Kafka", "Apache Spark"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  // Programming Languages
  "Python",
  "C++",
  "C#",
  "Java",
  "SQL",
  "R",

  // Machine Learning & AI
  "TensorFlow",
  "Scikit-learn",
  "PyTorch",
  "LLMs (GPT Models)",
  "NLP",
  "DeepSeek AI",

  // Data Analysis & Monitoring
  "Pandas",
  "NumPy",
  "Grafana",
  "ELK Stack",

  // DevOps & Cloud
  "AWS (Lambda, ECS, DynamoDB, S3)",
  "GCP",
  "Jenkins",
  "Docker",
  "Kubernetes",
  "Terraform",
  "CI/CD Pipelines",
  "Kafka",

  // Web Development & APIs
  "React",
  "Vue",
  "Angular",
  "RESTful APIs",
  "JSON",
  "TypeScript",
  "Microservices",

  // Database & Tools
  "PostgreSQL",
  "MySQL",
  "Apache Spark",
  "D3.js",
  "Docker",
] as const;
