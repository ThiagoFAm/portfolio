// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ThiagoFAm', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['ThiagoFAm/Somador-de-2bits-ino'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: { title: 'Thiago Amaral', description: 'Seja bem-vindo! Veja um pouco dos meus projetos. Estou a sua disposição nas redes sociais abaixo!', imageURL: '' },
  social: {
    linkedin: 'thiago-amaral-3b6691272',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'thiagoamaral.nett',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://thiagofam.github.io/portfolio-board',
    phone: '+55 92 99983-8116',
    email: 'thiagofamaral.dev@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C e C++',
    'Python',
    'JavaScript',
    'MySQL',
    'Git',
    'ESP32',
    'Raspberry'
  ],
  experiences: [
    {
      company: 'Instituto de Pesquisas Eldorado',
      position: 'Estágiario',
      from: 'Janeiro 2024',
      to: 'Present',
      companyLink: 'https://www.eldorado.org.br/unidade/manaus-am/',
    },
    //Para adicionar mais experiencias, só repete o bloco de cima e customiza
  ],
  certifications: [
    {
      name: 'Inteligência Articial',
      body: 'CETAM',
      year: 'March 2022',
      link: 'https://drive.google.com/file/d/1e4spoKMYlor6ED0UbtICPK7VDpgNI0Qd/view?usp=sharingm',
    },
    //Para adicionar mais certificações, só repete o bloco de cima e customiza
  ],
  educations: [
    {
      institution: 'Centro Universitário Martha Falcão - Wyden',
      degree: 'tecnólogo',
      from: '2025',
      to: '2027',
    },
   //Para adicionar mais educação, só repete o bloco de cima e customiza
  ],
  //publications: [
    //{
     // title: 'Publication Title',
     // conferenceName: '',
     // journalName: 'Journal Name',
     // authors: 'John Doe, Jane Smith',
     // link: 'https://example.com',
     // description:
     //  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //},
  
 // ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-BF1H3VZ32F', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark'
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
