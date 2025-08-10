class ThemeModel {
  set current(theme: 'dark' | 'light' | null) {
    if (!theme) {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', theme);
    }
  }

  get current() {
    return localStorage.getItem('theme') as 'dark' | 'light' | null;
  }

  get system() {
    const prefersTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light';
    return prefersTheme;
  }
}

export const theme = new ThemeModel();
