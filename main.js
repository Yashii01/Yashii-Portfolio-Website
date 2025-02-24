// Select all navigation links
const navLinks = document.querySelectorAll('.navlist li a');

// Select the content areas to update dynamically
const introText = document.querySelector('.intro');
const mainHeading = document.querySelector('.content h1');
const detailText = document.querySelector('.detail');

// Define the content for each section
const contentData = {
    home: {
        intro: "Hi! I Am <span>Yashika</span>",
        heading: "Front-end Developer & Graphic designer",
        details: "Welcome to my portfolio I’m driven by a curiosity to learn and grow, constantly exploring new ideas and tools to refine my craft. Turning concepts into visually stunning and functional projects is what excites me the most."
    },
    work: {
        intro: " Work Experience",
        heading: "What I have done?",
        details: "Tech Mahindra Foundation: Successfully completed a Web Development Internship, where I enhanced my technical skills by developing responsive and dynamic websites using modern web technologies. Also, I was a soft skill intern in foundation.                                                           Kushal Aide (K:Aide): Completed multiple internships in diverse roles, including Creative Technologist, Web Developer, and UI Designing. These experiences allowed me to design user interfaces, develop innovative technological solutions, and build responsive web applications, contributing to impactful projects."
    },

    about: {
        intro: "About Me",
        heading: "Who Am I?",
        details: "Hello! I’m Yashika, a final-year Computer Engineering student with a passion for technology and innovation. Currently, I’m dedicated to expanding my knowledge and refining my skills in areas like web development, UI Designing, Graphic designing, and creative problem-solving. I’m enthusiastic about exploring new challenges and opportunities to grow as a professional, while making meaningful contributions to the tech world.."
    },
    project: {
        intro: "Explore My Projects",
        heading: "What I've Built",
        details: "My projects range from dynamic web applications to UI Designs to designing posters showcasing my versatility and technical expertise."
    },
    sample: {
        intro: "My Services",
        heading: "What I Offer",
        details: "I provide front-end development, UI Desisning, Graphic Designing services to help you bring your ideas to life."
    } 
};
function viewResume() {
    window.open('Yashika.pdf');
};
function viewSample() {
    window.open('Samples.pdf');
};
// Add click event listeners to all navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior

        // Remove the active class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));

        // Add the active class to the clicked link
        link.classList.add('active');

        // Get the section from the link text
        const section = link.textContent.toLowerCase();

        // Update the content dynamically
        introText.innerHTML = contentData[section].intro;
        mainHeading.textContent = contentData[section].heading;
        detailText.textContent = contentData[section].details;
    });
});
const toggleTheme = document.querySelector('.theme-toggle');
toggleTheme.addEventListener('click', () => {
    document.documentElement.dataset.theme =
        document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
});
document.querySelectorAll('.navlist a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function viewResume() {
    const resumeURL = './path_to_file/Yashika.pdf'; // Adjust the file path if needed
    fetch(resumeURL, { method: 'HEAD' })
        .then(res => {
            if (res.ok) {
                window.open(resumeURL, '_blank'); // Open in a new tab
            } else {
                alert('Resume not found. Please check the file path.');
            }
        })
        .catch(err => {
            alert('Error fetching resume. Please try again.');
            console.error(err);
        });
}

AOS.init();



