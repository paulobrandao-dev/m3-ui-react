interface SetSubtitleEventDetail {
  subtitle: string | undefined;
}

interface ToggleSettingsEventDetail {
  open: boolean;
}

declare global {
  interface DocumentEventMap {
    setsubtitle: CustomEvent<SetSubtitleEventDetail>;
    togglesettings: CustomEvent<ToggleSettingsEventDetail>;
  }
}

export {};
