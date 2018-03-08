interface RoomMemory {

}

interface FlagMemory {

}

interface SpawnMemory {

}

interface CreepMemory {

}

interface Memory {
  [name: string]: any;
  creeps: {[name: string]: CreepMemory};
  flags: {[name: string]: FlagMemory};
  rooms: {[name: string]: RoomMemory};
  spawns: {[name: string]: SpawnMemory};
}
