const data = [{
    Name: 'Neha Kapoor',
    title: 'Professor, Computer Science at Melboure Information University',
    description: `Head researcher for QNN, Quantum Neutral Network, an 
    exploration of the relationship between Quantum Computing and Neutral Network.`,
    image: './img/p1.png',
  },
  
  {
    Name: 'Grace Vanderbilt',
    title: 'Founder, WinS at Melboure Information University',
    description: `Inspiring young women to have their journey not also
    in science, but also in other STEM field.`,
    image: './img/p2.png',
  },
  
  {
    title: 'Multi Post Stories',
    technologies: '<li>HTML</li><li>Bootstrap</li><li>Ruby</li>',
    description: `A daily selection of privately personalized reads;
    no accounts or sign-ups required. has been the
    industry's standard.`,
    liveDemoLink: 'https://example.com',
    sourceCodeLink: 'https://github.com/example',
    image: './img/work.png',
  },
  
  {
    title: 'Multi Post Stories',
    technologies: '<li>HTML</li><li>Bootstrap</li><li>Ruby</li>',
    description: `A daily selection of privately personalized reads;
    no accounts or sign-ups required. has been the
    industry's standard.`,
    liveDemoLink: 'https://example.com',
    sourceCodeLink: 'https://github.com/example',
    image: './img/work.png',
  },
  
  {
    title: 'Multi Post Stories',
    technologies: '<li>HTML</li><li>Bootstrap</li><li>Ruby</li>',
    description: `A daily selection of privately personalized reads;
    no accounts or sign-ups required. has been the
    industry's standard.`,
    liveDemoLink: 'https://example.com',
    sourceCodeLink: 'https://github.com/example',
    image: './img/work.png',
  },
  
  {
    title: 'Multi Post Stories',
    technologies: '<li>HTML</li><li>Bootstrap</li><li>Ruby</li>',
    description: `A daily selection of privately personalized reads;
    no accounts or sign-ups required. has been the
    industry's standard.`,
    liveDemoLink: 'https://example.com',
    sourceCodeLink: 'https://github.com/example',
    image: './img/work.png',
  },
  
  {
    title: 'Multi Post Stories',
    technologies: '<li>HTML</li><li>Bootstrap</li><li>Ruby</li>',
    description: `A daily selection of privately personalized reads;
    no accounts or sign-ups required. has been the
    industry's standard.`,
    liveDemoLink: 'https://example.com',
    sourceCodeLink: 'https://github.com/example',
    image: './img/work.png',
  },
  ];
  const normalDiv = document.getElementById('div-container');
  for (let j = 1; j < data.length; j += 1) {
    normalDiv.innerHTML += `
    <div class="normal">
      <img src="${data[j].image}" alt="Art Selection Project Image" />
      <div class="div-text">
          <h1 aria-label="Profesional Art Printing Data" class="hover">${data[j].title}</h1>
          <p aria-label="A daily selection of privately personalized reads;
          no accounts or sign-ups required. has been the
          industry's standard" class="hover">
          ${data[j].description}
          </p>
          <ul>
          ${data[j].technologies}
          </ul>
  
      <button type="button" class="hover-btn popup-trigger" aria-label="press to see the project" id="${data[j].id}">See project</button>
    </div>
    </div>
        `;
  }