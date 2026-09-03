// // Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

const projects = [
  {
    id: 1,
    title: "OPSPILOT – RAG Document Intelligence Platform",
    description:
      "End-to-end RAG document intelligence platform for querying complex operational PDFs with contextual grounding, semantic retrieval, and real-time page-level source citations.",
    techStack: [
      "FastAPI",
      "React",
      "Vite",
      "LangChain",
      "OpenAI Embeddings",
      "ChromaDB",
      "Tailwind CSS",
      "RAG",
    ],
    category: "rag",
    image: "images/opspilot.png",
    liveLink: "https://ops-pilot-frontend.onrender.com/",
    githubLink: "https://github.com/mdumar0001/ops-pilot",
  },

  {
    id: 2,
    title: "Smart Agriculture System",
    description:
      "Machine learning system for crop recommendation and yield prediction using soil and climate parameters.",
    techStack: [
      "Python",
      "Scikit-Learn",
      "XGBoost",
      "Streamlit",
      "Pandas",
      "NumPy",
    ],
    category: "aiml",
    image: "images/smart_agriculture.png",
    liveLink: "https://smart-agriculture-system-he49.onrender.com",
    githubLink: "https://github.com/mdumar0001/Smart-Agriculture-System",
  },

  {
    id: 3,
    title: "AI Code Debugger, Fixer & Translator",
    description:
      "AI-powered developer platform for code generation, bug detection, context-aware fixes, optimization, and cross-language translation.",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "Google Gemini",
      "CodeMirror",
      "MongoDB",
      "JWT",
    ],
    category: "aiml",
    image: "images/ai_code_debugger.png",
    liveLink: "https://code-debugger-fixer-translator-2-clients.onrender.com/",
    githubLink: "https://github.com/mdumar0001/Code-Debugger-Fixer-Translator",
  },

  {
    id: 4,
    title: "Doctor's Appointment System – PRESCRIPTO",
    description:
      "Full-stack appointment management platform for booking, scheduling, payments, and role-based patient, doctor, and admin workflows.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe"],
    category: "mern",
    image: "images/doctors.png",
    liveLink: "https://prescripto-alpha-cyan.vercel.app/",
    githubLink: "https://github.com/mdumar0001/PRESCRIPTO",
  },

  {
    id: 5,
    title: "MERN E-Commerce Platform",
    description:
      "Full-stack e-commerce platform with product catalog, cart, order processing, Stripe payments, inventory management, and role-based dashboards.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Stripe", "JWT"],
    category: "mern",
    image: "images/ecommerce.png",
    liveLink: "https://umar-stores1.vercel.app/",
    githubLink: "https://github.com/mdumar0001/Umar-Stores1",
  },

  {
    id: 6,
    title: "Responsive Burger Website",
    description:
      "Responsive burger website with scroll-triggered animations and a dynamic navigation bar with active section highlighting.",
    techStack: ["HTML", "CSS", "JavaScript", "ScrollReveal"],
    category: "html-css-js",
    image: "images/burger.png",
    liveLink: "https://responsive-burger-website-qbe9.vercel.app",
    githubLink: "https://github.com/mdumar0001/responsive-burger-website",
  },

  {
    id: 7,
    title: "Responsive Chips Ordering Platform",
    description:
      "Responsive chips ordering website using DOM manipulation, CSS media queries, and custom scroll animations.",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: "html-css-js",
    image: "images/preview.png",
    liveLink: "https://responsive-chips-website-livid.vercel.app",
    githubLink: "https://github.com/mdumar0001/Responsive-chips-website",
  },
];

// ========================================
// DOM READY
// ========================================

document.addEventListener("DOMContentLoaded", function () {
  // ========================================
  // AOS ANIMATION
  // ========================================

  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }

  // ========================================
  // LOADER
  // ========================================

  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(function () {
      loader.style.opacity = "0";

      setTimeout(function () {
        loader.style.display = "none";
      }, 500);
    }, 700);
  }

  // ========================================
  // THEME TOGGLE
  // ========================================

  const themeToggle = document.getElementById("themeToggle");

  let isDarkMode = true;

  document.body.setAttribute("data-theme", "dark");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      isDarkMode = !isDarkMode;

      document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");

      themeToggle.innerHTML = isDarkMode
        ? '<i class="fas fa-moon"></i>'
        : '<i class="fas fa-sun"></i>';
    });
  }

  // ========================================
  // HEADER SCROLL
  // ========================================

  const header = document.getElementById("header");

  window.addEventListener("scroll", function () {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 100);
    }
  });

  // ========================================
  // MOBILE MENU
  // ========================================

  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      menuBtn.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menuBtn.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }

  // ========================================
  // SMOOTH SCROLL
  // ========================================

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (!href || href === "#") {
        return;
      }

      const target = document.querySelector(href);

      if (!target) {
        return;
      }

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  // ========================================
  // TYPED TEXT
  // ========================================

  const typedTextSpan = document.querySelector(".typed-text");

  if (typedTextSpan) {
    const textArray = [
      "MERN Stack Developer",
      "AI/ML Enthusiast",
      "RAG / GenAI Developer",
      "Full Stack Developer",
    ];

    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeLoop() {
      const currentText = textArray[textIndex];

      if (!deleting) {
        typedTextSpan.textContent = currentText.substring(0, charIndex);

        charIndex++;
      } else {
        typedTextSpan.textContent = currentText.substring(0, charIndex);

        charIndex--;
      }

      if (!deleting && charIndex > currentText.length) {
        deleting = true;

        setTimeout(typeLoop, 1800);

        return;
      }

      if (deleting && charIndex < 0) {
        deleting = false;

        charIndex = 0;

        textIndex = (textIndex + 1) % textArray.length;
      }

      setTimeout(typeLoop, deleting ? 45 : 90);
    }

    typeLoop();
  }

  // ========================================
  // PROJECTS
  // ========================================

  function loadProjects(filter) {
    if (!filter) {
      filter = "all";
    }

    const projectsGrid = document.getElementById("projectsGrid");

    if (!projectsGrid) {
      console.error("projectsGrid element not found.");

      return;
    }

    let filteredProjects;

    if (filter === "all") {
      filteredProjects = projects;
    } else {
      filteredProjects = projects.filter(function (project) {
        return project.category === filter;
      });
    }

    projectsGrid.innerHTML = "";

    if (filteredProjects.length === 0) {
      projectsGrid.innerHTML = `
        <div class="no-projects">
          <p>No projects found.</p>
        </div>
      `;

      return;
    }

    filteredProjects.forEach(function (project) {
      const projectCard = document.createElement("div");

      projectCard.className = "project-card";

      projectCard.setAttribute("data-aos", "fade-up");

      projectCard.innerHTML = `

        <div class="project-image">

          <img
            src="${project.image}"
            alt="${project.title}"
            loading="lazy"
            onerror="
              this.onerror=null;
              this.src='https://via.placeholder.com/800x500?text=Project';
            "
          >

          <div class="project-overlay">

            <a
              href="${project.liveLink}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live project"
            >
              <i class="fas fa-external-link-alt"></i>
            </a>

            <a
              href="${project.githubLink}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
            >
              <i class="fab fa-github"></i>
            </a>

          </div>

        </div>


        <div class="project-info">

          <h3>
            ${project.title}
          </h3>

          <p>
            ${project.description}
          </p>

          <div class="project-tech">

            ${project.techStack
              .map(function (tech) {
                return `
                  <span class="tech-tag">
                    ${tech}
                  </span>
                `;
              })
              .join("")}

          </div>

        </div>

      `;

      projectsGrid.appendChild(projectCard);
    });

    if (typeof AOS !== "undefined") {
      AOS.refresh();
    }
  }

  // ========================================
  // PROJECT FILTERS
  // ========================================

  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      const filter = button.getAttribute("data-filter") || "all";

      loadProjects(filter);
    });
  });

  // Load projects immediately
  loadProjects("all");

  // ========================================
  // CONTACT FORM
  // ========================================

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name")?.value.trim() || "";

      const email = document.getElementById("email")?.value.trim() || "";

      const subject =
        document.getElementById("subject")?.value.trim() || "Portfolio Contact";

      const message = document.getElementById("message")?.value.trim() || "";

      if (!name || !email || !message) {
        alert("Please fill in all required fields.");

        return;
      }

      const body = `Name: ${name}\n` + `Email: ${email}\n\n` + `${message}`;

      const mailto =
        `mailto:mdumar84002021@gmail.com` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

      window.location.href = mailto;
    });
  }

  // ========================================
  // INTERSECTION OBSERVER
  // ========================================

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    document
      .querySelectorAll(".skill-card, .project-card, .cert-card")
      .forEach(function (element) {
        observer.observe(element);
      });
  }
});
