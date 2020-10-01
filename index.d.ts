/**
 * an object describing xur's location
 *
 * prefer XurLocationResponse if you are directly typing the API response
 */
export interface XurLocation {
  /**
   * a simple lowercase string, one of the following:
   *
   * edz, titan, nessus, io, tower
   */
  location: string;
  /**
   * a short string describing xur's location, i.e. "Winding Cove, EDZ"
   */
  locationName: string;
  /**
   * a hash corresponding to the DestinyPlaceDefinition for this
   * location
   */
  placeHash: number;
  /**
   * a hash corresponding to the DestinyDestinationDefinition for this
   * location
   */
  destinationHash: number;
  /**
   * an index pointing to the DestinyBubbleDefinition for this location,
   * within DestinyDestinationDefinition.bubbles
   */
  bubbleIndex: number;
  /**
   * the english display name for the DestinyPlaceDefinition, i.e.
   * "European Dead Zone"
   */
  placeName: string;
  /**
   * the english display name for the DestinyDestinationDefinition, i.e.
   * "European Dead Zone"
   */
  destinationName: string;
  /**
   * the english display name for the DestinyBubbleDefinition, i.e.
   * "Winding Cove"
   */
  bubbleName: string;
}

/**
 * this is what the /xur/ API endpoint returns
 *
 * an object describing xur's location, or null if xur is not visiting the specified day
 */
export type XurLocationResponse = XurLocation | null;
