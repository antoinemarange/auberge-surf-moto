// Défilement lissé (GSAP ScrollSmoother), sur ordi seulement : au doigt, le défilement natif reste.
// Rien si l'on a demandé moins d'animations.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

const calme = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!calme) {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1.1,
    smoothTouch: false,
  });
  document.documentElement.classList.add('lisse');

  // Les ancres (#spots, #infos…) passent par le smoother, sinon il saute.
  document.addEventListener('click', (e) => {
    const lien = (e.target as Element).closest<HTMLAnchorElement>('a[href*="#"]');
    if (!lien || lien.origin !== location.origin || lien.pathname !== location.pathname) return;
    const cible = lien.hash && document.querySelector(lien.hash);
    if (!cible) return;
    e.preventDefault();
    smoother.scrollTo(cible, true, 'top top');
    history.pushState(null, '', lien.hash);
  });
  if (location.hash) {
    const cible = document.querySelector(location.hash);
    if (cible) addEventListener('load', () => smoother.scrollTo(cible, false, 'top top'));
  }

  // position: sticky ne tient plus dans un contenu transformé : on épingle avec ScrollTrigger.
  gsap.matchMedia().add('(min-width: 820px)', () => {
    document.querySelectorAll<HTMLElement>('[data-colle]').forEach((el) => {
      const parent = el.parentElement!;
      ScrollTrigger.create({
        trigger: el,
        start: 'top 24px',
        end: () => `+=${Math.max(0, parent.offsetHeight - el.offsetHeight)}`,
        pin: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
      });
    });
  });

  // Les images chargées en différé changent la hauteur de la page.
  addEventListener('load', () => ScrollTrigger.refresh());
}
