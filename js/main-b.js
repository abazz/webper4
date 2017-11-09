'use strict';

// Tee funktio 'showImages', joka
// lataa kuvat.json tiedoston, joka sisältää näytettävät kuvat taulukkona

// tee silmukka joka lisää merkkijonoon (string) jokaisesta kuvasta alla olevan HTML:n


// Silmukan jälkeen tulosta HTML-koodi (output) <ul>-elementin sisälle innerHTML:n avulla
/*
const showImages = () => {
  fetch('kuvat.json').then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
    let html = '';
    json.forEach((kuva) => {
      html += `<li>
                  <figure>
                      <a href="img/original/${kuva.mediaUrl}"><img src="img/thumbs/${kuva.mediaThumb}"></a>
                      <figcaption>
                          <h3>${kuva.mediaTitle}</h3>
                      </figcaption>
                  </figure>
              </li>`;
    });
    const ul = document.querySelector('ul');
    ul.innerHTML = html;
  });
};

showImages();
*/
/*
// sama tehtynä funktiolla jossa ei ole kovakoodausta
const loadJSON = (url, func) => {
  fetch(url).then((response) => {
    return response.json();
  }).then((json) => {
    func(json);
  });
};

const templateFunction = (json) => {
  let html = '';
  json.forEach((kuva) => {
    html += `<li>
            <figure>
                <a href="img/original/${kuva.mediaUrl}"><img src="img/thumbs/${kuva.mediaThumb}"></a>
                <figcaption>
                    <h3>${kuva.mediaTitle}</h3>
                </figcaption>
            </figure>
        </li>`;
  });
  const element = document.querySelector('ul');
  element.innerHTML = html;
};

loadJSON('kuvat.json', templateFunction);

document.getElementById("default").addEventListener("click", function(event){
    event.preventDefault();
});*/

const modal = document.querySelector('#modal');
const img = modal.querySelector('img');
const closeBtn = document.querySelector('.closeBtn');
const ul = document.querySelector('ul');

const showImages = () => {
  fetch('kuvat.json').then((response) => {
    return response.json();
  }).then((json) => {
    let html = '';
    json.forEach((kuva) => {
      html += `<li>
                  <figure>
                      <a href="img/original/${kuva.mediaUrl}"><img src="img/thumbs/${kuva.mediaThumb}"></a>
                      <figcaption>
                          <h3>${kuva.mediaTitle}</h3>
                      </figcaption>
                  </figure>
              </li>`;
    });
    
    ul.innerHTML = html;
    init();
  });
};
showImages();


const init = () => {
  const linkit = ul.querySelectorAll('a');
  linkit.forEach((linkki) => {
    linkki.addEventListener('click', (evt) => {
      evt.preventDefault();
    
      img.setAttribute('src', evt.currentTarget.href);
      modal.classList.replace('hidden', 'lightbox');
      modal.style = 'top: '+window.scrollY+'px';
    });
  });
};


closeBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.replace('lightbox', 'hidden');
});
