export interface AdserverTiming {
  stationId?: string;
  tag?: string;
  timing: {
    insertion: string; // pre, mid, post
    mesure?: number;
    unit?: string; //MILLISECOND, SECOND, MINUTE, PERCENT
  };
  zone_alias?: string;
}
