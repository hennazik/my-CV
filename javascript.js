const skillsData = {
  'html-progress': 93,
  'css-progress': 90,
  'js-progress': 86,
  'jquery-progress': 75,
  'git-progress': 70
}

for (var key in skillsData) {
  increaseSkills(key);
}

function increaseSkills(selector) {
  if (checkSelector(selector)) {
    let block = document.querySelector('.' + selector);
    let text = block.querySelector("span");
    let progress = block.querySelector(".skills-progress");
    let number = 0;
    var skillProgress = setInterval(Timer, 50);

    function Timer() {
      text.innerHTML = number++ + '%';
      progress.style.width = number + '%';
      if (number === 50) {
        changeTextColor(text);
      }
      if (number > skillsData[selector]) {
        clearInterval(skillProgress);
      }
    }
  } else {
    console.log(selector + ' - елемент з таким класом в HTML документі не знайдений');
  }


}

function checkSelector(selector) {
  return document.querySelector('.' + selector) ? true : false;
}

function changeTextColor(el) {
  el.style.color = '#fff';
}

document.querySelector('.photoshop').addEventListener('click', event => {
  addActiveClass(event.target.parentNode, '.software-icon');
  addActiveClass(document.querySelector('.ph'), '.skills-description p');
});
document.querySelector('.figma').addEventListener('click', event => {
  addActiveClass(event.target.parentNode, '.software-icon');
  addActiveClass(document.querySelector('.fi'), '.skills-description p');
});
document.querySelector('.tilda').addEventListener('click', event => {
  addActiveClass(event.target.parentNode, '.software-icon');
  addActiveClass(document.querySelector('.ti'), '.skills-description p');
});
document.querySelector('.wix').addEventListener('click', event => {
  addActiveClass(event.target.parentNode, '.software-icon');
  addActiveClass(document.querySelector('.wi'), '.skills-description p');
});
document.querySelector('.wordpress').addEventListener('click', event => {
  addActiveClass(event.target.parentNode, '.software-icon');
  addActiveClass(document.querySelector('.wo'), '.skills-description p');
});

function deleteActiveClass(selector) {
  let elements = document.querySelectorAll(selector);
  elements.forEach((item, i) => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
  });
}

function addActiveClass(el, selector) {
  if (!el.classList.contains('active')) {
    deleteActiveClass(selector);
    el.classList.add("active");
  }
}
