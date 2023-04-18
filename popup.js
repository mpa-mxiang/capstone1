const data = [{
    name: 'Neha Kapoor',
    title: 'Professor at Melboure Information University',
    description: `Head researcher for QNN, Quantum Neutral Network, an 
    exploration of the relationship between Quantum Computing and Neutral Network.`,
    image: './img/p1.jpeg',
  },
  
  {
    name: 'Grace Vanderbilt',
    title: 'Founder, WinS at Melboure Information University',
    description: `Inspiring young women to have their journey not also
    in science, but also in other STEM field.`,
    image: './img/p2.jpeg',
  },
  
  {
    name: 'Aaliyah Williams',
    title: 'Director, BSS at Melboure Information University',
    description: `Vice president at Melboure Information University, 
    biochemical professor with research field of protein structure.`,
    image: './img/p3.jpeg',
  },
  
  {
    name: 'Nathan Adams',
    title: 'CEO, Human Immnune Porject, Harvard.M.C',
    description: `One of the founder for HIP, which helps people to 
    reduce the chances of getting cancers for people with their 
    exploration on biocomputing.`,
    image: './img/p4.jpeg',
  },
  
  {
    name: 'Jasmine Ng',
    title: 'Director, TrAnsMe in New York',
    description: `PhD at University College London, now work in 
    NASA, founder of TrAnsMe to promote transgender identity for
    Asian.`,
    image: './img/p5.jpeg',
  },
  
  {
    name: 'Jean Fitzgerald',
    title: 'Head Manager, ODiSsey',
    description: `She uses interesting and attractive ways to 
    explore the science world for kids. Let inpirations around 
    children's mind and have motivation to learn more.`,
    image: './img/p6.jpeg',
  },

  ];
  const normalDiv = document.getElementById('div-container');
  for (let j = 0; j < data.length; j += 1) {
    normalDiv.innerHTML += `
    <div id="top-work">
    <div class="img-container">
      <img src="${data[j].image}" alt="Art Selection Project Image" />
      </div>
      <div class="text-container">
          <h1 aria-label="Profesional Art Printing Data"">${data[j].name}</h1>
          <h2 aria-label="A daily selection of privately personalized reads;
          no accounts or sign-ups required. has been the
          industry's standard" class="hover">
          ${data[j].title}
          
          </h2>
          <p>
          ${data[j].description}
          </p>
      </div>
    </div>
        `;
  }