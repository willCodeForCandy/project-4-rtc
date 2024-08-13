export const decorateLinks = () => {
  const links = document.querySelectorAll('li.highlighter');
  const currentHash = window.location.hash || '#aboutMe';

  for (const link of links) {
    link.classList.remove('highlighted');
    if (link.querySelector(`a[href="${currentHash}"]`)) {
      link.classList.add('highlighted');
    }
  }
};
