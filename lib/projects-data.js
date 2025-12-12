// lib/projects-data.js
// Categories shown in the filter bar
export const categories = [
  { key: 'all', label: 'All' },
  { key: 'cs50', label: 'CS50 Track' },
  { key: 'personal', label: 'Personal' },
  { key: 'hardware', label: 'Hardware' },
  { key: 'class', label: 'Class Walkthroughs' }
]

// Projects (placeholders; replace image/demo/repo later)
export const projects = [
  // Featured example
  {
    slug: 'loadshedding-tracker',
    title: 'Loadshedding Tracker',
    category: 'personal',
    summary: 'Track schedules and receive smart notifications.',
    tags: ['Next.js', 'API', 'UX'],
    image: 'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1600&auto=format&fit=crop',
    demoUrl: '#',
    repoUrl: '#',
    featured: true
  },

  // CS50 track
  {
    slug: 'cs50x',
    title: 'CS50x',
    category: 'cs50',
    summary: 'Foundational CS and final project.',
    tags: ['C', 'Algorithms'],
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop'
  },
  {
    slug: 'cs50w',
    title: 'CS50 Web Development',
    category: 'cs50',
    summary: 'Full‑stack with Python, SQL, JS, and auth.',
    tags: ['Python', 'Django', 'SQL'],
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop'
  },
  {
    slug: 'cs50p',
    title: 'CS50 Python',
    category: 'cs50',
    summary: 'Python programming best practices.',
    tags: ['Python'],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop'
  },
  {
    slug: 'cs50ai',
    title: 'CS50 AI',
    category: 'cs50',
    summary: 'Search, optimization, and ML projects.',
    tags: ['Python', 'AI'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop'
  },

  // Personal
  {
    slug: 'pokemon-deck',
    title: 'Pokemon Deck',
    category: 'personal',
    summary: 'Card UI with search and flip animations.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1600&auto=format&fit=crop'
  },

  // Hardware
  {
    slug: 'raspberry-pi-5',
    title: 'Raspberry Pi 5 Lab',
    category: 'hardware',
    summary: 'GPIO, sensors, and experiments on Pi 5.',
    tags: ['Python', 'Linux', 'GPIO'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop'
  },
  {
    slug: 'robotics-lab',
    title: 'Robotics Experiments',
    category: 'hardware',
    summary: 'Motors, sensors, and control.',
    tags: ['Python', 'Robotics'],
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop'
  },

  // Class walkthroughs (a few examples; add more later)
  {
    slug: 'unicollege-demo-2025',
    title: 'UniCollege Demo 2025',
    category: 'class',
    summary: 'Class portfolio demo & showcase.',
    tags: ['Next.js', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop'
  },
  {
    slug: 'infinite-scroll-blog',
    title: 'Infinite Scroll Blog',
    category: 'class',
    summary: 'Posts load continuously as you scroll.',
    tags: ['JavaScript', 'API'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop'
  },
  {
    slug: 'counter-app',
    title: 'Counter App',
    category: 'class',
    summary: 'State and UI basics.',
    tags: ['JavaScript'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop'
  },
  {
    slug: 'modal-menu-slider',
    title: 'Modal • Menu • Slider',
    category: 'class',
    summary: 'Core UI patterns.',
    tags: ['HTML', 'CSS', 'JS'],
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop'
  },
  {
    slug: 'new-year-countdown',
    title: 'New Year Countdown',
    category: 'class',
    summary: 'Live countdown and confetti.',
    tags: ['JavaScript', 'Time'],
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1600&auto=format&fit=crop'
  },
  {
    slug: 'number-guesser',
    title: 'Number Guesser',
    category: 'class',
    summary: 'Binary search strategy.',
    tags: ['JavaScript', 'Logic'],
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop'
  },
  {
    slug: 'relaxer-app',
    title: 'Relaxer App',
    category: 'class',
    summary: 'Breathing animation and timing.',
    tags: ['CSS Animations'],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop'
  },
  {
    slug: 'tasklist',
    title: 'TaskList',
    category: 'class',
    summary: 'Local storage and CRUD.',
    tags: ['JavaScript', 'LocalStorage'],
    image: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1600&auto=format&fit=crop'
  },
  {
    slug: 'taskmanager',
    title: 'TaskManager',
    category: 'class',
    summary: 'Enhanced task manager with filters.',
    tags: ['JavaScript', 'UX'],
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1600&auto=format&fit=crop'
  },
  {
    slug: 'typing-game',
    title: 'Typing Game',
    category: 'class',
    summary: 'Speed and accuracy.',
    tags: ['JavaScript'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop'
  }
]