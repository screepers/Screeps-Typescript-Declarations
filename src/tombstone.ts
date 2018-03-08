interface Tombstone extends RoomObject {
    
    readonly prototype: Tombstone;

    creep: Creep;
    
    deathTime: number;
    
    id: string;

    store: StoreDefinition;

    ticksToDecay: number;
}

interface TombstoneConstructor extends _Constructor<Tombstone>, _ConstructorById<Tombstone> {
}

declare const Tombstone: TombstoneConstructor;