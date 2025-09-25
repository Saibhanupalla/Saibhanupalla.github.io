type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile: string;
};

const presentation: Presentation = {
  mail: "saibhanupalla564@gmail.com",
  title: "Hi, I’m Sai Bhanu 👋",
  profile: "/bhanuprofile.jpeg",
  description:
    "Hello, I'm a passionate *Information Technology student* and *developer* from *India*, *actively seeking* software engineering internship and full time opportunities. I specialize in building scalable backend systems using *Java, Spring Boot, and Python*. I'm always exploring new advancements in *Generative AI* and am eager to contribute my skills to a forward-thinking team.",
  socials: [
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/saibhanu-palla",
    },
    {
      label: "X",
      link: "https://twitter.com/Spot564",
    },
    {
      label: "Github",
      link: "https://github.com/Saibhanupalla",
    },
  ],
};

export default presentation;
