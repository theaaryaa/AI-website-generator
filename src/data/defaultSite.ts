export const INITIAL_PORTFOLIO_HTML = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Elena Rostova — Principal Product Designer & Technologist</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,400&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            serif: ['"Playfair Display"', 'serif'],
          }
        }
      }
    }
  </script>
  <style>
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
    .animate-float {
      animation: float 5s ease-in-out infinite;
    }
    .glass-card {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(229, 231, 235, 0.8);
    }
    .dark .glass-card {
      background: rgba(24, 24, 27, 0.75);
      border-color: rgba(63, 63, 70, 0.5);
    }
  </style>
</head>
<body class="bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 font-sans transition-colors duration-300 min-h-screen">

  <!-- Sticky Navbar -->
  <header class="sticky top-0 z-50 glass-card transition-all border-b">
    <div class="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
      <a href="#hero" class="flex items-center gap-3 group">
        <div class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-indigo-600/30 group-hover:scale-105 transition-transform">
          ER
        </div>
        <div>
          <div class="font-bold text-base tracking-tight leading-none text-neutral-900 dark:text-white">Elena Rostova</div>
          <div class="text-xs text-neutral-500 dark:text-neutral-400 font-medium">Design Technologist</div>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-300">
        <a href="#work" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Featured Work</a>
        <a href="#about" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Philosophy</a>
        <a href="#experience" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Experience</a>
        <a href="#contact" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a>
      </nav>

      <div class="flex items-center gap-4">
        <!-- Theme Toggle Button -->
        <button id="themeToggle" class="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors" title="Toggle Dark/Light Mode">
          <svg id="sunIcon" class="w-4 h-4 hidden dark:block text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg id="moonIcon" class="w-4 h-4 block dark:hidden text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>

        <a href="#contact" class="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm">
          Let's Talk
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </a>

        <!-- Mobile Menu Button -->
        <button id="mobileMenuBtn" class="md:hidden p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div id="mobileMenu" class="hidden md:hidden px-6 py-4 border-t border-neutral-200 dark:border-neutral-800 space-y-3 bg-white dark:bg-neutral-950">
      <a href="#work" class="block text-sm font-medium py-1 text-neutral-700 dark:text-neutral-300">Featured Work</a>
      <a href="#about" class="block text-sm font-medium py-1 text-neutral-700 dark:text-neutral-300">Philosophy</a>
      <a href="#experience" class="block text-sm font-medium py-1 text-neutral-700 dark:text-neutral-300">Experience</a>
      <a href="#contact" class="block text-sm font-medium py-1 text-neutral-700 dark:text-neutral-300">Contact</a>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="hero" class="relative pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 border border-indigo-200 text-indigo-700 dark:bg-indigo-950/60 dark:border-indigo-800/80 dark:text-indigo-300">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for Q3 Product Strategy & Leadership
          </div>

          <h1 class="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.12]">
            Bridging elegant aesthetics with <span class="font-serif italic font-normal text-indigo-600 dark:text-indigo-400">computational precision.</span>
          </h1>

          <p class="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
            I am a design leader and interface engineer with 9+ years crafting zero-to-one design systems, generative interfaces, and intelligent spatial software for world-class product teams.
          </p>

          <div class="pt-2 flex flex-wrap items-center gap-4">
            <a href="#work" class="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 transition-all flex items-center gap-2">
              View Case Studies
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </a>
            <a href="#contact" class="px-6 py-3 rounded-xl border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 font-semibold text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
              Schedule Intro Call
            </a>
          </div>

          <!-- Quick Metrics Bar -->
          <div class="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <div>
              <div class="text-2xl font-extrabold text-neutral-900 dark:text-white">9+</div>
              <div class="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mt-1">Years Building</div>
            </div>
            <div>
              <div class="text-2xl font-extrabold text-neutral-900 dark:text-white">18M+</div>
              <div class="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mt-1">Active Users Reached</div>
            </div>
            <div>
              <div class="text-2xl font-extrabold text-neutral-900 dark:text-white">4x</div>
              <div class="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mt-1">Design Awards</div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 relative flex justify-center">
          <div class="relative w-full max-w-sm">
            <div class="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-emerald-500/20 rounded-3xl blur-2xl -z-10"></div>
            <div class="relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl bg-neutral-900">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80" alt="Elena Rostova Portrait" class="w-full h-96 object-cover object-center scale-100 hover:scale-105 transition-transform duration-700">
              <div class="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                <div class="text-sm font-semibold">Based in San Francisco, CA</div>
                <div class="text-xs text-neutral-300">Former Staff Designer at Linear & Stripe Labs</div>
              </div>
            </div>

            <!-- Floating Badge -->
            <div class="absolute -bottom-6 -right-6 glass-card p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-3 animate-float">
              <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <div class="text-xs font-bold text-neutral-900 dark:text-white">Design Systems</div>
                <div class="text-[11px] text-neutral-500 dark:text-neutral-400">Tokens, React & Figma</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Work Filter & Projects Grid -->
  <section id="work" class="py-20 bg-neutral-100/70 dark:bg-neutral-900/40 border-y border-neutral-200 dark:border-neutral-800">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span class="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">Portfolio</span>
          <h2 class="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">Selected Systems & Products</h2>
        </div>

        <!-- Filter tabs -->
        <div class="flex items-center gap-2 p-1.5 rounded-xl bg-neutral-200/80 dark:bg-neutral-800/80 text-xs font-medium" id="filterTabs">
          <button data-filter="all" class="filter-btn px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white shadow-sm transition-all font-semibold">All Projects</button>
          <button data-filter="systems" class="filter-btn px-3 py-1.5 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all">Design Systems</button>
          <button data-filter="ai" class="filter-btn px-3 py-1.5 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all">AI Interfaces</button>
          <button data-filter="web" class="filter-btn px-3 py-1.5 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all">Fintech</button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projectsGrid">
        <!-- Project 1 -->
        <div class="project-card group rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col" data-category="systems">
          <div class="relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-800">
            <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80" alt="Spectra Design System" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <span class="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-neutral-950/80 text-white backdrop-blur-md">
              Design Systems
            </span>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Spectra Token Architecture</h3>
              <p class="text-sm text-neutral-600 dark:text-neutral-400 mt-2 line-clamp-2">
                A unified multi-brand token pipeline deployed across 34 engineering teams, reducing component duplication by 65%.
              </p>
            </div>
            <div class="pt-6 mt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              <span>Figma Tokens · React · CSS Vars</span>
              <span class="group-hover:translate-x-1 transition-transform">Read Case Study →</span>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="project-card group rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col" data-category="ai">
          <div class="relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-800">
            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" alt="Synapse Intelligence Studio" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <span class="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-indigo-950/80 text-indigo-200 backdrop-blur-md">
              AI Interfaces
            </span>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Synapse Canvas Engine</h3>
              <p class="text-sm text-neutral-600 dark:text-neutral-400 mt-2 line-clamp-2">
                Node-based visual workflow editor enabling non-technical analysts to chain multimodal reasoning models in real-time.
              </p>
            </div>
            <div class="pt-6 mt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              <span>WebGL · Canvas · LLM Prompts</span>
              <span class="group-hover:translate-x-1 transition-transform">Read Case Study →</span>
            </div>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="project-card group rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col" data-category="web">
          <div class="relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-800">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Apex Capital Vault" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <span class="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-neutral-950/80 text-white backdrop-blur-md">
              Fintech
            </span>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Apex Global Treasury</h3>
              <p class="text-sm text-neutral-600 dark:text-neutral-400 mt-2 line-clamp-2">
                Real-time liquidity monitoring dashboard handling over $4.2B in weekly enterprise foreign exchange volume.
              </p>
            </div>
            <div class="pt-6 mt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              <span>D3.js · Data Viz · Next.js</span>
              <span class="group-hover:translate-x-1 transition-transform">Read Case Study →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Interactive Contact Section -->
  <section id="contact" class="py-24">
    <div class="max-w-4xl mx-auto px-6">
      <div class="glass-card rounded-3xl p-8 sm:p-12 border shadow-xl">
        <div class="text-center max-w-xl mx-auto mb-10">
          <span class="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">Let's Connect</span>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">Initiate a Conversation</h2>
          <p class="text-neutral-600 dark:text-neutral-400 text-sm mt-3">
            Have an ambitious system to architect or a design org to scale? Send a note and I will get back within 24 hours.
          </p>
        </div>

        <form id="contactForm" class="space-y-5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label class="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Your Name</label>
              <input type="text" required placeholder="Marcus Vance" class="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
            </div>
            <div>
              <label class="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Email Address</label>
              <input type="email" required placeholder="marcus@domain.com" class="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Project Type</label>
            <select class="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Full Product Design & Architecture (0 to 1)</option>
              <option>Enterprise Design System Overhaul</option>
              <option>AI UX Exploration & Prototyping</option>
              <option>Design Advisory / Fractional Leadership</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Message</label>
            <textarea rows="4" required placeholder="Tell me about your product vision, timeline, and challenges..." class="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
          </div>

          <button type="submit" id="submitBtn" class="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2">
            <span>Send Message</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
          </button>

          <div id="formSuccess" class="hidden p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-center text-sm font-semibold">
            Thank you! Your message has been received. I'll reach out shortly.
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="border-t border-neutral-200 dark:border-neutral-800 py-12 text-center text-sm text-neutral-500 dark:text-neutral-400">
    <div class="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>© 2026 Elena Rostova. All rights reserved.</div>
      <div class="flex items-center gap-6 text-neutral-600 dark:text-neutral-300">
        <a href="#" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Twitter / X</a>
        <a href="#" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">GitHub</a>
        <a href="#" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">ReadCV</a>
        <a href="#" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">LinkedIn</a>
      </div>
    </div>
  </footer>

  <script>
    // Theme Toggle Functionality
    const themeToggleBtn = document.getElementById('themeToggle');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
      });
    }

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Filter Buttons logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        filterBtns.forEach(b => {
          b.classList.remove('bg-white', 'dark:bg-neutral-950', 'text-neutral-900', 'dark:text-white', 'font-semibold', 'shadow-sm');
          b.classList.add('text-neutral-600', 'dark:text-neutral-400');
        });
        btn.classList.add('bg-white', 'dark:bg-neutral-950', 'text-neutral-900', 'dark:text-white', 'font-semibold', 'shadow-sm');
        btn.classList.remove('text-neutral-600', 'dark:text-neutral-400');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Contact Form handling
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm && formSuccess && submitBtn) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';
        setTimeout(() => {
          submitBtn.classList.add('hidden');
          formSuccess.classList.remove('hidden');
        }, 600);
      });
    }
  </script>
</body>
</html>`;
