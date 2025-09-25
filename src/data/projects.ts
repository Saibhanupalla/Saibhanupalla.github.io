export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Distributed ML Training Job Scheduler",
    techs: ["Java", "Spring Boot", "Docker", "RabbitMQ"],
    link: "https://github.com/Saibhanupalla",
  },
  {
    title: "Unified Generative AI Gateway for Enterprise",
    techs: ["Java", "Spring Boot", "ReactJS", "MySQL"],
    link: "https://github.com/Saibhanupalla/Unified-AI-Gateway",
  },
  {
    title: "Supply Chain Alert and Automation System",
    techs: ["Java", "Spring Boot", "REST APIs"],
    link: "https://github.com/Saibhanupalla/Supply-Chain-Alert-and-Automation-System",
  },
  {
    title: "AI Quiz Generator",
    techs: ["React", "FastAPI", "Clerk Authorization"],
    link: "https://github.com/Saibhanupalla/AIQuizGenerator",
  },
];

export default projects;
