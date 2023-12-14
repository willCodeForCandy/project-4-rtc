import './mode-toggler.css';
export const toggler = (parentElement) => {
  const lightIcon = '/assets/icons8-sun-100.png';
  const darkIcon = '/assets/icons8-moon-and-stars-100.png';
  const togglerContainer = document.createElement('div');
  togglerContainer.id = 'mode-toggler';

  togglerContainer.innerHTML = `
  <div class="flip-card-inner">
    <div id="mode-light">
      <img src="${lightIcon}" alt="light mode">
    </div>
    <div id="mode-dark">
      <img src="${darkIcon}" alt="dark mode">
    </div>
  </div>
  `;

  parentElement.append(togglerContainer);
  togglerContainer.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
};
