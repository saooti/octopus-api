import { Organisation } from './organisation';
import { Person } from './person';

export interface Playlist {
  imageUrl?: string;
  description: string;
  organisation: Organisation;
  playlistId: number;
  podcasts: Array<number | undefined>;
  score: number;
  title: string;
  publisher?: Person;
}
