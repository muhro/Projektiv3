'use strict';

const yourAudio = document.querySelector('#audio');
const ctrl = document.getElementById('audioControl');
const lomake = document.querySelector('#lomake');
const lomake2 = document.querySelector('#lomake2');
const lista = document.querySelector('#result');
const lista2 = document.querySelector('#result2');
let musiikki = document.querySelector('#music');
let valokuvat = document.querySelector('#photos');
let geneerinen = document.querySelector('#general');
let sisalto = document.querySelector('#content');

try {
  const musa = document.querySelector('#audioControl');

  musa.volume = 0.2;

  musa.addEventListener('click', audio);
} catch (e) {

}



function audio() {
  const pause = ctrl.innerHTML === 'pause';
  ctrl.innerHTML = pause ? 'play' : 'pause';

  const method = pause ? 'pause' : 'play';
  yourAudio[method]();
  return false;
};

const kuvaprofiiliin = () => {
  fetch('/profiili').then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
    // clear list before adding upated data
    lista2.innerHTML = '';
    json.forEach((profiilikuva) => {
      const li = document.createElement('li');
      const img = document.createElement('img');

      li.classList.add('list');
      img.classList.add('kuva', 'effect1');
      img.src = 'prof/' + profiilikuva.p_mprof;
      img.addEventListener('click', () => {
        fillUpdate(profiilikuva);
      });
      li.appendChild(img);
      lista2.appendChild(li);
    });
  });
};
const getImages = () => {
  fetch('/images').then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
    // clear list before adding upated data
    lista.innerHTML = '';
    json.forEach((image) => {
      const li = document.createElement('li');
      const img = document.createElement('img');
      img.src = 'thumbs/' + image.p_mthumb;
      img.addEventListener('click', () => {
        fillUpdate(image);
      });
      li.appendChild(img);
      lista.appendChild(li);
    });
  });
};
try{
const lahetaLomake = (evt) => {
  evt.preventDefault();
  console.log('apuaaaaaa');
  const fd = new FormData(lomake);
  const asetukset = {
    method: 'post',
    body: fd,
  };

  fetch('/upload', asetukset).then((response) => {
    return response.json();
  }).then((json) => {
    const polku = 'files/';
    lista2.innerHTML = '';
    json.forEach(item => {
      const li = document.createElement('li');
      if (item.p_mimetype.includes('image')) {
        const kuva = document.createElement('img');
        kuva.src = polku + item.p_mfile;
        kuva.setAttribute('class', 'frontkuva');
        li.appendChild(kuva);
      }
      lista2.appendChild(li);
    });
  });
};

lomake.addEventListener('submit', lahetaLomake);}catch (e) {
}





function move() {
  const fragment = document.createDocumentFragment();
  fragment.appendChild(document.getElementById('sivu'));
  document.getElementById('sivuM').appendChild(fragment);
}

function moveBack() {

  const fragment = document.createDocumentFragment();
  fragment.appendChild(document.getElementById('sivu'));
  document.getElementById('alku').appendChild(fragment);
}

function mobileFontS() {

  document.getElementById('topnav').style.fontSize = 'small';
  document.getElementById('ambient').style.fontSize = 'small';
  document.getElementById('ambient').style.cssFloat = 'right';
  document.getElementById('ambient').style.width = '80px';
  document.querySelectorAll('.someClass')[1].style.maxHeight = '16px';
  document.querySelectorAll('.someClass')[0].style.maxHeight = '16px';

  move();

}

function mobileFontL() {
  document.getElementById('topnav').style.fontSize = 'x-large';
  document.getElementById('ambient').style.fontSize = 'x-large';
  document.getElementById('ambient').style.width = '160px';
  document.querySelectorAll('.someClass')[1].style.maxHeight = '32px';
  document.querySelectorAll('.someClass')[0].style.maxHeight = '32px';

  moveBack();

}

function mobileFontS2() {
  document.getElementById('topnav').style.fontSize = 'small';
  document.getElementById('header').style.fontSize = '200%';
  document.getElementById('header').style.marginLeft = '-142px';
  document.getElementById('header').style.marginTop = '-19px';
  document.querySelectorAll('.someClass')[1].style.maxHeight = '16px';
  document.querySelectorAll('.someClass')[0].style.maxHeight = '16px';

}

function mobileFontL2() {
  document.getElementById('topnav').style.fontSize = 'x-large';
  document.getElementById('header').style.fontSize = '400%';
  document.getElementById('header').style.marginLeft = '-285px';
  document.getElementById('header').style.marginTop = '-37px';
  document.querySelectorAll('.someClass')[1].style.maxHeight = '32px';
  document.querySelectorAll('.someClass')[0].style.maxHeight = '32px';

}

function resize() {
  let width = window.outerWidth;
  let height = window.outerHeight;
  let replace = document.querySelector('.dropdown');
  let replaceNew = document.querySelector('#new');






  if (width < height) {
    mobileFontS();
    document.querySelector('.divider').style.display = 'none';

  } else {
    mobileFontL();
    document.querySelector('.divider').style.display = 'block';
    if (document.querySelector('#new')) {
      replaceNew.parentNode.removeChild(replaceNew);
      let replaceContent = document.createElement('li');
      replaceContent.setAttribute('id', 'drop');
      replaceContent.setAttribute('class', 'dropdown');
      replaceContent.innerHTML =
          '<a class="hoverOver" href="portfolio.html">PORTFOLIO</a>\n' +
          '<a class="dropdown-content" href="portfolio.html#music">MUSIC</a>\n' +
          '<a class="dropdown-content" href="portfolio.html#photos">PHOTOS</a>\n' +
          '<a class="dropdown-content" href="portfolio.html#general">GENERAL</a>';
      document.getElementById('topnav').appendChild(replaceContent);
    }
  }

  if (width < height && document.querySelector('.dropdown') != null) {
    replace.parentNode.removeChild(replace);

    let replaceContent = document.createElement('li');
    replaceContent.setAttribute('id', 'new');
    replaceContent.innerHTML =
        '<a id="clicker" class="hoverOver" style="cursor: pointer; display: block">' +
        'PORTFOLIO</a>\n' +
        '<a id="dropdownCont" class="dropdown-content2" href="portfolio.html#music">' +
        'MUSIC</a>\n' +
        '<a id="dropdownCont" class="dropdown-content2" href="portfolio.html#photos">' +
        'PHOTOS</a>\n' +
        '<a id="dropdownCont" class="dropdown-content2" href="portfolio.html#general">' +
        'GENERAL</a>';
    document.getElementById('topnav').appendChild(replaceContent);
    document.getElementById('clicker').addEventListener('click', function() {
      event.preventDefault();
      document.querySelectorAll('#dropdownCont')[0].style.display = 'block';
      document.querySelectorAll('#dropdownCont')[1].style.display = 'block';
      document.querySelectorAll('#dropdownCont')[2].style.display = 'block';
    });
    let specifiedElement = document.getElementById('clicker');
    document.addEventListener('click', function(event) {
      let isClickInside = specifiedElement.contains(event.target);
      if (isClickInside) {
        document.querySelectorAll('#dropdownCont')[0].style.display = 'block';
        document.querySelectorAll('#dropdownCont')[1].style.display = 'block';
        document.querySelectorAll('#dropdownCont')[2].style.display = 'block';
      } else {
        document.querySelectorAll('#dropdownCont')[0].style.display = 'none';
        document.querySelectorAll('#dropdownCont')[1].style.display = 'none';
        document.querySelectorAll('#dropdownCont')[2].style.display = 'none';
      }
    });
  }
}

function resize2() {
  let width = window.outerWidth;
  let height = window.outerHeight;
  let replace = document.querySelector('.dropdown');
  let replaceNew = document.querySelector('#new');

  if (width < height) {
    mobileFontS2();

  } else {
    mobileFontL2();
    if (document.querySelector('#new')) {
      replaceNew.parentNode.removeChild(replaceNew);
      let replaceContent = document.createElement('li');
      replaceContent.setAttribute('id', 'drop');
      replaceContent.setAttribute('class', 'dropdown');
      replaceContent.innerHTML =
          '<a class="hoverOver" href="portfolio.html">PORTFOLIO</a>\n' +
          '<a class="dropdown-content" href="portfolio.html#music">MUSIC</a>\n' +
          '<a class="dropdown-content" href="portfolio.html#photos">PHOTOS</a>\n' +
          '<a class="dropdown-content" href="portfolio.html#general">GENERAL</a>';
      document.getElementById('topnav').appendChild(replaceContent);
    }
  }

  if (width < height && document.querySelector('.dropdown') != null) {
    replace.parentNode.removeChild(replace);

    let replaceContent = document.createElement('li');
    replaceContent.setAttribute('id', 'new');
    replaceContent.innerHTML =
        '<a id="clicker" class="hoverOver" style="cursor: pointer; display: block">PORTFOLIO</a>\n' +
        '<a id="dropdownCont" class="dropdown-content2" href="portfolio.html#music">MUSIC</a>\n' +
        '<a id="dropdownCont" class="dropdown-content2" href="portfolio.html#photos">PHOTOS</a>\n' +
        '<a id="dropdownCont" class="dropdown-content2" href="portfolio.html#general">GENERAL</a>';
    document.getElementById('topnav').appendChild(replaceContent);
    document.getElementById('clicker').addEventListener('click', function() {
      event.preventDefault();
      document.querySelectorAll('#dropdownCont')[0].style.display = 'block';
      document.querySelectorAll('#dropdownCont')[1].style.display = 'block';
      document.querySelectorAll('#dropdownCont')[2].style.display = 'block';
      console.log('portfolio');
    });
    let specifiedElement = document.getElementById('clicker');
    document.addEventListener('click', function(event) {
      let isClickInside = specifiedElement.contains(event.target);
      if (isClickInside) {
        document.querySelectorAll('#dropdownCont')[0].style.display = 'block';
        document.querySelectorAll('#dropdownCont')[1].style.display = 'block';
        document.querySelectorAll('#dropdownCont')[2].style.display = 'block';
      } else {
        document.querySelectorAll('#dropdownCont')[0].style.display = 'none';
        document.querySelectorAll('#dropdownCont')[1].style.display = 'none';
        document.querySelectorAll('#dropdownCont')[2].style.display = 'none';
      }
    });
  }
}
function includes() {
  if (window.location.href.indexOf('music') > -1) {
    musiikki.setAttribute('class', 'show');
    valokuvat.setAttribute('class', 'hidden');
    geneerinen.setAttribute('class', 'hidden');
    sisalto.setAttribute('class', 'hidden');

  } else if (window.location.href.indexOf('photos') > -1) {
    valokuvat.setAttribute('class', 'show');
    musiikki.setAttribute('class', 'hidden');
    geneerinen.setAttribute('class', 'hidden');
    sisalto.setAttribute('class', 'hidden');
  } else if (window.location.href.indexOf('general') > -1) {
    geneerinen.setAttribute('class', 'show');
    valokuvat.setAttribute('class', 'hidden');
    musiikki.setAttribute('class', 'hidden');
    sisalto.setAttribute('class', 'hidden');
  }
}

window.addEventListener('hashchange', includes, false);

getImages();
kuvaprofiiliin();