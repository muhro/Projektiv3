'use strict';

const yourAudio = document.getElementById('audio');
const ctrl = document.getElementById('audioControl');
const frm = document.querySelector('#mediaform');
const updatefrm = document.querySelector('#updateform');
const list = document.querySelector('#imagelist');
document.getElementById("audio").volume = 0.2;

function audio() {
  const pause = ctrl.innerHTML === 'pause';
  ctrl.innerHTML = pause ? 'play' : 'pause';

  const method = pause ? 'pause' : 'play';
  yourAudio[method]();
  return false;
};
document.getElementById('audioControl').addEventListener('click', audio);

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

  } else {
    mobileFontL();
    console.log('moiikkka2');
    if (document.querySelector('#new')) {
      replaceNew.parentNode.removeChild(replaceNew);
      let replaceContent = document.createElement('li');
      replaceContent.setAttribute('id', 'drop');
      replaceContent.setAttribute('class', 'dropdown');
      replaceContent.innerHTML =
          '<a class="hoverOver" href="portfolio.html">PORTFOLIO</a>\n' +
          '<a class="dropdown-content" href="portfolio.html">MUSIC</a>\n' +
          '<a class="dropdown-content" href="portfolio.html">PHOTOS</a>\n' +
          '<a class="dropdown-content" href="portfolio.html">GENERAL</a>';
      document.getElementById('topnav').appendChild(replaceContent);
    }
  }

  if (width < height && document.querySelector('.dropdown') != null) {
    replace.parentNode.removeChild(replace);

    let replaceContent = document.createElement('li');
    replaceContent.setAttribute('id', 'new');
    replaceContent.innerHTML =
        '<a id="clicker" class="hoverOver" style="cursor: pointer; display: block">PORTFOLIO</a>\n' +
        '<a id="dropdownCont" class="dropdown-content" href="portfolio.html">MUSIC</a>\n' +
        '<a id="dropdownCont" class="dropdown-content" href="portfolio.html">PHOTOS</a>\n' +
        '<a id="dropdownCont" class="dropdown-content" href="portfolio.html">GENERAL</a>';
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
        console.log('inside');
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
    console.log('moiikkka2');
    if (document.querySelector('#new')) {
      replaceNew.parentNode.removeChild(replaceNew);
      let replaceContent = document.createElement('li');
      replaceContent.setAttribute('id', 'drop');
      replaceContent.setAttribute('class', 'dropdown');
      replaceContent.innerHTML =
          '<a class="hoverOver" href="portfolio.html">PORTFOLIO</a>\n' +
          '<a class="dropdown-content" href="portfolio.html">MUSIC</a>\n' +
          '<a class="dropdown-content" href="portfolio.html">PHOTOS</a>\n' +
          '<a class="dropdown-content" href="portfolio.html">GENERAL</a>';
      document.getElementById('topnav').appendChild(replaceContent);
    }
  }

  if (width < height && document.querySelector('.dropdown') != null) {
    replace.parentNode.removeChild(replace);

    let replaceContent = document.createElement('li');
    replaceContent.setAttribute('id', 'new');
    replaceContent.innerHTML =
        '<a id="clicker" class="hoverOver" style="cursor: pointer; display: block">PORTFOLIO</a>\n' +
        '<a id="dropdownCont" class="dropdown-content" href="portfolio.html">MUSIC</a>\n' +
        '<a id="dropdownCont" class="dropdown-content" href="portfolio.html">PHOTOS</a>\n' +
        '<a id="dropdownCont" class="dropdown-content" href="portfolio.html">GENERAL</a>';
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
        console.log('inside');
      } else {
        document.querySelectorAll('#dropdownCont')[0].style.display = 'none';
        document.querySelectorAll('#dropdownCont')[1].style.display = 'none';
        document.querySelectorAll('#dropdownCont')[2].style.display = 'none';
      }
    });
  }
}


const fillUpdate = (image) => {
  console.log(image);
  document.querySelector('#updateform input[name=mID]').value = image.mID;
  document.querySelector('#updateform input[name=category]').value = image.category;
  document.querySelector('#updateform input[name=title]').value = image.title;
  document.querySelector('#updateform input[name=details]').value = image.details;
  document.querySelector('#updateform button').removeAttribute('disabled');
};

const getImages = () => {
  fetch('/images').then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
    // clear list before adding upated data
    list.innerHTML = '';
    json.forEach((image) => {
      const li = document.createElement('li');
      const title = document.createElement('h3');
      title.innerHTML = image.title;
      li.appendChild(title);
      const img = document.createElement('img');
      img.src = 'thumbs/' + image.thumbnail;
      img.addEventListener('click', () => {
        fillUpdate(image);
      });
      li.appendChild(img);
      list.appendChild(li);
    });
  });
};

const sendForm = (evt) => {
  evt.preventDefault();
  const fd = new FormData(frm);
  const settings = {
    method: 'post',
    body: fd,
  };

  fetch('/upload', settings).then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
    // update list
    getImages();
  });
};

const sendUpdate = (evt) => {
  evt.preventDefault();
  // get data from updatefrm and put it to body
  const data = JSON.stringify([
    updatefrm.querySelector('input[name="category"]').value,
    updatefrm.querySelector('input[name="title"]').value,
    updatefrm.querySelector('input[name="details"]').value,
    updatefrm.querySelector('input[name="mID"]').value,
  ]);
  const settings = {
    method: 'PATCH',
    body: data,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  };
  // app.patch('/images'.... needs to be implemented to index.js (remember body-parser)
  fetch('/images', settings).then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
    updatefrm.reset();
    document.querySelector('#updateform button').setAttribute('disabled', 'disabled');
    // update list
    getImages();
  });
};

frm.addEventListener('submit', sendForm);
updatefrm.addEventListener('submit', sendUpdate);

getImages();

