export interface CommentPodcast {
  comId?: number;
  content: string;
  name: string;
  organisationId?: string;
  userId?: string;
  podcastId?: number;
  commentIdReferer?: number;
  timeline?: number;
  status?: string;
  certified?: boolean;
  phase?: string;
  date?: string;
  relatedComments?: number;
  relatedValidComments?: number;
}
