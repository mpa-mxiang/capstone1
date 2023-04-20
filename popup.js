/* Footer */
const appFooter = `

<div id="partners">
<h1>Partners</h1>
<hr />
<ul>
    <li>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" tabindex="20"><img
                src="./img/github.png" alt="github-icon" /></a>
    </li>
    <li>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" tabindex="21"><img
                src="./img/Icon - Linkedin.png" alt="linkedin-icon" /></a>
    </li>
    <li>
        <a href="https://www.angellist.com/" target="_blank" tabindex="22"><img
                src="./img/yeah.png" alt="angellist-icon" /></a>
    </li>
    <li>
        <a href="https://twitter.com/" target="_blank" tabindex="23"><img src="./img/twitter.png"
                alt="twitter-icon" /></a>
    </li>
    <li>
        <a href="https://medium.com/" target="_blank" tabindex="24"><img src="./img/m.png"
                alt="medium-icon" /></a>
    </li>
</ul>
</div>
<div id="infor">
<div id="infor-mobile">
<div id="footer-info">
    <img src="./img/logo3.png" alt="AISRC Logo" />
    <div id="footer-info-text">
        <h1>AISRC</h1>
        <p>Annual International Science Research Conference</p>
    </div>
</div>
    <p>
        © AISRC 2023<br />
        Right Reserved<br />
        Since 1997 <br />
        Contact: aisrc@question.org
    </p>
</div>
</div>
`;
document.getElementById('app-footer').innerHTML = appFooter;

/* Feature Speakers */
const data = [{
  name: 'Neha Kapoor',
  title: 'Researcher at QNN',
  description: '2022 Nopel interdisciplinary Research Award.',
  image: './img/s1.jpg',
},

{
  name: 'Grace Vanderbilt',
  title: 'Founder, WinS at Melboure Information University',
  description: `2022 Most Outstanding Women in STEM Award, researcher
    in psychology.`,
  image: './img/s2.jpg',
},

{
  name: 'Ashley Williams',
  title: 'Director, BSS at Melboure Information University',
  description: `Biochemical professor at TMI
    with research field of protein structure.`,
  image: './img/s3.jpg',
},

{
  name: 'Nathan Adams',
  title: 'CEO, Human Immnune Porject, Harvard.M.C',
  description: 'One of the founder for HIP, bitomedical researcher.',
  image: './img/s4.jpg',
},

{
  name: 'Jasmine Ng',
  title: 'Director, TrAnsMe in New York',
  description: `PhD at University College London, now work in 
    NASA.`,
  image: './img/s5.jpg',
},

{
  name: 'Sean Fitzgerald',
  title: 'Head Manager, ODiSsey',
  description: `2022 Most Inspiring People Award, popular children
    author for science reading.`,
  image: './img/s6.jpg',
},

];
const normalDiv = document.getElementById('div-container');
for (let j = 0; j < data.length; j += 1) {
  normalDiv.innerHTML += `
    <div class="top-work">
    <div class="img-container">
      <img src="${data[j].image}" alt="Art Selection Project Image" />
      </div>
      <div class="text-container">
          <h2 class="top-work-h1" aria-label="Profesional Art Printing Data">${data[j].name}</h2>
          <h3 class="top-work-h2" aria-label="A daily selection of privately personalized reads;
          no accounts or sign-ups required. has been the
          industry's standard" class="hover">
          ${data[j].title}
          
          </h3>
          <hr class="divider" />
          <p>
          ${data[j].description}
          </p>
      </div>
    </div>
        `;
}
