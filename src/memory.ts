// Updated 2016-02-05
interface Memory {
    [name: string]: any;
    creeps: {[name: string]: CreepMemory};
    flags: {[name: string]: FlagMemory};
    rooms: {[name: string]: RoomMemory};
    spawns: {[name: string]: SpawnMemory};
}
interface CreepMemory {
    [name: string]: any;
}
interface FlagMemory {
    [name: string]: any;
}
interface RoomMemory {
    [name: string]: any;
}
interface SpawnMemory {
    [name: string]: any;
}
