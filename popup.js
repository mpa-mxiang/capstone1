const data = [{
    name: 'Neha Kapoor',
    title: 'Researcher at QNN',
    description: `2022 World Unbelievable Science Innovation
    Award Nominee, 2022 Nopel interdisciplinary Research Award.`,
    image: './img/p1.jpeg',
  },
  
  {
    name: 'Grace Vanderbilt',
    title: 'Founder, WinS at Melboure Information University',
    description: `2022 Most Outstanding Women in STEM Award, researcher
    in psychology.`,
    image: './img/p2.jpeg',
  },
  
  {
    name: 'Aaliyah Williams',
    title: 'Director, BSS at Melboure Information University',
    description: `Biochemical professor at TMI
    with research field of protein structure.`,
    image: './img/p3.jpeg',
  },
  
  {
    name: 'Nathan Adams',
    title: 'CEO, Human Immnune Porject, Harvard.M.C',
    description: `One of the founder for HIP, bitomedical researcher.`,
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
    description: `2022 Most Inspiring People Award, popular children
    author for science reading.`,
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