import * as el from './elements.js'
import { changeBackground } from './change-back.js'

el.navControls.addEventListener('click', (event) => {
  el.router.route()
  
  const links = document.querySelectorAll('#nav-controls a');
  links.forEach(link => {
    link.classList.remove('active');
  });
  
  event.target.classList.add('active');

  changeBackground()
})
