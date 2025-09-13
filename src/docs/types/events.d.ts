interface SetSubtitleEventDetail {
  subtitle: string | undefined;
}

declare global {
  interface DocumentEventMap {
    setsubtitle: CustomEvent<SetSubtitleEventDetail>;
  }
}

export {};
