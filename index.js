document.addEventListener('DOMContentLoaded', () => {
  
  // Selecteer de elementen
  const body = document.body;
  const tabTrigger = document.querySelector('.tab-trigger');
  const navScrim = document.querySelector('.nav-scrim');
  const navClose = document.querySelector('.nav-close');
  const navLinks = document.querySelectorAll('.roll-call a');

  // Functie om menu te openen
  if (tabTrigger) {
    tabTrigger.addEventListener('click', () => {
      body.classList.add('nav-open');
    });
  }

  // Functie om menu te sluiten
  const closeMenu = () => {
    body.classList.remove('nav-open');
  };

  // Koppel sluit-functie aan de achtergrond en de sluitknop
  if (navScrim) navScrim.addEventListener('click', closeMenu);
  if (navClose) navClose.addEventListener('click', closeMenu);

  // Zorg dat het menu sluit als je op een link klikt
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

});