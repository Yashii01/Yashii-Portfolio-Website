const sections = {
    home: {
      title: "Hey, It's <span>Yashika</span>",
      subtitle: "I'm a <span>Web Developer & Graphic Designer</span>",
      content: "Welcome to my portfolio! I am a Web Developer & UI Designer with a passion for crafting interactive, responsive, and visually appealing digital experiences. I love combining design and technology to build websites that are not only functional but also engaging.🚀 I focus on performance, aesthetics, and user experience. Whether it's designing a sleek interface or developing an innovative solution, my goal is to create impactful digital products."
    },
    services: {
      title: "My <span>Services</span>",
      subtitle: "",
      content: "I am Yashika, a passionate Web Developer & UI Designer dedicated to crafting seamless digital experiences. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks, I specialize in building responsive, interactive, and user-friendly websites. My expertise extends beyond coding—I blend creativity with functionality to deliver aesthetic and intuitive designs that enhance user engagement. Whether it's designing sleek interfaces or developing dynamic web applications, I strive for innovation and perfection in every project."
    },
    skills: {
      title: "My <span>Skills</span>",
      subtitle: "",
      content: "As a dedicated Computer Engineering student, I have honed my skills in web development, UI design, and creative technology. With experience in HTML, CSS, JavaScript, and Python, I build responsive and user-friendly interfaces. My expertise extends to Figma design, where I craft visually appealing layouts. Additionally, my passion for content writing allows me to communicate complex ideas effectively. Through internships and projects, I continuously refine my skills to stay ahead in the ever-evolving tech landscape."
    },
    education: {
      title: "<span>Education</span>",
      subtitle: "",
      content: "I completed my 10th grade from Arwachin Bharti Bhawan Secondary Senior School. Currently, I am pursuing a Diploma in Computer Engineering from Ambedkar DSEU Shakarpur Campus-1, where I am gaining in-depth knowledge of software development, web technologies, and database management. Through hands-on projects, I am refining my skills in UI design, coding, and problem-solving, preparing myself for a dynamic career in the tech industry. I strongly believe in continuous learning and constantly strive to upgrade my skills to stay ahead in the ever-evolving world of technology."
    },
    experience: {
      title: "Work <span>Experience</span>",
      subtitle: "",
      content: "Enthusiastic and creative graphic designer with a solid foundation in frontend development honed through hands-on experience at (Tech Mahindra Foundation) and (Kushal:Aide). I have also completed a UI designer internship at (Kushal:Aide). Proficient in a range of design tools, including Adobe Express, Canva, and Figma, with a proven ability to manage projects from concept to completion. Eager to leverage my design expertise and development skills to create impactful digital solutions for a company."
    },
    contact: {
      title: "Contact <span>Me</span>",
      subtitle: "",
      content: "I’m always open to new opportunities, collaborations, and meaningful conversations. Whether you have a project idea, a potential role, or just want to connect, feel free to reach out. You can contact me via email or through my social media platforms. Let’s create something amazing together! I’d love to connect!"
    }
  };

  let currentSection = "home";
  const dynamicContent = document.getElementById("dynamic-content");
  const navLinks = document.querySelectorAll(".nav-link");
  const sectionOrder = ["home", "services", "skills", "education", "experience", "contact"];

  // Function to update the dynamic text content (leaving static social icons and button intact)
  function updateDynamicContent(sectionKey) {
    const data = sections[sectionKey];
    dynamicContent.innerHTML = `
      <h1>${data.title}</h1>
      ${data.subtitle ? `<h3>${data.subtitle}</h3>` : ""}
      <p>${data.content}</p>
    `;
  }
  
  // Function to update active state on navigation links
  function setActiveNav(sectionKey) {
    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("data-section") === sectionKey);
    });
  }

  // Desktop nav link click handler
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = link.getAttribute("data-section");
      currentSection = target;
      updateDynamicContent(target);
      setActiveNav(target);
    });
  });

  // Mobile arrow navigation
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  prevBtn.addEventListener("click", () => {
    let currentIndex = sectionOrder.indexOf(currentSection);
    currentIndex = (currentIndex - 1 + sectionOrder.length) % sectionOrder.length;
    currentSection = sectionOrder[currentIndex];
    updateDynamicContent(currentSection);
    setActiveNav(currentSection); // Add this line
  });
  
  nextBtn.addEventListener("click", () => {
    let currentIndex = sectionOrder.indexOf(currentSection);
    currentIndex = (currentIndex + 1) % sectionOrder.length;
    currentSection = sectionOrder[currentIndex];
    updateDynamicContent(currentSection);
    setActiveNav(currentSection); // Add this line
  });
  
  updateDynamicContent("home"); // Set default section on page load