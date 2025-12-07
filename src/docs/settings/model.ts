export type SettingsScheme = {
  theme: 'light' | 'dark';
  fuildContent: boolean;
  settingsMenuOpen: boolean;
};

export const INITIAL_VALUE: SettingsScheme = {
  fuildContent: false,
  theme: 'light',
  settingsMenuOpen: false,
};

const STORAGE_NAME = 'm3-ui-react_settings';

class SettingsModel {
  constructor() {
    if (!localStorage.getItem(STORAGE_NAME)) {
      localStorage.setItem(STORAGE_NAME, JSON.stringify(INITIAL_VALUE));
    }
  }

  private set data(value: SettingsScheme) {
    localStorage.setItem(STORAGE_NAME, JSON.stringify(value));
  }

  private get data(): SettingsScheme {
    const _data = localStorage.getItem(STORAGE_NAME);
    return _data ? (JSON.parse(_data) as SettingsScheme) : INITIAL_VALUE;
  }

  set theme(value: 'dark' | 'light') {
    const _data = this.data;
    _data.theme = value;
    this.data = _data;
  }

  get theme() {
    return this.data.theme;
  }

  set fluidContent(value: boolean) {
    const _data = this.data;
    _data.fuildContent = value;
    this.data = _data;
  }

  get fluidContent() {
    return this.data.fuildContent;
  }

  set settingsMenuOpen(value: boolean) {
    const _data = this.data;
    _data.settingsMenuOpen = value;
    this.data = _data;
  }

  get settingMenuOpen() {
    return this.data.settingsMenuOpen;
  }
}

export default new SettingsModel();
