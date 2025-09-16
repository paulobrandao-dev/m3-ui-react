export const navigate = (to: string) => {
  window.history.pushState(null, '', to);
  document.dispatchEvent(new CustomEvent('routechange'));
};
