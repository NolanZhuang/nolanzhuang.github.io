// Language dictionary. Currently English only.
// To add a language later, add a new key (e.g. "zh") with the same structure.
const I18N = {
    en: {
      nav: {
        about: "About",
        projects: "Projects",
        blogs: "Blogs",
        contact: "Contact Me",
      },
      about: {
        name: "Yan Zhuang (Nolan)",
        tagline: "Exploring the Intersection of Code, Visuals & Interactive Experiences",
        description:
          "I am an interactive and technical developer with a background in Computer Science, Graphics and Design, experienced in building interactive applications and real-time 3D experiences with Unity and Unreal Engine. My work spans game development, gameplay systems, technical art, real-time VFX, AR/VR, interactive visualization and blockchain-based applications, with a strong interest in bridging technology and visual experience. I enjoy turning complex ideas into interactive, performant, and visually engaging experiences, and am comfortable working across programming, graphics, interaction design, and data-driven systems.",
        skillsTitle: "Skills",
        educationTitle: "Education",
        experienceTitle: "Experience",
      },
      projects: { title: "Projects", all: "All" },
      blogs: { title: "Blogs" },
      footer: { copyright: "© 2026 Nolan Zhuang" },
    },
    // zh: { ... }  // add Chinese here later
  };
  
  // Available languages, in the order they appear in the switcher.
  const LANGUAGES = ["en"]; // add "zh" later
  
  // Your contact email — used by the "Contact Me" button.
  const CONTACT_EMAIL = "zy1305412197@gmail.com";