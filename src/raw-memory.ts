/**
 * RawMemory object allows to implement your own memory stringifier instead of built-in serializer based on JSON.stringify.
 */
interface RawMemory {

    /**
     * An object with asynchronous memory segments available on this tick. Each object key is the segment ID with data in string values. 
     * Use RawMemory.setActiveSegments to fetch segments on the next tick. Segments data is saved automatically in the end of the tick. 
     */
    segments: string[];
    /**
     * An object with a memory segment of another player available on this tick. 
     * Use setActiveForeignSegment to fetch segments on the next tick. The object consists of the following properties:
     * @type {ForeignMemorySegment}
     */
    foreignSegment: ForeignMemorySegment;
    /**
     * Get a raw string representation of the Memory object.
     */
    get(): string;
    /**
     * Set new memory value.
     * @param value New memory value as a string.
     */
    set(value: string): void;
    /**
     * Request memory segments using the list of their IDs. Memory segments will become available on the next tick in RawMemory.segments object.
     * @param ids An array of segment IDs. Each ID should be a number from 0 to 99. Maximum 10 segments can be active at the same time. Subsequent calls of setActiveSegments override previous ones.
     */
    setActiveSegments(ids: number[]): void;
    /**
     * Request a memory segment of another user.
     * The segment should be marked by its owner as public using setPublicSegments. 
     * The segment data will become available on the next tick in foreignSegment object.
     * You can only have access to one foreign segment at the same time. 
     * @param {(string | null)} username The name of another user. Pass null to clear the foreign segment.
     * @param {number} [id] The ID of the requested segment from 0 to 99. If undefined, the user's default public segment is requested as set by setDefaultPublicSegment.
     */
    setActiveForeignSegment(username: string | null, id?: number): void;
    /**
     * Set the specified segment as your default public segment. 
     * It will be returned if no id parameter is passed to setActiveForeignSegment by another user. 
     * @param {(number | null)} id The ID of the memory segment from 0 to 99. Pass null to remove your default public segment.
     */
    setDefaultPublicSegment(id: number | null): void;
    /**
     * Set specified segments as public. Other users will be able to request access to them using setActiveForeignSegment. 
     * @param {number[]} ids An array of segment IDs. Each ID should be a number from 0 to 99. Subsequent calls of setPublicSegments override previous ones.
     */
    setPublicSegments(ids: number[]): void;
}

interface ForeignMemorySegment {
    username: string,
    id: number,
    data: string
}