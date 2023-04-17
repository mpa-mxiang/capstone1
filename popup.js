const data = [{
  title: 'Multi Post Stories',
  technologies: '<li>HTML</li><li>Bootstrap</li><li>Ruby</li>',
  description: `A daily selection of privately personalized reads;
  no accounts or sign-ups required. has been the
  industry's standard.`,
  liveDemoLink: 'https://example.com',
  sourceCodeLink: 'https://github.com/example',
  image: './img/top-work.png',
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
const work = document.getElementById('projects');
work.innerHTML += `
<div id="top-work">
<div class="img-container">
  <img src="${data[0].image}" alt="Art Selection Project Image" />
  </div>
  <div class="text-container">
      <h1 aria-label="Profesional Art Printing Data"">${data[0].title}</h1>
      <p aria-label="A daily selection of privately personalized reads;
      no accounts or sign-ups required. has been the
      industry's standard" class="hover">
      ${data[0].description}
      </p>
      <ul>
      ${data[0].technologies}
      </ul>
      <button type="button" class="popup-trigger" aria-label="press to see the project" id="${data[0].id}">See project</button>
  </div>
</div>
    `;
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
const btn = document.querySelectorAll('.popup-trigger');
const modal = document.getElementById('popup-container');
for (let i = 0; i < btn.length; i += 1) {
  btn[i].addEventListener('click', () => {
    modal.innerHTML = `
    <div class="modal-top">

        <span class="close" ><img src="./img/close-icon.png" /></span >
        <h1>${data[i].title}</h1>
        </div>
        <ul>${data[i].technologies}</ul>
        <div class="popup-div">
              <img src="${data[i].image}"></img>
              <div class="modal-bottom">

            <p>${data[i].description}</p>
            <div class="btn-div">
                <button type="button" aria-label="project live demo" tabindex="-13"><a href="${data[i].liveDemoLink}">See live<img src="./img/live-demo.png" alt="live demo icon" /></a></button>
                <button type="button" aria-label="project source code" tabindex="-14"><a href="${data[i].sourceCodeLink}">See source<img src="./img/github-button.png" alt="github icon" /></a></button>
                </div>
                </div>
                </div>
    `;
    const span = document.getElementsByClassName('close')[0];
    modal.style.display = 'flex';
    span.onclick = () => {
      modal.style.display = 'none';
      modal.innerHTML = '';
    };
  });
}
