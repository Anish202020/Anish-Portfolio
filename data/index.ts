export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    }
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Callify VC App",
      des: "Callify is a video conferencing application designed to provide secure, real-time communication with a range of features to enhance user experience.",
      img: "/5.png",
      iconLists: ["/nextjs.png", "/tailwind.png", "/stream.png"],
      link: "https://callify-meet.vercel.app/",
    },
    {
      id: 2,
      title: "AI Saas Blog",
      des: "AI SaaS Blog is a platform dedicated to sharing insights, trends, and innovations in the world of artificial intelligence as a service.",
      img: "/4.png",
      iconLists: ["/nextjs.png", "/tailwind.png", "/mongodb.png", "/auth0.png","/chatgpt.png"],
      link: "https://ai-bloggy.vercel.app/",
    },
    
    {
      id: 3,
      title: "Ease Expense Personal Money Budget",
      des: "Ease Expense is a personal budgeting tool designed to simplify money management by tracking income and expenses.",
      img: "/7.png",
      iconLists: ["/python.png", "/bootstrap.png", "/mysql.png"],
      link: "https://github.com/Anish202020/easeexpense3.0",
    },
    {
      id: 4,
      title: "LookUp Search Engine",
      des: "Lookup search engine that allows users to search for specific information quickly by entering keywords or phrases.",
      img: "/6.png",
      iconLists: ["/nextjs.png", "/tailwind.png"],
      link: "https://github.com/Anish202020/google-next",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Anish is an outstanding full-stack developer with a rare combination of technical expertise and creative problem-solving skills. His ability to deliver high-quality code on time.",
      name: "Ansh Jha",
      title: "Student of Acharya Institute of Technology",
    },
    {
      quote:
        "Working with Anish has been a game-changer for our development team. He not only brings deep knowledge of both front-end and back-end technologies.",
      name: "Aditya Kshatriya",
      title: "Student of Acharya Institute of Technology",
    },
    {
      quote:
        "Anish full-stack development skills are simply unparalleled. From designing intuitive user interfaces to building robust server-side applications.",
      name: "Aditya Ranjan",
      title: "Student of Acharya Institute of Technology",
    },
    {
      quote:
        "What sets Anish apart as a full-stack developer is his attention to detail and passion for innovation. He is always up-to-date with the latest technologies.",
      name: "Abhishek J",
      title: "Student of Acharya Institute of Technology",
    },
    {
      quote:
        "Anish is a versatile full-stack developer who excels in both technical acumen and team collaboration. His ability to understand complex requirements.",
      name: "Balaji A T",
      title: "Student of Acharya Institute of Technology",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "Next Js",
      img: "/nextjs.png",
      nameImg: "/NextJsName.png",
    },
    {
      id: 2,
      name: "MongoDB",
      img: "/mongodb.png",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "ChatGPT",
      img: "/chatgpt.png",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "Python",
      img: "/python.png",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "MySql",
      img: "/mysql.png",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Web Development Intern",
      desc: "Designed and developed landing page and portfolio websites.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Participant | Hackathons",
      desc: "AGRIKARE 2023  Use of Sensors integrated with machine learning.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      desc: "Developed a comprehensive E-Commerce Website specifically for kid's products.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/github.png",
      link: "http://github.com/Anish202020/"
    },
    {
      id: 2,
      img: "/linktree.png",
      link: "https://linktr.ee/AnishKumar2003"
    },
    {
      id: 3,
      img: "/linkdin.png",
      link:"https://www.linkedin.com/in/anish-kumar-b47999213/"
    },
  ];