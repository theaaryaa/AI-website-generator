export interface GeneratedSiteResult {
  title: string;
  description: string;
  html: string;
  css: string;
  js: string;
  suggestedPrompts: string[];
}

export function generateSmartFallbackSite(prompt: string, style: string = 'modern'): GeneratedSiteResult {
  const lower = prompt.toLowerCase();

  // Detect niche/archetype
  const isDev = lower.includes('developer') || lower.includes('engineer') || lower.includes('coder') || lower.includes('software') || lower.includes('tech');
  const isPhoto = lower.includes('photo') || lower.includes('camera') || lower.includes('lens');
  const isSaas = lower.includes('saas') || lower.includes('startup') || lower.includes('app') || lower.includes('product') || lower.includes('ai tool');
  const isAgency = lower.includes('agency') || lower.includes('studio') || lower.includes('creative') || lower.includes('marketing');
  const isFood = lower.includes('coffee') || lower.includes('restaurant') || lower.includes('bakery') || lower.includes('cafe');

  let title = "Elena Rostova — Principal Product Designer";
  let profession = "Product Designer & Technologist";
  let heroHeadline = 'Bridging thoughtful aesthetics with <span class="font-serif italic font-normal text-indigo-600 dark:text-indigo-400">computational precision.</span>';
  let bio = "Crafting zero-to-one design systems, generative interfaces, and intelligent spatial software for high-growth product teams.";
  let avatarImg = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80";
  let brandColor = "indigo";

  // Category items
  let filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'cat1', label: 'Design Systems' },
    { id: 'cat2', label: 'AI Interfaces' },
    { id: 'cat3', label: 'Fintech' },
  ];

  let projects = [
    {
      cat: 'cat1',
      tag: 'Design Systems',
      title: 'Spectra Token Architecture',
      desc: 'A unified multi-brand token pipeline deployed across 34 engineering teams, reducing component duplication by 65%.',
      img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      stack: 'Figma Tokens · React · CSS Vars',
    },
    {
      cat: 'cat2',
      tag: 'AI Interfaces',
      title: 'Synapse Canvas Engine',
      desc: 'Node-based visual workflow editor enabling non-technical analysts to chain multimodal reasoning models in real-time.',
      img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      stack: 'WebGL · Canvas · LLM Prompts',
    },
    {
      cat: 'cat3',
      tag: 'Fintech',
      title: 'Apex Global Treasury',
      desc: 'Real-time liquidity monitoring dashboard handling over $4.2B in weekly enterprise foreign exchange volume.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      stack: 'D3.js · Data Viz · Next.js',
    },
  ];

  if (isDev) {
    title = "Alex Mercer — Senior Staff Full-Stack Engineer";
    profession = "Systems Architect & Cloud Specialist";
    brandColor = "emerald";
    heroHeadline = 'Building resilient, high-throughput distributed systems & <span class="font-mono text-emerald-500 font-medium">&lt;cloud-native/&gt;</span> architectures.';
    bio = "Senior Software Engineer with 10+ years scaling microservices, low-latency APIs, and Kubernetes infrastructure serving millions of global requests.";
    avatarImg = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80";
    filterCategories = [
      { id: 'all', label: 'All Repos' },
      { id: 'cat1', label: 'Cloud & Go' },
      { id: 'cat2', label: 'React & Rust' },
      { id: 'cat3', label: 'AI Infra' },
    ];
    projects = [
      {
        cat: 'cat1',
        tag: 'Go · gRPC',
        title: 'KubeMesh Orchestrator',
        desc: 'High-availability service mesh operator cutting microservice network latency by 42% across multi-region clusters.',
        img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
        stack: 'Go · Kubernetes · Prometheus',
      },
      {
        cat: 'cat2',
        tag: 'Rust · WASM',
        title: 'FluxDB In-Memory Engine',
        desc: 'Sub-millisecond columnar data store compiled to WebAssembly for client-side analytical queries.',
        img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
        stack: 'Rust · WASM · TypeScript',
      },
      {
        cat: 'cat3',
        tag: 'Python · PyTorch',
        title: 'NeuralTrace Profiler',
        desc: 'Automated distributed model tracing tool pinpointing memory fragmentation during multi-GPU fine-tuning.',
        img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
        stack: 'Python · CUDA · Docker',
      },
    ];
  } else if (isPhoto) {
    title = "Soren Lindqvist — Visual Storyteller & Photographer";
    profession = "Commercial & Editorial Photographer";
    brandColor = "amber";
    heroHeadline = 'Capturing the sublime quietness of <span class="font-serif italic text-amber-500 font-normal">natural landscapes</span> and human form.';
    bio = "Award-winning editorial photographer published in National Geographic, Vogue Scandinavia, and Architectural Digest.";
    avatarImg = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80";
    filterCategories = [
      { id: 'all', label: 'All Series' },
      { id: 'cat1', label: 'Landscapes' },
      { id: 'cat2', label: 'Portraits' },
      { id: 'cat3', label: 'Architecture' },
    ];
    projects = [
      {
        cat: 'cat1',
        tag: 'Arctic Series',
        title: 'Nordic Solitude',
        desc: 'Documenting sub-zero glaciers and remote archipelago settlements across northern Norway.',
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        stack: 'Medium Format · Hasselblad H6D',
      },
      {
        cat: 'cat2',
        tag: 'Editorial',
        title: 'Portraits of Resilience',
        desc: 'Studio chiaroscuro study exploring artisan craftspeople and traditional watchmakers in Geneva.',
        img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
        stack: 'Broncolor Lighting · 85mm Prime',
      },
      {
        cat: 'cat3',
        tag: 'Modernist',
        title: 'Brutalist Shadows',
        desc: 'Geometric interplay of raw concrete, morning shadows, and urban glass in central Berlin.',
        img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
        stack: 'Leica M11 · Architectural Tilt-Shift',
      },
    ];
  } else if (isSaas || isAgency) {
    title = "Vortex AI — Next-Generation Spatial Analytics";
    profession = "Enterprise Autonomous Platform";
    brandColor = "indigo";
    heroHeadline = 'Accelerate enterprise intelligence with <span class="text-indigo-500 font-semibold">autonomous real-time models.</span>';
    bio = "Eliminate data bottlenecks. Vortex chains predictive neural models with cloud infrastructure for instant business decisioning.";
    avatarImg = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80";
    filterCategories = [
      { id: 'all', label: 'All Solutions' },
      { id: 'cat1', label: 'Predictive Ops' },
      { id: 'cat2', label: 'Visual Inference' },
      { id: 'cat3', label: 'Enterprise Security' },
    ];
    projects = [
      {
        cat: 'cat1',
        tag: 'Supply Chain',
        title: 'Vortex Global Dispatch',
        desc: 'Automated fleet rerouting reacting to multi-factor weather disruptions in sub-second latency.',
        img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
        stack: 'Zero-downtime SLA · SOC2 Type II',
      },
      {
        cat: 'cat2',
        tag: 'Computer Vision',
        title: 'OmniScan Quality AI',
        desc: 'High-speed automated manufacturing defect identification with 99.98% verifiable precision.',
        img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
        stack: 'Edge TPU · On-Premise & Cloud',
      },
      {
        cat: 'cat3',
        tag: 'Cyber Defense',
        title: 'Neural Sentinel',
        desc: 'Zero-trust anomaly mitigation neutralizing credential stuffing and unauthorized lateral movement.',
        img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
        stack: 'Encrypted Enclaves · TLS 1.3',
      },
    ];
  }

  const html = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            serif: ['"Playfair Display"', 'serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
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
        <div class="w-10 h-10 rounded-xl bg-${brandColor}-600 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-${brandColor}-600/30 group-hover:scale-105 transition-transform">
          ✦
        </div>
        <div>
          <div class="font-bold text-base tracking-tight leading-none text-neutral-900 dark:text-white">${title.split('—')[0].trim()}</div>
          <div class="text-xs text-neutral-500 dark:text-neutral-400 font-medium">${profession}</div>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-300">
        <a href="#work" class="hover:text-${brandColor}-600 dark:hover:text-${brandColor}-400 transition-colors">Showcase</a>
        <a href="#about" class="hover:text-${brandColor}-600 dark:hover:text-${brandColor}-400 transition-colors">About</a>
        <a href="#metrics" class="hover:text-${brandColor}-600 dark:hover:text-${brandColor}-400 transition-colors">Impact</a>
        <a href="#contact" class="hover:text-${brandColor}-600 dark:hover:text-${brandColor}-400 transition-colors">Contact</a>
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
          Get in Touch
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
      <a href="#work" class="block text-sm font-medium py-1 text-neutral-700 dark:text-neutral-300">Showcase</a>
      <a href="#about" class="block text-sm font-medium py-1 text-neutral-700 dark:text-neutral-300">About</a>
      <a href="#metrics" class="block text-sm font-medium py-1 text-neutral-700 dark:text-neutral-300">Impact</a>
      <a href="#contact" class="block text-sm font-medium py-1 text-neutral-700 dark:text-neutral-300">Contact</a>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="hero" class="relative pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-${brandColor}-50 border border-${brandColor}-200 text-${brandColor}-700 dark:bg-${brandColor}-950/60 dark:border-${brandColor}-800/80 dark:text-${brandColor}-300">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for Select Engagements & Q3 Advising
          </div>

          <h1 class="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.12]">
            ${heroHeadline}
          </h1>

          <p class="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
            ${bio}
          </p>

          <div class="pt-2 flex flex-wrap items-center gap-4">
            <a href="#work" class="px-6 py-3 rounded-xl bg-${brandColor}-600 hover:bg-${brandColor}-700 text-white font-semibold text-sm shadow-lg shadow-${brandColor}-600/25 transition-all flex items-center gap-2">
              Explore Featured Work
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </a>
            <a href="#contact" class="px-6 py-3 rounded-xl border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 font-semibold text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
              Direct Inquiry
            </a>
          </div>

          <!-- Quick Metrics Bar -->
          <div id="metrics" class="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <div>
              <div class="text-2xl font-extrabold text-neutral-900 dark:text-white">10+</div>
              <div class="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mt-1">Years Experience</div>
            </div>
            <div>
              <div class="text-2xl font-extrabold text-neutral-900 dark:text-white">99.9%</div>
              <div class="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mt-1">Client Satisfaction</div>
            </div>
            <div>
              <div class="text-2xl font-extrabold text-neutral-900 dark:text-white">50+</div>
              <div class="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mt-1">Delivered Builds</div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 relative flex justify-center">
          <div class="relative w-full max-w-sm">
            <div class="absolute -inset-4 bg-gradient-to-tr from-${brandColor}-500/20 to-emerald-500/20 rounded-3xl blur-2xl -z-10"></div>
            <div class="relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl bg-neutral-900">
              <img src="${avatarImg}" alt="${title}" class="w-full h-96 object-cover object-center scale-100 hover:scale-105 transition-transform duration-700">
              <div class="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                <div class="text-sm font-semibold">${title.split('—')[0].trim()}</div>
                <div class="text-xs text-neutral-300">San Francisco & Remote Worldwide</div>
              </div>
            </div>

            <!-- Floating Badge -->
            <div class="absolute -bottom-6 -right-6 glass-card p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-3 animate-float">
              <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <div class="text-xs font-bold text-neutral-900 dark:text-white">Verified Specialist</div>
                <div class="text-[11px] text-neutral-500 dark:text-neutral-400">Architecture & Execution</div>
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
          <span class="text-xs font-bold uppercase tracking-widest text-${brandColor}-600 dark:text-${brandColor}-400">Selected Work</span>
          <h2 class="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">Signature Case Studies</h2>
        </div>

        <!-- Filter tabs -->
        <div class="flex items-center gap-2 p-1.5 rounded-xl bg-neutral-200/80 dark:bg-neutral-800/80 text-xs font-medium" id="filterTabs">
          ${filterCategories
            .map(
              (c, i) =>
                `<button data-filter="${c.id}" class="filter-btn px-3 py-1.5 rounded-lg ${
                  i === 0
                    ? 'bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white shadow-sm font-semibold'
                    : 'text-neutral-600 dark:text-neutral-400'
                } transition-all">${c.label}</button>`
            )
            .join('')}
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projectsGrid">
        ${projects
          .map(
            (p) => `
        <div class="project-card group rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col" data-category="${p.cat}">
          <div class="relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-800">
            <img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <span class="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-neutral-950/80 text-white backdrop-blur-md">
              ${p.tag}
            </span>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-${brandColor}-600 dark:group-hover:text-${brandColor}-400 transition-colors">${p.title}</h3>
              <p class="text-sm text-neutral-600 dark:text-neutral-400 mt-2 line-clamp-2">
                ${p.desc}
              </p>
            </div>
            <div class="pt-6 mt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-semibold text-${brandColor}-600 dark:text-${brandColor}-400">
              <span>${p.stack}</span>
              <span class="group-hover:translate-x-1 transition-transform">Read Study →</span>
            </div>
          </div>
        </div>`
          )
          .join('')}
      </div>
    </div>
  </section>

  <!-- Interactive Contact Section -->
  <section id="contact" class="py-24">
    <div class="max-w-4xl mx-auto px-6">
      <div class="glass-card rounded-3xl p-8 sm:p-12 border shadow-xl">
        <div class="text-center max-w-xl mx-auto mb-10">
          <span class="text-xs font-bold uppercase tracking-widest text-${brandColor}-600 dark:text-${brandColor}-400">Initiate Dialogue</span>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">Let's Build Something Exceptional</h2>
          <p class="text-neutral-600 dark:text-neutral-400 text-sm mt-3">
            Have a project or partnership in mind? Leave your note below and you will receive a response within 24 hours.
          </p>
        </div>

        <form id="contactForm" class="space-y-5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label class="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Your Name</label>
              <input type="text" required placeholder="Jordan Taylor" class="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-${brandColor}-500">
            </div>
            <div>
              <label class="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Email Address</label>
              <input type="email" required placeholder="jordan@company.com" class="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-${brandColor}-500">
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Scope of Engagement</label>
            <select class="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-${brandColor}-500">
              <option>Full Architecture & Implementation (0-to-1)</option>
              <option>System Performance & Design System Audit</option>
              <option>Advisory / Fractional Technical Leadership</option>
              <option>Keynote or Interactive Workshop</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Your Message</label>
            <textarea rows="4" required placeholder="Briefly describe your objectives, timeline, and core goals..." class="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-${brandColor}-500"></textarea>
          </div>

          <button type="submit" id="submitBtn" class="w-full py-3.5 rounded-xl bg-${brandColor}-600 hover:bg-${brandColor}-700 text-white font-semibold text-sm shadow-lg shadow-${brandColor}-600/30 transition-all flex items-center justify-center gap-2">
            <span>Transmit Message</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
          </button>

          <div id="formSuccess" class="hidden p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-center text-sm font-semibold">
            Thank you! Your dispatch has been received. I'll reach out within one business day.
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="border-t border-neutral-200 dark:border-neutral-800 py-12 text-center text-sm text-neutral-500 dark:text-neutral-400">
    <div class="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>© 2026 ${title.split('—')[0].trim()}. Built with semantic HTML5 & Tailwind.</div>
      <div class="flex items-center gap-6 text-neutral-600 dark:text-neutral-300">
        <a href="#" class="hover:text-${brandColor}-600 dark:hover:text-${brandColor}-400 transition-colors">GitHub</a>
        <a href="#" class="hover:text-${brandColor}-600 dark:hover:text-${brandColor}-400 transition-colors">Twitter / X</a>
        <a href="#" class="hover:text-${brandColor}-600 dark:hover:text-${brandColor}-400 transition-colors">LinkedIn</a>
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

  return {
    title,
    description: `Website generated for "${prompt}"`,
    html,
    css: '/* Glassmorphism, floating animation, and dark mode classes */',
    js: '// Theme switcher, mobile drawer navigation, project category filtering, and contact form handling',
    suggestedPrompts: [
      'Add an interactive customer testimonial slider',
      'Change color scheme to warm amber and dark slate',
      'Add a tech stack badge matrix with icons',
      'Add an interactive project lightbox modal',
    ],
  };
}
