export const navigate = (to: string) => {
  window.history.pushState(null, '', to);
  document.dispatchEvent(new CustomEvent('routechange'));
};

export const setSubtitle = (subtitle: string | undefined) => {
  const event = new CustomEvent('setsubtitle', { detail: { subtitle } });
  document.dispatchEvent(event);
};
