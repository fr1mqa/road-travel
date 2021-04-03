export interface TimeSetting {
  title: string;
  caption: string;
  mode: Mode;
}

export type Mode = 'time' | 'duration';
