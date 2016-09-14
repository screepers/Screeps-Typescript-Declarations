/**
 * Any object with a position in a room. Almost all game objects prototypes
 * are derived from RoomObject.
 */

interface RoomObject {
    prototype: RoomObject;
    /**
     * An object representing the position of this object in the room.
     */
    pos: RoomPosition;
    /**
     * The link to the Room object. May be undefined in case if an object is a
     * flag or a construction site and is placed in a room that is not visible
     * to you.
     */
    room: Room;
}

interface RoomObjectConstructor {
    //No accessible constructor
}

declare const RoomObject: RoomObjectConstructor;
