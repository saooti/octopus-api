import { Person } from "./person";

export interface Organisation{
  imageUrl: string;
  admin?: Person;
  comments?: string;
  attributes?: {[key: string]:string|number|boolean|undefined}|undefined;
  description?: string;
  id: string;
  location?: {
      longitude: number;
      latitude: number;
  };
  monetisable?: string;
  name: string;
  notSeenOnKeycloak?: number;
  score?: number;
  soundcastId?: string;
  privacy?:string;
}