// set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

console.log(currentYear);

////////////////////  /////////////////////////
// make mobile navigation work

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

///////////////////////////////////////////////// smooth acrolling animation

const allLinks = document.querySelectorAll('a:link');
// console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    // console.log(e);
    e.preventDefault();
    const href = link.getAttribute('href');
    console.log(href);

    // scroll back to the top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    // scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // close mobile navigation
    if (link.classList.contains('main-nav-link'))
      headerEl.classList.toggle('nav-open');
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const header = document.querySelector('.header');

const obs = new IntersectionObserver(
  function (entries) {
    console.log(entries);
    const ent = entries[0];
    console.log(ent);
    // console.log(ent);

    if (ent.isIntersecting === false) {
      return header.classList.add('sticky');
    }

    if (ent.isIntersecting === true) {
      return header.classList.remove('sticky');
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(document.querySelector('.section-hero'));

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();
