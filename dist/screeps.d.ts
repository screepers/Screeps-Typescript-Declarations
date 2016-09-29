/**
 * This file is Screeps API description file.
 * This might need some updates when Screeps publishes new features or changes it's existing API
 */
declare type FindConst = FindConstExit | FindConstExitAny | FindConstTypeCreep | FindConstTypeSource | FindConstTypeResource | FindConstTypeStructure | FindConstTypeFlag | FindConstTypeConstructionSite | FindConstTypeSpawn | FindConstTypeMineral | FindConstTypeNuke;
declare type FindConstExit = FindConstExitTop | FindConstExitRight | FindConstExitBottom | FindConstExitLeft;
declare type FindConstExitTop = DirConstTop;
declare type FindConstExitRight = DirConstRight;
declare type FindConstExitBottom = DirConstBottom;
declare type FindConstExitLeft = DirConstLeft;
declare type FindConstExitAny = 10;
declare type FindConstTypeCreep = FindConstCreep | FindConstMyCreep | FindConstHostileCreep;
declare type FindConstCreep = 101;
declare type FindConstMyCreep = 102;
declare type FindConstHostileCreep = 103;
declare type FindConstTypeSource = FindConstSourceActive | FindConstSource;
declare type FindConstSourceActive = 104;
declare type FindConstSource = 105;
declare type FindConstTypeResource = FindConstResource;
declare type FindConstResource = 106;
declare type FindConstTypeStructure = FindConstStructure | FindConstMyStructure | FindConstHostileStructure;
declare type FindConstStructure = 107;
declare type FindConstMyStructure = 108;
declare type FindConstHostileStructure = 109;
declare type FindConstTypeFlag = FindConstFlag;
declare type FindConstFlag = 110;
declare type FindConstTypeConstructionSite = FindConstConstructionSite | FindConstMyConstructionSite | FindConstHostileConstructionSite;
declare type FindConstConstructionSite = 111;
declare type FindConstMyConstructionSite = 114;
declare type FindConstHostileConstructionSite = 115;
declare type FindConstTypeSpawn = FindConstMySpawn | FindConstHostileSpawn;
declare type FindConstMySpawn = 112;
declare type FindConstHostileSpawn = 113;
declare type FindConstTypeMineral = FindConstMineral;
declare type FindConstMineral = 116;
declare type FindConstTypeNuke = FindConstNuke;
declare type FindConstNuke = 117;
declare var FIND_EXIT_TOP: FindConstExitTop;
declare var FIND_EXIT_RIGHT: FindConstExitRight;
declare var FIND_EXIT_BOTTOM: FindConstExitBottom;
declare var FIND_EXIT_LEFT: FindConstExitLeft;
declare var FIND_EXIT: FindConstExitAny;
declare var FIND_CREEPS: FindConstCreep;
declare var FIND_MY_CREEPS: FindConstMyCreep;
declare var FIND_HOSTILE_CREEPS: FindConstHostileCreep;
declare var FIND_SOURCES_ACTIVE: FindConstSourceActive;
declare var FIND_SOURCES: FindConstSource;
declare var FIND_DROPPED_ENERGY: FindConstResource;
declare var FIND_DROPPED_RESOURCES: FindConstResource;
declare var FIND_STRUCTURES: FindConstStructure;
declare var FIND_MY_STRUCTURES: FindConstMyStructure;
declare var FIND_HOSTILE_STRUCTURES: FindConstHostileStructure;
declare var FIND_FLAGS: FindConstFlag;
declare var FIND_CONSTRUCTION_SITES: FindConstConstructionSite;
declare var FIND_MY_SPAWNS: FindConstMySpawn;
declare var FIND_HOSTILE_SPAWNS: FindConstHostileSpawn;
declare var FIND_MY_CONSTRUCTION_SITES: FindConstMyConstructionSite;
declare var FIND_HOSTILE_CONSTRUCTION_SITES: FindConstHostileConstructionSite;
declare var FIND_MINERALS: FindConstMineral;
declare var FIND_NUKES: FindConstNuke;
declare type DirConst = DirConstTop | DirConstTopRight | DirConstRight | DirConstBottomRight | DirConstBottom | DirConstBottomLeft | DirConstLeft | DirConstTopLeft;
declare type DirConstTop = 1;
declare type DirConstTopRight = 2;
declare type DirConstRight = 3;
declare type DirConstBottomRight = 4;
declare type DirConstBottom = 5;
declare type DirConstBottomLeft = 6;
declare type DirConstLeft = 7;
declare type DirConstTopLeft = 8;
declare var TOP: DirConstTop;
declare var TOP_RIGHT: DirConstTopRight;
declare var RIGHT: DirConstRight;
declare var BOTTOM_RIGHT: DirConstBottomRight;
declare var BOTTOM: DirConstBottom;
declare var BOTTOM_LEFT: DirConstBottomLeft;
declare var LEFT: DirConstLeft;
declare var TOP_LEFT: DirConstTopLeft;
declare type ReturnConst = ReturnConstOk | ReturnConstErrNotOwner | ReturnConstErrNoPath | ReturnConstErrNameExists | ReturnConstErrBusy | ReturnConstErrNotFound | ReturnConstErrNotEnough | ReturnConstErrInvalidTarget | ReturnConstErrFull | ReturnConstErrNotInRange | ReturnConstErrInvalidArgs | ReturnConstErrTired | ReturnConstErrNoBodypart | ReturnConstErrRCL | ReturnConstErrGCL;
declare type ReturnConstOk = 0;
declare type ReturnConstErrNotOwner = -1;
declare type ReturnConstErrNoPath = -2;
declare type ReturnConstErrNameExists = -3;
declare type ReturnConstErrBusy = -4;
declare type ReturnConstErrNotFound = -5;
declare type ReturnConstErrNotEnough = -6;
declare type ReturnConstErrInvalidTarget = -7;
declare type ReturnConstErrFull = -8;
declare type ReturnConstErrNotInRange = -9;
declare type ReturnConstErrInvalidArgs = -10;
declare type ReturnConstErrTired = -11;
declare type ReturnConstErrNoBodypart = -12;
declare type ReturnConstErrRCL = -14;
declare type ReturnConstErrGCL = -15;
declare var OK: ReturnConstOk;
declare var ERR_NOT_OWNER: ReturnConstErrNotOwner;
declare var ERR_NO_PATH: ReturnConstErrNoPath;
declare var ERR_NAME_EXISTS: ReturnConstErrNameExists;
declare var ERR_BUSY: ReturnConstErrBusy;
declare var ERR_NOT_FOUND: ReturnConstErrNotFound;
declare var ERR_NOT_ENOUGH_RESOURCES: ReturnConstErrNotEnough;
declare var ERR_NOT_ENOUGH_ENERGY: ReturnConstErrNotEnough;
declare var ERR_INVALID_TARGET: ReturnConstErrInvalidTarget;
declare var ERR_FULL: ReturnConstErrFull;
declare var ERR_NOT_IN_RANGE: ReturnConstErrNotInRange;
declare var ERR_INVALID_ARGS: ReturnConstErrInvalidArgs;
declare var ERR_TIRED: ReturnConstErrTired;
declare var ERR_NO_BODYPART: ReturnConstErrNoBodypart;
declare var ERR_NOT_ENOUGH_EXTENSIONS: ReturnConstErrNotEnough;
declare var ERR_RCL_NOT_ENOUGH: ReturnConstErrRCL;
declare var ERR_GCL_NOT_ENOUGH: ReturnConstErrGCL;
declare type ColorConst = ColorConstRed | ColorConstPurple | ColorConstBlue | ColorConstCyan | ColorConstGreen | ColorConstYellow | ColorConstOrange | ColorConstBrown | ColorConstGrey | ColorConstWhite;
declare type ColorConstRed = 1;
declare type ColorConstPurple = 2;
declare type ColorConstBlue = 3;
declare type ColorConstCyan = 4;
declare type ColorConstGreen = 5;
declare type ColorConstYellow = 6;
declare type ColorConstOrange = 7;
declare type ColorConstBrown = 8;
declare type ColorConstGrey = 9;
declare type ColorConstWhite = 10;
declare var COLOR_RED: ColorConstRed;
declare var COLOR_PURPLE: ColorConstPurple;
declare var COLOR_BLUE: ColorConstBlue;
declare var COLOR_CYAN: ColorConstCyan;
declare var COLOR_GREEN: ColorConstGreen;
declare var COLOR_YELLOW: ColorConstYellow;
declare var COLOR_ORANGE: ColorConstOrange;
declare var COLOR_BROWN: ColorConstBrown;
declare var COLOR_GREY: ColorConstGrey;
declare var COLOR_WHITE: ColorConstWhite;
declare var COLORS_ALL: ColorConst[];
declare type LookConst = LookConstCreep | LookConstEnergy | LookConstResource | LookConstSource | LookConstMineral | LookConstStructure | LookConstFlag | LookConstConstructionSite | LookConstNuke | LookConstTerrain;
declare type LookConstCreep = "creep";
declare type LookConstEnergy = "energy";
declare type LookConstResource = "resource";
declare type LookConstSource = "source";
declare type LookConstMineral = "mineral";
declare type LookConstStructure = "structure";
declare type LookConstFlag = "flag";
declare type LookConstConstructionSite = "constructionSite";
declare type LookConstNuke = "nuke";
declare type LookConstTerrain = "terrain";
declare var LOOK_CREEPS: LookConstCreep;
declare var LOOK_ENERGY: LookConstEnergy;
declare var LOOK_RESOURCES: LookConstResource;
declare var LOOK_SOURCES: LookConstSource;
declare var LOOK_MINERALS: LookConstMineral;
declare var LOOK_STRUCTURES: LookConstStructure;
declare var LOOK_FLAGS: LookConstFlag;
declare var LOOK_CONSTRUCTION_SITES: LookConstConstructionSite;
declare var LOOK_NUKES: LookConstNuke;
declare var LOOK_TERRAIN: LookConstTerrain;
declare type BodypartConst = BodypartConstMove | BodypartConstWork | BodypartConstCarry | BodypartConstAttack | BodypartConstRangedAttack | BodypartConstTough | BodypartConstHeal | BodypartConstClaim;
declare type BodypartConstMove = "move";
declare type BodypartConstWork = "work";
declare type BodypartConstCarry = "carry";
declare type BodypartConstAttack = "attack";
declare type BodypartConstRangedAttack = "ranged_attack";
declare type BodypartConstTough = "tough";
declare type BodypartConstHeal = "heal";
declare type BodypartConstClaim = "claim";
declare var MOVE: BodypartConstMove;
declare var WORK: BodypartConstWork;
declare var CARRY: BodypartConstCarry;
declare var ATTACK: BodypartConstAttack;
declare var RANGED_ATTACK: BodypartConstRangedAttack;
declare var TOUGH: BodypartConstTough;
declare var HEAL: BodypartConstHeal;
declare var CLAIM: BodypartConstClaim;
declare var BODYPARTS_ALL: BodypartConst[];
declare type StructureConst = StructureConstSpawn | StructureConstExtension | StructureConstRoad | StructureConstWall | StructureConstRampart | StructureConstKeeperLair | StructureConstPortal | StructureConstController | StructureConstLink | StructureConstStorage | StructureConstTower | StructureConstObserver | StructureConstPowerBank | StructureConstPowerSpawn | StructureConstExtractor | StructureConstLab | StructureConstTerminal | StructureConstContainer | StructureConstNuker;
declare type StructureConstSpawn = "spawn";
declare type StructureConstExtension = "extension";
declare type StructureConstRoad = "road";
declare type StructureConstWall = "constructedWall";
declare type StructureConstRampart = "rampart";
declare type StructureConstKeeperLair = "keeperLair";
declare type StructureConstPortal = "portal";
declare type StructureConstController = "controller";
declare type StructureConstLink = "link";
declare type StructureConstStorage = "storage";
declare type StructureConstTower = "tower";
declare type StructureConstObserver = "observer";
declare type StructureConstPowerBank = "powerBank";
declare type StructureConstPowerSpawn = "powerSpawn";
declare type StructureConstExtractor = "extractor";
declare type StructureConstLab = "lab";
declare type StructureConstTerminal = "terminal";
declare type StructureConstContainer = "container";
declare type StructureConstNuker = "nuker";
declare var STRUCTURE_SPAWN: StructureConstSpawn;
declare var STRUCTURE_EXTENSION: StructureConstExtension;
declare var STRUCTURE_ROAD: StructureConstRoad;
declare var STRUCTURE_WALL: StructureConstWall;
declare var STRUCTURE_RAMPART: StructureConstRampart;
declare var STRUCTURE_KEEPER_LAIR: StructureConstKeeperLair;
declare var STRUCTURE_PORTAL: StructureConstPortal;
declare var STRUCTURE_CONTROLLER: StructureConstController;
declare var STRUCTURE_LINK: StructureConstLink;
declare var STRUCTURE_STORAGE: StructureConstStorage;
declare var STRUCTURE_TOWER: StructureConstTower;
declare var STRUCTURE_OBSERVER: StructureConstObserver;
declare var STRUCTURE_POWER_BANK: StructureConstPowerBank;
declare var STRUCTURE_POWER_SPAWN: StructureConstPowerSpawn;
declare var STRUCTURE_EXTRACTOR: StructureConstExtractor;
declare var STRUCTURE_LAB: StructureConstLab;
declare var STRUCTURE_TERMINAL: StructureConstTerminal;
declare var STRUCTURE_CONTAINER: StructureConstContainer;
declare var STRUCTURE_NUKER: StructureConstNuker;
declare type ObjectConst = StructureConst | "creep" | "wall";
declare type ResourceConst = ResourceConstEnergy | ResourceConstPower | ResourceConstH | ResourceConstO | ResourceConstU | ResourceConstL | ResourceConstK | ResourceConstZ | ResourceConstX | ResourceConstG | ResourceConstOH | ResourceConstZK | ResourceConstUL | ResourceConstUH | ResourceConstUO | ResourceConstKH | ResourceConstKO | ResourceConstLH | ResourceConstLO | ResourceConstZH | ResourceConstZO | ResourceConstGH | ResourceConstGO | ResourceConstUH2O | ResourceConstUHO2 | ResourceConstKH2O | ResourceConstKHO2 | ResourceConstLH2O | ResourceConstLHO2 | ResourceConstZH2O | ResourceConstZHO2 | ResourceConstGH2O | ResourceConstGHO2 | ResourceConstXUH2O | ResourceConstXUHO2 | ResourceConstXKH2O | ResourceConstXKHO2 | ResourceConstXLH2O | ResourceConstXLHO2 | ResourceConstXZH2O | ResourceConstXZHO2 | ResourceConstXGH2O | ResourceConstXGHO2;
declare type ResourceConstEnergy = "energy";
declare type ResourceConstPower = "power";
declare type ResourceConstH = "H";
declare type ResourceConstO = "O";
declare type ResourceConstU = "U";
declare type ResourceConstL = "L";
declare type ResourceConstK = "K";
declare type ResourceConstZ = "Z";
declare type ResourceConstX = "X";
declare type ResourceConstG = "G";
declare type ResourceConstOH = "OH";
declare type ResourceConstZK = "ZK";
declare type ResourceConstUL = "UL";
declare type ResourceConstUH = "UH";
declare type ResourceConstUO = "UO";
declare type ResourceConstKH = "KH";
declare type ResourceConstKO = "KO";
declare type ResourceConstLH = "LH";
declare type ResourceConstLO = "LO";
declare type ResourceConstZH = "ZH";
declare type ResourceConstZO = "ZO";
declare type ResourceConstGH = "GH";
declare type ResourceConstGO = "GO";
declare type ResourceConstUH2O = "UH2O";
declare type ResourceConstUHO2 = "UHO2";
declare type ResourceConstKH2O = "KH2O";
declare type ResourceConstKHO2 = "KHO2";
declare type ResourceConstLH2O = "LH2O";
declare type ResourceConstLHO2 = "LHO2";
declare type ResourceConstZH2O = "ZH2O";
declare type ResourceConstZHO2 = "ZHO2";
declare type ResourceConstGH2O = "GH2O";
declare type ResourceConstGHO2 = "GHO2";
declare type ResourceConstXUH2O = "XUH2O";
declare type ResourceConstXUHO2 = "XUHO2";
declare type ResourceConstXKH2O = "XKH2O";
declare type ResourceConstXKHO2 = "XKHO2";
declare type ResourceConstXLH2O = "XLH2O";
declare type ResourceConstXLHO2 = "XLHO2";
declare type ResourceConstXZH2O = "XZH2O";
declare type ResourceConstXZHO2 = "XZHO2";
declare type ResourceConstXGH2O = "XGH2O";
declare type ResourceConstXGHO2 = "XGHO2";
declare type SubscriptionTokenConst = "token";
declare var RESOURCE_ENERGY: ResourceConstEnergy;
declare var RESOURCE_POWER: ResourceConstPower;
declare var RESOURCE_HYDROGEN: ResourceConstH;
declare var RESOURCE_OXYGEN: ResourceConstO;
declare var RESOURCE_UTRIUM: ResourceConstU;
declare var RESOURCE_LEMERGIUM: ResourceConstL;
declare var RESOURCE_KEANIUM: ResourceConstK;
declare var RESOURCE_ZYNTHIUM: ResourceConstZ;
declare var RESOURCE_CATALYST: ResourceConstX;
declare var RESOURCE_GHODIUM: ResourceConstG;
declare var RESOURCE_HYDROXIDE: ResourceConstOH;
declare var RESOURCE_ZYNTHIUM_KEANITE: ResourceConstZK;
declare var RESOURCE_UTRIUM_LEMERGITE: ResourceConstUL;
declare var RESOURCE_UTRIUM_HYDRIDE: ResourceConstUH;
declare var RESOURCE_UTRIUM_OXIDE: ResourceConstUO;
declare var RESOURCE_KEANIUM_HYDRIDE: ResourceConstKH;
declare var RESOURCE_KEANIUM_OXIDE: ResourceConstKO;
declare var RESOURCE_LEMERGIUM_HYDRIDE: ResourceConstLH;
declare var RESOURCE_LEMERGIUM_OXIDE: ResourceConstLO;
declare var RESOURCE_ZYNTHIUM_HYDRIDE: ResourceConstZH;
declare var RESOURCE_ZYNTHIUM_OXIDE: ResourceConstZO;
declare var RESOURCE_GHODIUM_HYDRIDE: ResourceConstGH;
declare var RESOURCE_GHODIUM_OXIDE: ResourceConstGO;
declare var RESOURCE_UTRIUM_ACID: ResourceConstUH2O;
declare var RESOURCE_UTRIUM_ALKALIDE: ResourceConstUHO2;
declare var RESOURCE_KEANIUM_ACID: ResourceConstKH2O;
declare var RESOURCE_KEANIUM_ALKALIDE: ResourceConstKHO2;
declare var RESOURCE_LEMERGIUM_ACID: ResourceConstLH2O;
declare var RESOURCE_LEMERGIUM_ALKALIDE: ResourceConstLHO2;
declare var RESOURCE_ZYNTHIUM_ACID: ResourceConstZH2O;
declare var RESOURCE_ZYNTHIUM_ALKALIDE: ResourceConstZHO2;
declare var RESOURCE_GHODIUM_ACID: ResourceConstGH2O;
declare var RESOURCE_GHODIUM_ALKALIDE: ResourceConstGHO2;
declare var RESOURCE_CATALYZED_UTRIUM_ACID: ResourceConstXUH2O;
declare var RESOURCE_CATALYZED_UTRIUM_ALKALIDE: ResourceConstXUHO2;
declare var RESOURCE_CATALYZED_KEANIUM_ACID: ResourceConstXKH2O;
declare var RESOURCE_CATALYZED_KEANIUM_ALKALIDE: ResourceConstXKHO2;
declare var RESOURCE_CATALYZED_LEMERGIUM_ACID: ResourceConstXLH2O;
declare var RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE: ResourceConstXLHO2;
declare var RESOURCE_CATALYZED_ZYNTHIUM_ACID: ResourceConstXZH2O;
declare var RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE: ResourceConstXZHO2;
declare var RESOURCE_CATALYZED_GHODIUM_ACID: ResourceConstXGH2O;
declare var RESOURCE_CATALYZED_GHODIUM_ALKALIDE: ResourceConstXGHO2;
declare var RESOURCES_ALL: ResourceConst[];
declare type TerrainConst = "plain" | "swamp" | "wall";
declare var CREEP_SPAWN_TIME: number;
declare var CREEP_LIFE_TIME: number;
declare var CREEP_CLAIM_LIFE_TIME: number;
declare var CREEP_CORPSE_RATE: number;
declare var OBSTACLE_OBJECT_TYPES: ObjectConst[];
declare var ENERGY_REGEN_TIME: number;
declare var ENERGY_DECAY: number;
declare var CREEP_CORPSE_RATE: number;
declare var REPAIR_COST: number;
declare var RAMPART_DECAY_AMOUNT: number;
declare var RAMPART_DECAY_TIME: number;
declare var RAMPART_HITS: number;
declare var RAMPART_HITS_MAX: {
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
};
declare var SPAWN_HITS: number;
declare var SPAWN_ENERGY_START: number;
declare var SPAWN_ENERGY_CAPACITY: number;
declare var SOURCE_ENERGY_CAPACITY: number;
declare var SOURCE_ENERGY_NEUTRAL_CAPACITY: number;
declare var SOURCE_ENERGY_KEEPER_CAPACITY: number;
declare var WALL_HITS: number;
declare var WALL_HITS_MAX: number;
declare var EXTENSION_HITS: number;
declare var EXTENSION_ENERGY_CAPACITY: number;
declare var ROAD_HITS: number;
declare var ROAD_WEAROUT: number;
declare var ROAD_DECAY_AMOUNT: number;
declare var ROAD_DECAY_TIME: number;
declare var LINK_HITS: number;
declare var LINK_HITS_MAX: number;
declare var LINK_CAPACITY: number;
declare var LINK_COOLDOWN: number;
declare var LINK_LOSS_RATION: number;
declare var STORAGE_CAPACITY: number;
declare var STORAGE_HITS: number;
declare var BODYPART_COST: {
    [part: string]: number;
    move: number;
    work: number;
    attack: number;
    carry: number;
    heal: number;
    ranged_attack: number;
    tough: number;
    claim: number;
};
declare var CARRY_CAPACITY: number;
declare var HARVEST_POWER: number;
declare var HARVEST_MINERAL_POWER: number;
declare var REPAIR_POWER: number;
declare var DISMANTLE_POWER: number;
declare var BUILD_POWER: number;
declare var ATTACK_POWER: number;
declare var UPGRADE_CONTROLLER_POWER: number;
declare var RANGED_ATTACK_POWER: number;
declare var HEAL_POWER: number;
declare var RANGED_HEAL_POWER: number;
declare var DISMANTLE_COST: number;
declare var CONSTRUCTION_COST: {
    spawn: number;
    extension: number;
    road: number;
    constructedWall: number;
    rampart: number;
    link: number;
    storage: number;
    tower: number;
    observer: number;
    powerSpawn: number;
    extractor: number;
    lab: number;
    terminal: number;
    container: number;
};
declare var CONSTRUCTION_COST_ROAD_SWAMP_RATIO: number;
declare var SUBSCRIPTION_TOKEN: SubscriptionTokenConst;
declare var CONTROLLER_LEVELS: {
    [level: number]: number;
};
declare var CONTROLLER_STRUCTURES: {
    [structure: string]: {
        [level: number]: number;
    };
};
declare var CONTROLLER_DOWNGRADE: {
    [level: number]: number;
};
declare var CONTROLLER_CLAIM_DOWNGRADE: number;
declare var CONTROLLER_RESERVE: number;
declare var CONTROLLER_RESERVE_MAX: number;
declare var CONTROLLER_MAX_UPGRADE_PER_TICK: number;
declare var CONTROLLER_ATTACK_BLOCKED_UPGRADE: number;
declare var TOWER_HITS: number;
declare var TOWER_CAPACITY: number;
declare var TOWER_ENERGY_COST: number;
declare var TOWER_POWER_ATTACK: number;
declare var TOWER_POWER_HEAL: number;
declare var TOWER_POWER_REPAIR: number;
declare var TOWER_OPTIMAL_RANGE: number;
declare var TOWER_FALLOFF_RANGE: number;
declare var TOWER_FALLOFF: number;
declare var OBSERVER_HITS: number;
declare var OBSERVER_RANGE: number;
declare var POWER_BANK_HITS: number;
declare var POWER_BANK_CAPACITY_MAX: number;
declare var POWER_BANK_CAPACITY_MIN: number;
declare var POWER_BANK_CAPACITY_CRIT: number;
declare var POWER_BANK_DECAY: number;
declare var POWER_BANK_HIT_BACK: number;
declare var POWER_SPAWN_HITS: number;
declare var POWER_SPAWN_ENERGY_CAPACITY: number;
declare var POWER_SPAWN_POWER_CAPACITY: number;
declare var POWER_SPAWN_ENERGY_RATIO: number;
declare var EXTRACTOR_HITS: number;
declare var LAB_HITS: number;
declare var LAB_MINERAL_CAPACITY: number;
declare var LAB_ENERGY_CAPACITY: number;
declare var LAB_BOOST_ENERGY: number;
declare var LAB_BOOST_MINERAL: number;
declare var LAB_COOLDOWN: number;
declare var GCL_POW: number;
declare var GCL_MULTIPLY: number;
declare var GCL_NOVICE: number;
declare type ModeConst = ModeConstSimulation | ModeConstSurvival | ModeConstWorld | ModeConstArena;
declare type ModeConstSimulation = "simulation";
declare type ModeConstSurvival = "survival";
declare type ModeConstWorld = "world";
declare type ModeConstArena = "arena";
declare var MODE_SIMULATION: ModeConstSimulation;
declare var MODE_SURVIVAL: ModeConstSurvival;
declare var MODE_WORLD: ModeConstWorld;
declare var MODE_ARENA: ModeConstArena;
declare var TERRAIN_MASK_WALL: number;
declare var TERRAIN_MASK_SWAMP: number;
declare var TERRAIN_MASK_LAVA: number;
declare var MAX_CONSTRUCTION_SITES: number;
declare var MAX_CREEP_SIZE: number;
declare var MINERAL_REGEN_TIME: number;
declare var MINERAL_MIN_AMOUNT: {
    H: number;
    O: number;
    L: number;
    K: number;
    Z: number;
    U: number;
    X: number;
};
declare var MINERAL_RANDOM_FACTOR: number;
declare var TERMINAL_CAPACITY: number;
declare var TERMINAL_HITS: number;
declare var TERMINAL_SEND_COST: number;
declare var TERMINAL_MIN_SEND: number;
declare var CONTAINER_HITS: number;
declare var CONTAINER_CAPACITY: number;
declare var CONTAINER_DECAY: number;
declare var CONTAINER_DECAY_TIME: number;
declare var CONTAINER_DECAY_TIME_OWNED: number;
declare var NUKER_HITS: number;
declare var NUKER_COOLDOWN: number;
declare var NUKER_ENERGY_CAPACITY: number;
declare var NUKER_GHODIUM_CAPACITY: number;
declare var NUKE_LAND_TIME: number;
declare var NUKE_RANGE: number;
declare var NUKE_DAMAGE: {
    0: number;
    1: number;
    4: number;
};
declare var REACTIONS: {
    [reagent: string]: {
        [reagent: string]: ResourceConst;
    };
};
declare var BOOSTS: {
    [part: string]: {
        [boost: string]: {
            [action: string]: number;
        };
    };
};
declare type OrderConst = OrderConstSell | OrderConstBuy;
declare type OrderConstSell = "sell";
declare type OrderConstBuy = "buy";
declare var ORDER_SELL: OrderConstSell;
declare var ORDER_BUY: OrderConstBuy;
/**
 * A site of a structure which is currently under construction.
 */
interface ConstructionSite extends RoomObject {
    readonly prototype: ConstructionSite;
    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * Whether this is your own construction site.
     */
    my: boolean;
    /**
     * An object with the structure’s owner info
     */
    owner: Owner;
    /**
     * The current construction progress.
     */
    progress: number;
    /**
     * The total construction progress needed for the structure to be built.
     */
    progressTotal: number;
    /**
     * One of the STRUCTURE_* constants.
     */
    structureType: StructureConst;
    /**
     * Remove the construction site.
     * @returns Result Code: OK, ERR_NOT_OWNER
     */
    remove(): ReturnConstOk | ReturnConstErrNotOwner;
}
interface ConstructionSiteConstructor extends _Constructor<ConstructionSite>, _ConstructorById<ConstructionSite> {
}
declare const ConstructionSite: ConstructionSiteConstructor;
declare var Memory: Memory;
declare var Game: Game;
declare var PathFinder: PathFinder;
declare type Controller = StructureController;
declare type Extension = StructureExtension;
declare type KeeperLair = StructureKeeperLair;
declare type Lab = StructureLab;
declare type Link = StructureLink;
declare type Observer = StructureObserver;
declare type PowerBank = StructurePowerBank;
declare type PowerSpawn = StructurePowerSpawn;
declare type Rampart = StructureRampart;
declare type Terminal = StructureTerminal;
declare type Container = StructureContainer;
declare type Tower = StructureTower;
declare type Spawn = StructureSpawn;
declare const Spawn: StructureSpawnConstructor;
interface Storage extends StructureStorage {
}
declare type StandardCreepReturn = ReturnConstOk | ReturnConstErrNotOwner | ReturnConstErrBusy | ReturnConstErrNoBodypart;
declare type TargetCreepReturn = StandardCreepReturn | ReturnConstErrInvalidTarget | ReturnConstErrNotInRange;
/**
 * Creeps are your units. Creeps can move, harvest energy, construct structures, attack another creeps, and perform other actions. Each creep consists of up to 50 body parts with the following possible types:
 */
interface Creep extends RoomObject {
    readonly prototype: Creep;
    /**
     * Room cannot be undefined for a Creep.
     */
    room: Room;
    /**
     * An array describing the creep’s body. Each element contains the following properties:
     * type: string
     * body part constant
     * hits: number
     * The remaining amount of hit points of this body part.
     */
    body: BodypartDefinition[];
    /**
     * An object with the creep's cargo contents:
     * energy: number
     * The current amount of energy the creep is carrying.
     */
    carry: StoreDefinition;
    /**
     * The total amount of resources the creep can carry.
     */
    carryCapacity: number;
    /**
     * The movement fatigue indicator. If it is greater than zero, the creep cannot move.
     */
    fatigue: number;
    /**
     * The current amount of hit points of the creep.
     */
    hits: number;
    /**
     * The maximum amount of hit points of the creep.
     */
    hitsMax: number;
    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * A shorthand to Memory.creeps[creep.name]. You can use it for quick access the creep’s specific memory data object.
     */
    memory: any;
    /**
     * Whether it is your creep or foe.
     */
    my: boolean;
    /**
     * Creep’s name. You can choose the name while creating a new creep, and it cannot be changed later. This name is a hash key to access the creep via the Game.creeps object.
     */
    name: string;
    /**
     * An object with the creep’s owner info
     */
    owner: Owner;
    /**
     * Whether this creep is still being spawned.
     */
    spawning: boolean;
    /**
     * The text message that the creep was saying at the last tick.
     */
    saying: string;
    /**
     * The remaining amount of game ticks after which the creep will die.
     */
    ticksToLive: number;
    /**
     * Attack another creep or structure in a short-ranged attack. Needs the ATTACK body part. If the target is inside a rampart, then the rampart is attacked instead. The target has to be at adjacent square to the creep. If the target is a creep with ATTACK body parts and is not inside a rampart, it will automatically hit back at the attacker.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
     */
    attack(target: Creep | Structure): TargetCreepReturn;
    /**
     * Decreases the controller's downgrade or reservation timer for 1 tick per every 5 CLAIM body parts (so the creep must have at least 5xCLAIM). The controller under attack cannot be upgraded for the next 1,000 ticks. The target has to be at adjacent square to the creep.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
     */
    attackController(target: StructureController): TargetCreepReturn;
    /**
     * Build a structure at the target construction site using carried energy. Needs WORK and CARRY body parts. The target has to be within 3 squares range of the creep.
     * @param target The target object to be attacked.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART, ERR_RCL_NOT_ENOUGH
     */
    build(target: ConstructionSite): TargetCreepReturn | ReturnConstErrNotEnough | ReturnConstErrRCL;
    /**
     * Cancel the order given during the current game tick.
     * @param methodName The name of a creep's method to be cancelled.
     * @returns Result Code: OK, ERR_NOT_FOUND
     */
    cancelOrder(methodName: string): ReturnConstOk | ReturnConstErrNotFound;
    /**
     * Requires the CLAIM body part. If applied to a neutral controller, claims it under your control. If applied to a hostile controller, decreases its downgrade or reservation timer depending on the CLAIM body parts count. The target has to be at adjacent square to the creep.
     * @param target The target controller object.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_FULL, ERR_NOT_IN_RANGE, ERR_NO_BODYPART, ERR_GCL_NOT_ENOUGH
     */
    claimController(target: StructureController): TargetCreepReturn | ReturnConstErrFull | ReturnConstErrGCL;
    /**
     * Dismantles any (even hostile) structure returning 50% of the energy spent on its repair. Requires the WORK body part. If the creep has an empty CARRY body part, the energy is put into it; otherwise it is dropped on the ground. The target has to be at adjacent square to the creep.
     * @param target The target structure.
     */
    dismantle(target: Structure): TargetCreepReturn;
    /**
     * Drop this resource on the ground.
     * @param resourceType One of the RESOURCE_* constants.
     * @param amount The amount of resource units to be dropped. If omitted, all the available carried amount is used.
     */
    drop(resourceType: ResourceConst, amount?: number): ReturnConstOk | ReturnConstErrNotOwner | ReturnConstErrBusy | ReturnConstErrNotEnough;
    /**
     * Get the quantity of live body parts of the given type. Fully damaged parts do not count.
     * @param type A body part type, one of the following body part constants: MOVE, WORK, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH, CLAIM
     */
    getActiveBodyparts(type: BodypartConst): number;
    /**
     * Harvest energy from the source. Needs the WORK body part. If the creep has an empty CARRY body part, the harvested energy is put into it; otherwise it is dropped on the ground. The target has to be at an adjacent square to the creep.
     * @param target The source object to be harvested.
     */
    harvest(target: Source | Mineral): TargetCreepReturn | ReturnConstErrNotFound | ReturnConstErrNotEnough;
    /**
     * Heal self or another creep. It will restore the target creep’s damaged body parts function and increase the hits counter. Needs the HEAL body part. The target has to be at adjacent square to the creep.
     * @param target The target creep object.
     */
    heal(target: Creep): TargetCreepReturn;
    /**
     * Move the creep one square in the specified direction. Needs the MOVE body part.
     * @param direction
     */
    move(direction: DirConst): StandardCreepReturn | ReturnConstErrTired;
    /**
     * Move the creep using the specified predefined path. Needs the MOVE body part.
     * @param path A path value as returned from Room.findPath or RoomPosition.findPathTo methods. Both array form and serialized string form are accepted.
     */
    moveByPath(path: PathStep[] | RoomPosition[] | string): StandardCreepReturn | ReturnConstErrNotFound | ReturnConstErrInvalidArgs | ReturnConstErrTired;
    /**
     * Find the optimal path to the target within the same room and move to it. A shorthand to consequent calls of pos.findPathTo() and move() methods. If the target is in another room, then the corresponding exit will be used as a target. Needs the MOVE body part.
     * @param x X position of the target in the room.
     * @param y Y position of the target in the room.
     * @param opts An object containing pathfinding options flags (see Room.findPath for more info) or one of the following: reusePath, serializeMemory, noPathFinding
     */
    moveTo(x: number, y: number, opts?: MoveToOpts & FindPathOpts): StandardCreepReturn | ReturnConstErrTired | ReturnConstErrInvalidTarget | ReturnConstErrNoPath;
    /**
     * Find the optimal path to the target within the same room and move to it. A shorthand to consequent calls of pos.findPathTo() and move() methods. If the target is in another room, then the corresponding exit will be used as a target. Needs the MOVE body part.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @param opts An object containing pathfinding options flags (see Room.findPath for more info) or one of the following: reusePath, serializeMemory, noPathFinding
     */
    moveTo(target: RoomPosition | {
        pos: RoomPosition;
    }, opts?: MoveToOpts & FindPathOpts): StandardCreepReturn | ReturnConstErrTired | ReturnConstErrInvalidTarget | ReturnConstErrNoPath;
    /**
     * Toggle auto notification when the creep is under attack. The notification will be sent to your account email. Turned on by default.
     * @param enabled Whether to enable notification or disable.
     */
    notifyWhenAttacked(enabled: boolean): ReturnConstOk | ReturnConstErrNotOwner | ReturnConstErrInvalidArgs;
    /**
     * Pick up an item (a dropped piece of energy). Needs the CARRY body part. The target has to be at adjacent square to the creep or at the same square.
     * @param target The target object to be picked up.
     */
    pickup(target: Resource): ReturnConstOk | ReturnConstErrNotOwner | ReturnConstErrBusy | ReturnConstErrInvalidTarget | ReturnConstErrFull | ReturnConstErrNotInRange;
    /**
     * A ranged attack against another creep or structure. Needs the RANGED_ATTACK body part. If the target is inside a rampart, the rampart is attacked instead. The target has to be within 3 squares range of the creep.
     * @param target The target object to be attacked.
     */
    rangedAttack(target: Creep | Structure): TargetCreepReturn;
    /**
     * Heal another creep at a distance. It will restore the target creep’s damaged body parts function and increase the hits counter. Needs the HEAL body part. The target has to be within 3 squares range of the creep.
     * @param target The target creep object.
     */
    rangedHeal(target: Creep): TargetCreepReturn;
    /**
     * A ranged attack against all hostile creeps or structures within 3 squares range. Needs the RANGED_ATTACK body part. The attack power depends on the range to each target. Friendly units are not affected.
     */
    rangedMassAttack(): StandardCreepReturn;
    /**
     * Repair a damaged structure using carried energy. Needs the WORK and CARRY body parts. The target has to be within 3 squares range of the creep.
     * @param target he target structure to be repaired.
     */
    repair(target: Structure): TargetCreepReturn | ReturnConstErrNotEnough;
    /**
     * Temporarily block a neutral controller from claiming by other players. Each tick, this command increases the counter of the period during which the controller is unavailable by 1 tick per each CLAIM body part. The maximum reservation period to maintain is 5,000 ticks. The target has to be at adjacent square to the creep....
     * @param target The target controller object to be reserved.
     * @return Result code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
     */
    reserveController(target: Controller): TargetCreepReturn;
    /**
     * Display a visual speech balloon above the creep with the specified message. The message will disappear after a few seconds. Useful for debugging purposes. Only the creep's owner can see the speech message.
     * @param message The message to be displayed. Maximum length is 10 characters.
     * @param set to 'true' to allow other players to see this message. Default is 'false'.
     */
    say(message: string, toPublic?: boolean): ReturnConstOk | ReturnConstErrNotOwner | ReturnConstErrBusy;
    /**
     * Kill the creep immediately.
     */
    suicide(): ReturnConstOk | ReturnConstErrNotOwner | ReturnConstErrBusy;
    /**
     * Transfer resource from the creep to another object. The target has to be at adjacent square to the creep.
     * @param target The target object.
     * @param resourceType One of the RESOURCE_* constants
     * @param amount The amount of resources to be transferred. If omitted, all the available carried amount is used.
     */
    transfer(target: Creep | Structure, resourceType: ResourceConst, amount?: number): ReturnConstOk | ReturnConstErrNotOwner | ReturnConstErrBusy | ReturnConstErrNotEnough | ReturnConstErrInvalidTarget | ReturnConstErrFull | ReturnConstErrNotInRange | ReturnConstErrInvalidArgs;
    /**
     * Upgrade your controller to the next level using carried energy. Upgrading controllers raises your Global Control Level in parallel. Needs WORK and CARRY body parts. The target has to be at adjacent square to the creep. A fully upgraded level 8 controller can't be upgraded with the power over 15 energy units per tick regardless of creeps power. The cumulative effect of all the creeps performing upgradeController in the current tick is taken into account.
     * @param target The target controller object to be upgraded.
     */
    upgradeController(target: Controller): TargetCreepReturn | ReturnConstErrNotEnough;
    /**
     * Withdraw resources from a structure. The target has to be at adjacent square to the creep. Multiple creeps can withdraw from the same structure in the same tick. Your creeps can withdraw resources from hostile structures as well, in case if there is no hostile rampart on top of it.
     * @param target The target object.
     * @param resourceType The target One of the RESOURCE_* constants..
     * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
     */
    withdraw(target: Structure, resourceType: ResourceConst, amount?: number): ReturnConstOk | ReturnConstErrNotOwner | ReturnConstErrBusy | ReturnConstErrNotEnough | ReturnConstErrInvalidTarget | ReturnConstErrFull | ReturnConstErrNotInRange | ReturnConstErrInvalidArgs;
}
interface CreepConstructor extends _Constructor<Creep>, _ConstructorById<Creep> {
}
declare const Creep: CreepConstructor;
/**
 * A flag. Flags can be used to mark particular spots in a room. Flags are visible to their owners only.
 */
interface Flag extends RoomObject {
    readonly prototype: Flag;
    /**
     * Flag color. One of the following constants: COLOR_WHITE, COLOR_GREY, COLOR_RED, COLOR_PURPLE, COLOR_BLUE, COLOR_CYAN, COLOR_GREEN, COLOR_YELLOW, COLOR_ORANGE, COLOR_BROWN
     */
    color: ColorConst;
    /**
     * A shorthand to Memory.flags[flag.name]. You can use it for quick access the flag's specific memory data object.
     */
    memory: any;
    /**
     * Flag’s name. You can choose the name while creating a new flag, and it cannot be changed later. This name is a hash key to access the spawn via the Game.flags object.
     */
    name: string;
    /**
     * Flag secondary color. One of the COLOR_* constants.
     */
    secondaryColor: ColorConst;
    /**
     * Remove the flag.
     * @returns Result Code: OK
     */
    remove(): ReturnConstOk;
    /**
     * Set new color of the flag.
     * @param color One of the following constants: COLOR_WHITE, COLOR_GREY, COLOR_RED, COLOR_PURPLE, COLOR_BLUE, COLOR_CYAN, COLOR_GREEN, COLOR_YELLOW, COLOR_ORANGE, COLOR_BROWN
     * @parma secondaryColor Secondary color of the flag. One of the COLOR_* constants.
     * @returns Result Code: OK, ERR_INVALID_ARGS
     */
    setColor(color: ColorConst, secondaryColor?: ColorConst): ReturnConstOk | ReturnConstErrInvalidArgs;
    /**
     * Set new position of the flag.
     * @param x The X position in the room.
     * @param y The Y position in the room.
     * @returns Result Code: OK, ERR_INVALID_TARGET
     */
    setPosition(x: number, y: number): ReturnConstOk | ReturnConstErrInvalidTarget;
    /**
     * Set new position of the flag.
     * @param pos Can be a RoomPosition object or any object containing RoomPosition.
     * @returns Result Code: OK, ERR_INVALID_TARGET
     */
    setPosition(pos: RoomPosition | {
        pos: RoomPosition;
    }): ReturnConstOk | ReturnConstErrInvalidTarget;
}
interface FlagConstructor extends _Constructor<Flag> {
    new (name: string, color: ColorConst, secondaryColor: ColorConst, roomName: string, x: number, y: number): Flag;
    (name: string, color: ColorConst, secondaryColor: ColorConst, roomName: string, x: number, y: number): Flag;
}
declare const Flag: FlagConstructor;
/**
 * The main global game object containing all the gameplay information.
 */
interface Game {
    /**
     * An object containing information about your CPU usage with the following properties:
     */
    cpu: CPU;
    /**
     * A hash containing all your creeps with creep names as hash keys.
     */
    creeps: {
        [creepName: string]: Creep;
    };
    /**
     * A hash containing all your flags with flag names as hash keys.
     */
    flags: {
        [flagName: string]: Flag;
    };
    /**
     * Your Global Control Level, an object with the following properties :
     */
    gcl: GlobalControlLevel;
    /**
     * A global object representing world GameMap.
     */
    map: GameMap;
    /**
     * A global object representing the in-game market.
     */
    market: Market;
    /**
     * A hash containing all the rooms available to you with room names as hash keys.
     */
    rooms: {
        [roomName: string]: Room;
    };
    /**
     * A hash containing all your spawns with spawn names as hash keys.
     */
    spawns: {
        [spawnName: string]: Spawn;
    };
    /**
     * A hash containing all your structures with structure id as hash keys.
     */
    structures: {
        [structureId: string]: Structure;
    };
    /**
     * A hash containing all your construction sites with their id as hash keys.
     */
    constructionSites: {
        [constructionSiteId: string]: ConstructionSite;
    };
    /**
     * System game tick counter. It is automatically incremented on every tick.
     */
    time: number;
    /**
     * Get an object with the specified unique ID. It may be a game object of any type. Only objects from the rooms which are visible to you can be accessed.
     * @param id The unique identificator.
     * @returns an object instance or null if it cannot be found.
     */
    getObjectById<T>(id: string): T | null;
    /**
     * Send a custom message at your profile email. This way, you can set up notifications to yourself on any occasion within the game. You can schedule up to 20 notifications during one game tick. Not available in the Simulation Room.
     * @param message Custom text which will be sent in the message. Maximum length is 1000 characters.
     * @param groupInterval If set to 0 (default), the notification will be scheduled immediately. Otherwise, it will be grouped with other notifications and mailed out later using the specified time in minutes.
     */
    notify(message: string, groupInterval?: number): void;
}
interface GlobalControlLevel {
    level: number;
    progress: number;
    progressTotal: number;
}
interface CPU {
    limit: number;
    tickLimit: number;
    bucket: number;
    /**
     * Get amount of CPU time used from the beginning of the current game tick. Always returns 0 in the Simulation mode.
     */
    getUsed(): number;
}
/**
 * An array describing the creep’s body. Each element contains the following properties:
 */
interface BodypartDefinition {
    /**
     * If the body part is boosted, this property specifies the mineral type which is used for boosting. One of the RESOURCE_* constants.
     */
    boost: ResourceConst;
    /**
     * One of the body part types constants.
     */
    type: BodypartConst;
    /**
     * The remaining amount of hit points of this body part.
     */
    hits: number;
}
interface Owner {
    username: string;
}
interface ReservationDefinition {
    username: string;
    ticksToEnd: number;
}
interface StoreDefinition {
    [resource: string]: number | undefined;
    energy: number;
    power?: number;
}
interface LookAtResultWithPos {
    x: number;
    y: number;
    type: LookConst;
    constructionSite?: ConstructionSite;
    creep?: Creep;
    terrain?: TerrainConst;
    structure?: Structure;
    flag?: Flag;
    energy?: Resource;
    exit?: any;
    source?: Source;
    mineral?: Mineral;
    resource?: Resource;
    [key: string]: any;
}
interface LookAtResult {
    type: string;
    constructionSite?: ConstructionSite;
    creep?: Creep;
    energy?: Resource;
    exit?: any;
    flag?: Flag;
    source?: Source;
    structure?: Structure;
    terrain?: TerrainConst;
    mineral?: Mineral;
    resource?: Resource;
    [key: string]: any;
}
interface LookAtResultMatrix {
    [coord: number]: LookAtResultMatrix | LookAtResult[];
}
interface FindPathOpts {
    /**
     * Treat squares with creeps as walkable. Can be useful with too many moving creeps around or in some other cases. The default
     * value is false.
     */
    ignoreCreeps?: boolean;
    /**
     * Treat squares with destructible structures (constructed walls, ramparts, spawns, extensions) as walkable. Use this flag when
     * you need to move through a territory blocked by hostile structures. If a creep with an ATTACK body part steps on such a square,
     * it automatically attacks the structure. The default value is false.
     */
    ignoreDestructibleStructures?: boolean;
    /**
     * Ignore road structures. Enabling this option can speed up the search. The default value is false. This is only used when the
     * new PathFinder is enabled.
     */
    ignoreRoads?: boolean;
    /**
     * You can use this callback to modify a CostMatrix for any room during the search. The callback accepts two arguments, roomName
     * and costMatrix. Use the costMatrix instance to make changes to the positions costs. If you return a new matrix from this callback,
     * it will be used instead of the built-in cached one. This option is only used when the new PathFinder is enabled.
     *
     * @param roomName The name of the room.
     * @param costMatrix The current CostMatrix
     * @returns The new CostMatrix to use
     */
    costCallback?(roomName: string, costMatrix: CostMatrix): boolean | CostMatrix;
    /**
     * An array of the room's objects or RoomPosition objects which should be treated as walkable tiles during the search. This option
     * cannot be used when the new PathFinder is enabled (use costCallback option instead).
     */
    ignore?: any[] | RoomPosition[];
    /**
     * An array of the room's objects or RoomPosition objects which should be treated as obstacles during the search. This option cannot
     * be used when the new PathFinder is enabled (use costCallback option instead).
     */
    avoid?: any[] | RoomPosition[];
    /**
     * The maximum limit of possible pathfinding operations. You can limit CPU time used for the search based on ratio 1 op ~ 0.001 CPU.
     * The default value is 2000.
     */
    maxOps?: number;
    /**
     * Weight to apply to the heuristic in the A* formula F = G + weight * H. Use this option only if you understand the underlying
     * A* algorithm mechanics! The default value is 1.2.
     */
    heuristicWeight?: number;
    /**
     * If true, the result path will be serialized using Room.serializePath. The default is false.
     */
    serialize?: boolean;
    /**
     * The maximum allowed rooms to search. The default (and maximum) is 16. This is only used when the new PathFinder is enabled.
     */
    maxRooms?: number;
}
interface MoveToOpts {
    /**
     * This option enables reusing the path found along multiple game ticks. It allows to save CPU time, but can result in a slightly
     * slower creep reaction behavior. The path is stored into the creep's memory to the _move property. The reusePath value defines
     * the amount of ticks which the path should be reused for. The default value is 5. Increase the amount to save more CPU, decrease
     * to make the movement more consistent. Set to 0 if you want to disable path reusing.
     */
    reusePath?: number;
    /**
     * If reusePath is enabled and this option is set to true, the path will be stored in memory in the short serialized form using
     * Room.serializePath. The default value is true.
     */
    serializeMemory?: boolean;
    /**
     * If this option is set to true, moveTo method will return ERR_NOT_FOUND if there is no memorized path to reuse. This can
     * significantly save CPU time in some cases. The default value is false.
     */
    noPathFinding?: boolean;
}
interface FindRouteOpts {
    /**
     * This callback accepts two arguments: function(roomName, fromRoomName). It can be used to calculate the cost of entering that
     * room. You can use this to do things like prioritize your own rooms, or avoid some rooms. You can return a floating point cost
     * or Infinity to block the room.
     */
    routeCallback?(roomName: string, fromRoomName: string): number;
}
interface RouteStep {
    exit: FindConstExit;
    room: string;
}
interface PathStep {
    x: number;
    dx: number;
    y: number;
    dy: number;
    direction: number;
}
declare type PathFinderGoal = RoomPosition | PathFinderGoalObject;
interface PathFinderGoalObject {
    pos: RoomPosition;
    range?: number;
}
/**
 * An object with survival game info
 */
interface SurvivalGameInfo {
    /**
     * Current score.
     */
    score: number;
    /**
     * Time to the next wave of invaders.
     */
    timeToWave: number;
    /**
     * The number of the next wave.
     */
    wave: number;
}
interface _Constructor<T> {
    readonly prototype: T;
}
interface _ConstructorById<T> extends _Constructor<T> {
    new (id: string): T;
    (id: string): T;
}
declare type PathfindingAlgorithm = "astar" | "dijkstra";
/**
 * A global object representing world map. Use it to navigate between rooms. The object is accessible via Game.map property.
 */
interface GameMap {
    /**
     * List all exits available from the room with the given name.
     * @param roomName The room name.
     * @returns The exits information or null if the room not found.
     */
    describeExits(roomName: string): {
        "1"?: string;
        "3"?: string;
        "5"?: string;
        "7"?: string;
    } | null;
    /**
     * Find the exit direction from the given room en route to another room.
     * @param fromRoom Start room name or room object.
     * @param toRoom Finish room name or room object.
     * @return The room direction constant, one of the following:
     * FIND_EXIT_TOP, FIND_EXIT_RIGHT, FIND_EXIT_BOTTOM, FIND_EXIT_LEFT
     * Or one of the following Result codes:
     * ERR_NO_PATH, ERR_INVALID_ARGS
     */
    findExit(fromRoom: string | Room, toRoom: string | Room, opts?: FindRouteOpts): FindConstExit | ReturnConstErrNoPath | ReturnConstErrInvalidArgs;
    /**
     * Find route from the given room to another room.
     * @param fromRoom Start room name or room object.
     * @param toRoom Finish room name or room object.
     * @returns the route array or ERR_NO_PATH code
     */
    findRoute(fromRoom: string | Room, toRoom: string | Room, opts?: FindRouteOpts): RouteStep[] | ReturnConstErrNoPath;
    /**
     * Get the linear distance (in rooms) between two rooms. You can use this function to estimate the energy cost of
     * sending resources through terminals, or using observers and nukes.
     * @param roomName1 The name of the first room.
     * @param roomName2 The name of the second room.
     */
    getRoomLinearDistance(roomName1: string, roomName2: string): number;
    /**
     * Check if the room with the given name is protected by temporary "newbie" walls.
     * @param roomName The room name.
     */
    /**
     * Get terrain type at the specified room position. This method works for any room in the world even if you have no access to it.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param roomName The room name.
     */
    getTerrainAt(x: number, y: number, roomName: string): TerrainConst;
    /**
     * Get terrain type at the specified room position. This method works for any room in the world even if you have no access to it.
     * @param pos The position object.
     */
    getTerrainAt(pos: RoomPosition): TerrainConst;
    /**
     * Check if the room with the given name is protected by temporary "newbie" walls.
     * @param roomName The room name.
     * @returns A boolean value.
     */
    isRoomProtected(roomName: string): boolean;
}
/**
 * A global object representing the in-game market. You can use this object to track resource transactions to/from your
 * terminals, and your buy/sell orders. The object is accessible via the singleton Game.market property.
 */
interface Market {
    /**
     * Your current credits balance.
     */
    credits: number;
    /**
     * An array of the last 100 incoming transactions to your terminals
     */
    incomingTransactions: Transaction[];
    /**
     * An object with your active and inactive buy/sell orders on the market.
     */
    orders: {
        [key: string]: Order;
    };
    /**
     * An array of the last 100 outgoing transactions from your terminals
     */
    outgoingTransactions: Transaction[];
    /**
     * Estimate the energy transaction cost of StructureTerminal.send and Market.deal methods.
     */
    calcTransactionCost(amount: number, roomName1: string, roomName2: string): number;
    /**
     * Cancel a previously created order. The 5% fee is not returned.
     */
    cancelOrder(orderId: string): ReturnConstOk | ReturnConstErrInvalidArgs;
    /**
     * Create a market order in your terminal. You will be charged price*amount*0.05 credits when the order is placed.
     * The maximum orders count is 20 per player. You can create an order at any time with any amount,
     * it will be automatically activated and deactivated depending on the resource/credits availability.
     */
    createOrder(type: OrderConst, resourceType: ResourceConst | SubscriptionTokenConst, price: number, totalAmount: number, roomName?: string): ReturnConstOk | ReturnConstErrNotOwner | ReturnConstErrNotEnough | ReturnConstErrFull | ReturnConstErrInvalidArgs;
    /**
     * Execute a trade deal from your Terminal to another player's Terminal using the specified buy/sell order.
     * Your Terminal will be charged energy units of transfer cost regardless of the order resource type.
     * You can use Game.market.calcTransactionCost method to estimate it.
     * When multiple players try to execute the same deal, the one with the shortest distance takes precedence.
     */
    deal(orderId: string, amount: number, targetRoomName?: string): ReturnConstOk | ReturnConstErrNotEnough | ReturnConstErrFull | ReturnConstErrInvalidArgs;
    /**
     * Get other players' orders currently active on the market.
     */
    getAllOrders(filter?: OrderFilter | ((o: Order) => boolean)): Order[];
}
interface Transaction {
    transactionId: string;
    time: number;
    sender?: Owner;
    recipient?: Owner;
    resourceType: ResourceConst | SubscriptionTokenConst;
    amount: number;
    from: string;
    to: string;
    description: string | null;
}
interface Order {
    /**
     * The unique order ID.
     */
    id: string;
    /**
     * Whether this order is active and visible to other players. An order can become non-active when the terminal
     * doesn't have enough resources to sell or you are out of credits to buy.
     */
    active?: boolean;
    /**
     * The order creation time in game ticks.
     */
    created: number;
    /**
     * Either ORDER_SELL or ORDER_BUY.
     */
    type: OrderConst;
    /**
     * Either one of the RESOURCE_* constants or SUBSCRIPTION_TOKEN.
     */
    resourceType: ResourceConst | SubscriptionTokenConst;
    /**
     * The room where this order is placed.
     */
    roomName?: string;
    /**
     * Currently available amount to trade.
     */
    amount: number;
    /**
     * How many resources are left to trade via this order. When it becomes equal to zero, the order is removed.
     */
    remainingAmount: number;
    /**
     * Initial order amount.
     */
    totalAmount?: number;
    price: number;
}
interface OrderFilter {
    id?: string;
    created?: number;
    type?: OrderConst;
    resourceType?: ResourceConst | SubscriptionTokenConst;
    roomName?: string;
    amount?: number;
    remainingAmount?: number;
    price?: number;
}
interface Memory {
    [name: string]: any;
    creeps: {
        [name: string]: any;
    };
    flags: {
        [name: string]: any;
    };
    rooms: {
        [name: string]: any;
    };
    spawns: {
        [name: string]: any;
    };
}
/**
 * A mineral deposit object. Can be harvested by creeps with a WORK body part using the extractor structure.
 */
interface Mineral extends RoomObject {
    /**
     * The prototype is stored in the Mineral.prototype global object. You can use it to extend game objects behaviour globally.
     */
    readonly prototype: Mineral;
    /**
     * Room cannot be undefined for a Mineral.
     */
    room: Room;
    /**
     * The remaining amount of resources.
     */
    mineralAmount: number;
    /**
     * The resource type, one of the RESOURCE_* constants.
     */
    mineralType: ResourceConst;
    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * The remaining time after which the deposit will be refilled.
     */
    ticksToRegeneration: number;
}
interface MineralConstructor extends _Constructor<Mineral>, _ConstructorById<Mineral> {
}
declare const Mineral: MineralConstructor;
/**
 * A nuke landing position. This object cannot be removed or modified. You can find incoming nukes in the room using the FIND_NUKES constant.
 */
interface Nuke extends RoomObject {
    readonly prototype: Nuke;
    /**
     * Room cannot be undefined for a Nuke.
     */
    room: Room;
    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * The name of the room where this nuke has been launched from.
     */
    launchRoomName: string;
    /**
     * The remaining landing time.
     */
    timeToLand: number;
}
interface NukeConstructor {
    new (id: string): Nuke;
}
declare const Nuke: NukeConstructor;
/**
 * Contains powerful methods for pathfinding in the game world. Support exists for custom navigation costs and paths which span multiple rooms.
 * Additionally PathFinder can search for paths through rooms you can't see, although you won't be able to detect any dynamic obstacles like creeps or buildings.
 */
interface PathFinder {
    /**
     * Container for custom navigation cost data.
     */
    CostMatrix: CostMatrix;
    /**
     * Find an optimal path between origin and goal.
     *
     * @param origin The start position.
     * @param goal goal A RoomPosition or an object containing a RoomPosition and range
     * @param opts An object containing additional pathfinding flags.
     */
    search(origin: RoomPosition, goal: PathFinderGoal | PathFinderGoal[], opts?: PathFinderOpts): PathFinderReturn;
    /**
     * Specify whether to use this new experimental pathfinder in game objects methods.
     * This method should be invoked every tick. It affects the following methods behavior:
     * Room.findPath, RoomPosition.findPathTo, RoomPosition.findClosestByPath, Creep.moveTo....
     *
     * @param isEnabled Whether to activate the new pathfinder or deactivate.
     */
    use(isEnabled: boolean): any;
}
interface PathFinderReturn {
    /**
     * An array of RoomPosition objects.
     */
    path: RoomPosition[];
    /**
     * Total number of operations performed before this path was calculated.
     */
    ops: number;
    /**
     * The total cost of the path as derived from `plainCost`, `swampCost` and any given CostMatrix instances.
     */
    cost: number;
    /**
     * If the pathfinder fails to find a complete path, this will be true. Note that `path` will still be populated with a partial path which represents the closest path it could find given the search parameters.
     */
    incomplete: boolean;
}
/**
 * An object containing additional pathfinding flags.
 */
interface PathFinderOpts {
    /**
     * Cost for walking on plain positions. The default is 1.
     */
    plainCost?: number;
    /**
     * Cost for walking on swamp positions. The default is 5.
     */
    swampCost?: number;
    /**
     * Instead of searching for a path to the goals this will search for a path away from the goals.
     * The cheapest path that is out of range of every goal will be returned. The default is false.
     */
    flee?: boolean;
    /**
     * The maximum allowed pathfinding operations. You can limit CPU time used for the search based on ratio 1 op ~ 0.001 CPU. The default value is 2000.
     */
    maxOps?: number;
    /**
     * The maximum allowed rooms to search. The default (and maximum) is 16.
     */
    maxRooms?: number;
    /**
     * Weight to apply to the heuristic in the A* formula F = G + weight * H. Use this option only if you understand
     * the underlying A* algorithm mechanics! The default value is 1.
     */
    heuristicWeight?: number;
    /**
     * Request from the pathfinder to generate a CostMatrix for a certain room. The callback accepts one argument, roomName.
     * This callback will only be called once per room per search. If you are running multiple pathfinding operations in a
     * single room and in a single tick you may consider caching your CostMatrix to speed up your code. Please read the
     * CostMatrix documentation below for more information on CostMatrix.
     *
     * @param roomName
     */
    roomCallback?(roomName: string): boolean | CostMatrix;
}
/**
 * Container for custom navigation cost data.
 */
interface CostMatrix {
    /**
     * Creates a new CostMatrix containing 0's for all positions.
     * @constructor
     */
    new (): CostMatrix;
    /**
     * Set the cost of a position in this CostMatrix.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param cost Cost of this position. Must be a whole number. A cost of 0 will use the terrain cost for that tile. A cost greater than or equal to 255 will be treated as unwalkable.
     */
    set(x: number, y: number, cost: number): any;
    /**
     * Get the cost of a position in this CostMatrix.
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    get(x: number, y: number): any;
    /**
     * Copy this CostMatrix into a new CostMatrix with the same data.
     */
    clone(): CostMatrix;
    /**
     * Returns a compact representation of this CostMatrix which can be stored via JSON.stringify.
     */
    serialize(): number[];
    /**
     * Static method which deserializes a new CostMatrix using the return value of serialize.
     * @param val Whatever serialize returned
     */
    deserialize(val: number[]): CostMatrix;
}
/**
 * RawMemory object allows to implement your own memory stringifier instead of built-in serializer based on JSON.stringify.
 */
interface RawMemory {
    /**
     * Get a raw string representation of the Memory object.
     */
    get(): string;
    /**
     * Set new memory value.
     * @param value New memory value as a string.
     */
    set(value: string): any;
}
/**
 * A dropped piece of resource. It will decay after a while if not picked up. Dropped resource pile decays for ceil(amount/1000) units per tick.
 */
interface Resource extends RoomObject {
    readonly prototype: Resource;
    /**
     * Room cannot be undefined for a Resource.
     */
    room: Room;
    /**
     * The amount of resource units containing.
     */
    amount: number;
    /**
     * A unique object identificator. You can use `Game.getObjectById` method to retrieve an object instance by its `id`.
     */
    id: string;
    /**
     * One of the `RESOURCE_*` constants.
     */
    resourceType: ResourceConst;
}
interface ResourceConstructor {
    new (id: string): Resource;
}
declare const Resource: ResourceConstructor;
/**
 * Any object with a position in a room. Almost all game objects prototypes
 * are derived from RoomObject.
 */
interface RoomObject {
    readonly prototype: RoomObject;
    /**
     * An object representing the position of this object in the room.
     */
    pos: RoomPosition;
    /**
     * The link to the Room object. May be undefined in case if an object is a
     * flag or a construction site and is placed in a room that is not visible
     * to you.
     */
    room: Room | undefined;
}
interface RoomObjectConstructor extends _Constructor<RoomObject> {
    new (x: number, y: number, roomName: string): RoomObject;
    (x: number, y: number, roomName: string): RoomObject;
}
declare const RoomObject: RoomObjectConstructor;
/**
 * An object representing the specified position in the room. Every object in the room contains RoomPosition as the pos property. The position object of a custom location can be obtained using the Room.getPositionAt() method or using the constructor.
 */
interface RoomPosition {
    readonly prototype: RoomPosition;
    /**
     * The name of the room.
     */
    roomName: string;
    /**
     * X position in the room.
     */
    x: number;
    /**
     * Y position in the room.
     */
    y: number;
    /**
     * Create new ConstructionSite at the specified location.
     * @param structureType One of the following constants: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
     */
    createConstructionSite(structureType: StructureConst): ReturnConstOk | ReturnConstErrInvalidTarget | ReturnConstErrFull | ReturnConstErrInvalidArgs | ReturnConstErrRCL;
    /**
     * Create new Flag at the specified location.
     * @param name The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key). If not defined, a random name will be generated.
     * @param color The color of a new flag. Should be one of the COLOR_* constants
     * @param secondaryColor The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     */
    createFlag(name?: string, color?: ColorConst, secondaryColor?: ColorConst): string | ReturnConstErrNameExists | ReturnConstErrInvalidArgs;
    /**
     * Find an object with the shortest path from the given position. Uses A* search algorithm and Dijkstra's algorithm.
     * @param type See Room.find
     * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
     */
    findClosestByPath<T>(type: FindConst, opts?: FindPathOpts & {
        filter?: any | string;
        algorithm?: PathfindingAlgorithm;
    }): T | null;
    /**
     * Find an object with the shortest path from the given position. Uses A* search algorithm and Dijkstra's algorithm.
     * @param objects An array of room's objects or RoomPosition objects that the search should be executed against.
     * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
     */
    findClosestByPath<T>(objects: T[] | RoomPosition[], opts?: FindPathOpts & {
        filter?: any | string;
        algorithm?: PathfindingAlgorithm;
    }): T | null;
    /**
     * Find an object with the shortest linear distance from the given position.
     * @param type See Room.find.
     * @param opts
     */
    findClosestByRange<T>(type: FindConst, opts?: {
        filter: any | string;
    }): T | null;
    /**
     * Find an object with the shortest linear distance from the given position.
     * @param objects An array of room's objects or RoomPosition objects that the search should be executed against.
     * @param opts An object containing one of the following options: filter
     */
    findClosestByRange<T>(objects: T[] | RoomPosition[], opts?: {
        filter: any | string;
    }): T | null;
    /**
     * Find all objects in the specified linear range.
     * @param type See Room.find.
     * @param range The range distance.
     * @param opts See Room.find.
     */
    findInRange<T>(type: FindConst, range: number, opts?: {
        filter?: any | string;
    }): T[];
    /**
     * Find all objects in the specified linear range.
     * @param objects An array of room's objects or RoomPosition objects that the search should be executed against.
     * @param range The range distance.
     * @param opts See Room.find.
     */
    findInRange<T>(objects: T[] | RoomPosition[], range: number, opts?: {
        filter?: any | string;
    }): T[];
    /**
     * Find an optimal path to the specified position using A* search algorithm. This method is a shorthand for Room.findPath. If the target is in another room, then the corresponding exit will be used as a target.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param opts An object containing pathfinding options flags (see Room.findPath for more details).
     */
    findPathTo(x: number, y: number, opts?: FindPathOpts): PathStep[];
    /**
     * Find an optimal path to the specified position using A* search algorithm. This method is a shorthand for Room.findPath. If the target is in another room, then the corresponding exit will be used as a target.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @param opts An object containing pathfinding options flags (see Room.findPath for more details).
     */
    findPathTo(target: RoomPosition | {
        pos: RoomPosition;
    }, opts?: FindPathOpts): PathStep[];
    /**
     * Get linear direction to the specified position.
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    getDirectionTo(x: number, y: number): DirConst;
    /**
     * Get linear direction to the specified position.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     */
    getDirectionTo(target: RoomPosition | {
        pos: RoomPosition;
    }): DirConst;
    /**
     * Get linear range to the specified position.
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    getRangeTo(x: number, y: number): number;
    /**
     * Get linear range to the specified position.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     */
    getRangeTo(target: RoomPosition | {
        pos: RoomPosition;
    }): number;
    /**
     * Check whether this position is in the given range of another position.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param range The range distance.
     */
    inRangeTo(x: number, y: number, range: number): boolean;
    /**
     * Check whether this position is in the given range of another position.
     * @param target The target position.
     * @param range The range distance.
     */
    inRangeTo(target: RoomPosition | {
        pos: RoomPosition;
    }, range: number): boolean;
    /**
     * Check whether this position is the same as the specified position.
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    isEqualTo(x: number, y: number): boolean;
    /**
     * Check whether this position is the same as the specified position.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     */
    isEqualTo(target: RoomPosition | {
        pos: RoomPosition;
    }): boolean;
    /**
     * Check whether this position is on the adjacent square to the specified position. The same as inRangeTo(target, 1).
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    isNearTo(x: number, y: number): boolean;
    /**
     * Check whether this position is on the adjacent square to the specified position. The same as inRangeTo(target, 1).
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     */
    isNearTo(target: RoomPosition | {
        pos: RoomPosition;
    }): boolean;
    /**
     * Get the list of objects at the specified room position.
     */
    look(): LookAtResult[];
    /**
     * Get an object with the given type at the specified room position.
     * @param type One of the following string constants: constructionSite, creep, exit, flag, resource, source, structure, terrain
     */
    lookFor<T>(type: LookConst): T[];
}
interface RoomPositionConstructor extends _Constructor<RoomPosition> {
    /**
     * You can create new RoomPosition object using its constructor.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param roomName The room name.
     */
    new (x: number, y: number, roomName: string): RoomPosition;
    (x: number, y: number, roomName: string): RoomPosition;
}
declare const RoomPosition: RoomPositionConstructor;
/**
 * An object representing the room in which your units and structures are in. It can be used to look around, find paths, etc. Every object in the room contains its linked Room instance in the room property.
 */
interface Room {
    readonly prototype: Room;
    /**
     * The Controller structure of this room, if present, otherwise undefined.
     */
    controller: Controller | undefined;
    /**
     * Total amount of energy available in all spawns and extensions in the room.
     */
    energyAvailable: number;
    /**
     * Total amount of energyCapacity of all spawns and extensions in the room.
     */
    energyCapacityAvailable: number;
    /**
     * A shorthand to Memory.rooms[room.name]. You can use it for quick access the room’s specific memory data object.
     */
    memory: any;
    /**
     * One of the following constants:
     * MODE_SIMULATION, MODE_SURVIVAL, MODE_WORLD, MODE_ARENA
     */
    mode: ModeConst;
    /**
     * The name of the room.
     */
    name: string;
    /**
     * The Storage structure of this room, if present, otherwise undefined.
     */
    storage: StructureStorage | undefined;
    /**
     * An object with survival game info if available
     */
    survivalInfo: SurvivalGameInfo | undefined;
    /**
     * The Terminal structure of this room, if present, otherwise undefined.
     */
    terminal: Terminal | undefined;
    /**
     * Create new ConstructionSite at the specified location.
     * @param x The X position.
     * @param y The Y position.
     * @param structureType One of the following constants: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
     * @returns Result Code: OK, ERR_INVALID_TARGET, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
     */
    createConstructionSite(x: number, y: number, structureType: StructureConst): ReturnConstOk | ReturnConstErrInvalidTarget | ReturnConstErrFull | ReturnConstErrInvalidArgs | ReturnConstErrRCL;
    /**
     * Create new ConstructionSite at the specified location.
     * @param pos Can be a RoomPosition object or any object containing RoomPosition.
     * @param structureType One of the following constants: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
     * @returns Result Code: OK, ERR_INVALID_TARGET, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
     */
    createConstructionSite(pos: RoomPosition | {
        pos: RoomPosition;
    }, structureType: StructureConst): ReturnConstOk | ReturnConstErrInvalidTarget | ReturnConstErrFull | ReturnConstErrInvalidArgs | ReturnConstErrRCL;
    /**
     * Create new Flag at the specified location.
     * @param x The X position.
     * @param y The Y position.
     * @param name (optional) The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key). If not defined, a random name will be generated.
     * @param color The color of a new flag. Should be one of the COLOR_* constants. The default value is COLOR_WHITE.
     * @param secondaryColor The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     */
    createFlag(x: number, y: number, name?: string, color?: ColorConst, secondaryColor?: ColorConst): string | ReturnConstErrNameExists | ReturnConstErrInvalidArgs;
    /**
     * Create new Flag at the specified location.
     * @param pos Can be a RoomPosition object or any object containing RoomPosition.
     * @param name (optional) The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key). If not defined, a random name will be generated.
     * @param color The color of a new flag. Should be one of the COLOR_* constants. The default value is COLOR_WHITE.
     * @param secondaryColor The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     */
    createFlag(pos: RoomPosition | {
        pos: RoomPosition;
    }, name?: string, color?: ColorConst, secondaryColor?: ColorConst): string | ReturnConstErrNameExists | ReturnConstErrInvalidArgs;
    /**
     * Find all objects of the specified type in the room.
     * @param type One of the following constants:FIND_CREEPS, FIND_MY_CREEPS, FIND_HOSTILE_CREEPS, FIND_MY_SPAWNS, FIND_HOSTILE_SPAWNS, FIND_SOURCES, FIND_SOURCES_ACTIVE, FIND_DROPPED_RESOURCES, FIND_DROPPED_ENERGY, FIND_STRUCTURES, FIND_MY_STRUCTURES, FIND_HOSTILE_STRUCTURES, FIND_FLAGS, FIND_CONSTRUCTION_SITES, FIND_EXIT_TOP, FIND_EXIT_RIGHT, FIND_EXIT_BOTTOM, FIND_EXIT_LEFT, FIND_EXIT
     * @param opts An object with additional options
     * @returns An array with the objects found.
     */
    find<T>(type: FindConst, opts?: {
        filter: Object | Function | string;
    }): T[];
    /**
     * Find the exit direction en route to another room.
     * @param room Another room name or room object.
     * @returns The room direction constant, one of the following: FIND_EXIT_TOP, FIND_EXIT_RIGHT, FIND_EXIT_BOTTOM, FIND_EXIT_LEFT
     * Or one of the following error codes: ERR_NO_PATH, ERR_INVALID_ARGS
     */
    findExitTo(room: string | Room): FindConstExit | ReturnConstErrNoPath | ReturnConstErrInvalidArgs;
    /**
     * Find an optimal path inside the room between fromPos and toPos using A* search algorithm.
     * @param fromPos The start position.
     * @param toPos The end position.
     * @param opts (optional) An object containing additonal pathfinding flags
     * @returns An array with path steps
     */
    findPath(fromPos: RoomPosition, toPos: RoomPosition, opts?: FindPathOpts): PathStep[];
    /**
     * Creates a RoomPosition object at the specified location.
     * @param x The X position.
     * @param y The Y position.
     * @returns A RoomPosition object or null if it cannot be obtained.
     */
    getPositionAt(x: number, y: number): RoomPosition | null;
    /**
     * Get the list of objects at the specified room position.
     * @param x The X position.
     * @param y The Y position.
     * @returns An array with objects at the specified position
     */
    lookAt(x: number, y: number): LookAtResult[];
    /**
     * Get the list of objects at the specified room position.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns An array with objects at the specified position
     */
    lookAt(target: RoomPosition | {
        pos: RoomPosition;
    }): LookAtResult[];
    /**
     * Get the list of objects at the specified room area. This method is more CPU efficient in comparison to multiple lookAt calls.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @returns An object with all the objects in the specified area
     */
    lookAtArea(top: number, left: number, bottom: number, right: number, asArray?: boolean): LookAtResultMatrix | LookAtResultWithPos[];
    /**
     * Get an object with the given type at the specified room position.
     * @param type One of the following string constants: constructionSite, creep, energy, exit, flag, source, structure, terrain
     * @param x The X position.
     * @param y The Y position.
     * @returns An array of objects of the given type at the specified position if found.
     */
    lookForAt<T>(type: LookConst, x: number, y: number): T[];
    /**
     * Get an object with the given type at the specified room position.
     * @param type One of the following string constants: constructionSite, creep, energy, exit, flag, source, structure, terrain
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns An array of objects of the given type at the specified position if found.
     */
    lookForAt<T>(type: LookConst, target: RoomPosition | {
        pos: RoomPosition;
    }): T[];
    /**
     * Get the list of objects with the given type at the specified room area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type One of the following string constants: constructionSite, creep, energy, exit, flag, source, structure, terrain
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @returns An object with all the objects of the given type in the specified area
     */
    lookForAtArea(type: LookConst, top: number, left: number, bottom: number, right: number, asArray: true): LookAtResultWithPos[];
    /**
     * Get the list of objects with the given type at the specified room area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type One of the following string constants: constructionSite, creep, energy, exit, flag, source, structure, terrain
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @returns An object with all the objects of the given type in the specified area
     */
    lookForAtArea(type: LookConst, top: number, left: number, bottom: number, right: number, asArray?: false): LookAtResultMatrix;
    /**
     * Get the list of objects with the given type at the specified room area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type One of the following string constants: constructionSite, creep, energy, exit, flag, source, structure, terrain
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @returns An object with all the objects of the given type in the specified area
     */
    lookForAtArea(type: LookConst, top: number, left: number, bottom: number, right: number, asArray?: boolean): LookAtResultMatrix | LookAtResultWithPos[];
}
interface RoomConstructor {
    new (id: string): Room;
    /**
     * Serialize a path array into a short string representation, which is suitable to store in memory.
     * @param path A path array retrieved from Room.findPath.
     * @returns A serialized string form of the given path.
     */
    serializePath(path: PathStep[]): string;
    /**
     * Deserialize a short string path representation into an array form.
     * @param path A serialized path string.
     * @returns A path array.
     */
    deserializePath(path: string): PathStep[];
}
declare const Room: RoomConstructor;
/**
 * An energy source object. Can be harvested by creeps with a WORK body part.
 */
interface Source extends RoomObject {
    /**
     * The prototype is stored in the Source.prototype global object. You can use it to extend game objects behaviour globally:
     */
    readonly prototype: Source;
    /**
     * Room cannot be undefined for a Source.
     */
    room: Room;
    /**
     * The remaining amount of energy.
     */
    energy: number;
    /**
     * The total amount of energy in the source. Equals to 3000 in most cases.
     */
    energyCapacity: number;
    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * The remaining time after which the source will be refilled.
     */
    ticksToRegeneration: number;
}
interface SourceConstructor extends _Constructor<Source>, _ConstructorById<Source> {
}
declare const Source: SourceConstructor;
/**
 * Spawns are your colony centers. You can transfer energy into it and create new creeps using createCreep() method.
 */
interface StructureSpawn extends OwnedStructure {
    readonly prototype: StructureSpawn;
    /**
     * The amount of energy containing in the spawn.
     */
    energy: number;
    /**
     * The total amount of energy the spawn can contain
     */
    energyCapacity: number;
    /**
     * A shorthand to Memory.spawns[spawn.name]. You can use it for quick access the spawn’s specific memory data object.
     */
    memory: any;
    /**
     * Spawn’s name. You choose the name upon creating a new spawn, and it cannot be changed later. This name is a hash key to access the spawn via the Game.spawns object.
     */
    name: string;
    /**
     * Always equal to ‘spawn’.
     */
    structureType: StructureConstSpawn;
    /**
     * If the spawn is in process of spawning a new creep, this object will contain the new creep’s information, or null otherwise.
     * @param name The name of a new creep.
     * @param needTime Time needed in total to complete the spawning.
     * @param remainingTime Remaining time to go.
     */
    spawning: {
        name: string;
        needTime: number;
        remainingTime: number;
    } | null;
    /**
     * Check if a creep can be created.
     * @param body An array describing the new creep’s body. Should contain 1 to 50 elements with one of these constants: WORK, MOVE, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH, CLAIM
     * @param name The name of a new creep. It should be unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key). If not defined, a random name will be generated.
     */
    canCreateCreep(body: BodypartConst[], name?: string): ReturnConstOk | ReturnConstErrNotOwner | ReturnConstErrNameExists | ReturnConstErrBusy | ReturnConstErrNotEnough | ReturnConstErrInvalidArgs | ReturnConstErrRCL;
    /**
     * Start the creep spawning process.
     * The name of a new creep or one of these error codes
     * ERR_NOT_OWNER	-1	You are not the owner of this spawn.
     * ERR_NAME_EXISTS	-3	There is a creep with the same name already.
     * ERR_BUSY	-4	The spawn is already in process of spawning another creep.
     * ERR_NOT_ENOUGH_ENERGY	-6	The spawn and its extensions contain not enough energy to create a creep with the given body.
     * ERR_INVALID_ARGS	-10	Body is not properly described.
     * ERR_RCL_NOT_ENOUGH	-14	Your Room Controller level is not enough to use this spawn.
     * @param body An array describing the new creep’s body. Should contain 1 to 50 elements with one of these constants: WORK, MOVE, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH, CLAIM
     * @param name The name of a new creep. It should be unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key). If not defined, a random name will be generated.
     * @param memory The memory of a new creep. If provided, it will be immediately stored into Memory.creeps[name].
     */
    createCreep(body: BodypartConst[], name?: string, memory?: any): string | ReturnConstErrNotOwner | ReturnConstErrNameExists | ReturnConstErrBusy | ReturnConstErrNotEnough | ReturnConstErrInvalidArgs | ReturnConstErrRCL;
    /**
     * Kill the creep and drop up to 100% of resources spent on its spawning and boosting depending on remaining life time. The target should be at adjacent square.
     * @param target The target creep object.
     */
    recycleCreep(target: Creep): ReturnConstOk | ReturnConstErrNotOwner | ReturnConstErrInvalidTarget | ReturnConstErrNotInRange;
    /**
     * Increase the remaining time to live of the target creep. The target should be at adjacent square. The spawn should not be busy with the spawning process. Each execution increases the creep's timer by amount of ticks according to this formula: floor(500/body_size). Energy required for each execution is determined using this formula: ceil(creep_cost/3/body_size).
     * @param target The target creep object.
     */
    renewCreep(target: Creep): ReturnConstOk | ReturnConstErrNotOwner | ReturnConstErrBusy | ReturnConstErrNotEnough | ReturnConstErrInvalidTarget | ReturnConstErrFull | ReturnConstErrNotInRange;
    /**
     * DEPRECATED: Please use Creep.withdraw instead.
     * Transfer the energy from the spawn to a creep.
     * @param target The creep object which energy should be transferred to.
     * @param amount The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     * @deprecated
     */
    transferEnergy(target: Creep, amount?: number): ReturnConstOk | ReturnConstErrNotOwner | ReturnConstErrNotEnough | ReturnConstErrInvalidTarget | ReturnConstErrFull | ReturnConstErrNotInRange;
}
interface StructureSpawnConstructor extends _Constructor<StructureSpawn>, _ConstructorById<StructureSpawn> {
}
declare const StructureSpawn: StructureSpawnConstructor;
/**
 * Parent object for structure classes
 */
declare type TransferEnergyReturn = ReturnConstOk | ReturnConstErrNotOwner | ReturnConstErrNotEnough | ReturnConstErrInvalidTarget | ReturnConstErrFull | ReturnConstErrNotInRange;
interface Structure extends RoomObject {
    readonly prototype: Structure;
    /**
     * Room cannot be undefined for a Structure.
     */
    room: Room;
    /**
     * The current amount of hit points of the structure.
     */
    hits: number;
    /**
     * The total amount of hit points of the structure.
     */
    hitsMax: number;
    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * One of the STRUCTURE_* constants.
     */
    structureType: StructureConst;
    /**
     * Destroy this structure immediately.
     */
    destroy(): ReturnConstOk | ReturnConstErrNotOwner;
    /**
     * Check whether this structure can be used. If the room controller level is not enough, then this method will return false, and the structure will be highlighted with red in the game.
     */
    isActive(): boolean;
    /**
     * Toggle auto notification when the structure is under attack. The notification will be sent to your account email. Turned on by default.
     * @param enabled Whether to enable notification or disable.
     */
    notifyWhenAttacked(enabled: boolean): ReturnConstOk | ReturnConstErrNotOwner | ReturnConstErrInvalidArgs;
}
interface StructureConstructor extends _Constructor<Structure>, _ConstructorById<Structure> {
}
declare const Structure: StructureConstructor;
/**
 * The base prototype for a structure that has an owner. Such structures can be
 * found using `FIND_MY_STRUCTURES` and `FIND_HOSTILE_STRUCTURES` constants.
 */
interface OwnedStructure extends Structure {
    readonly prototype: OwnedStructure;
    /**
     * Whether this is your own structure. Walls and roads don't have this property as they are considered neutral structures.
     */
    my: boolean;
    /**
     * An object with the structure’s owner info (if present) containing the following properties: username
     */
    owner: Owner;
}
interface OwnedStructureConstructor extends _Constructor<OwnedStructure>, _ConstructorById<OwnedStructure> {
}
declare const OwnedStructure: OwnedStructureConstructor;
/**
 * Claim this structure to take control over the room. The controller structure
 * cannot be damaged or destroyed. It can be addressed by `Room.controller`
 * property.
 */
interface StructureController extends OwnedStructure {
    readonly prototype: StructureController;
    structureType: StructureConstContainer;
    /**
     * Current controller level, from 0 to 8.
     */
    level: number;
    /**
     * The current progress of upgrading the controller to the next level.
     */
    progress: number;
    /**
     * The progress needed to reach the next level.
     */
    progressTotal: number;
    /**
     * An object with the controller reservation info if present: username, ticksToEnd
     */
    reservation?: ReservationDefinition;
    /**
     * The amount of game ticks when this controller will lose one level. This timer can be reset by using Creep.upgradeController.
     */
    ticksToDowngrade: number;
    /**
     * The amount of game ticks while this controller cannot be upgraded due to attack.
     */
    upgradeBlocked: number;
    /**
     * Make your claimed controller neutral again.
     */
    unclaim(): number;
}
interface StructureControllerConstructor extends _Constructor<StructureController>, _ConstructorById<StructureController> {
}
declare const StructureController: StructureControllerConstructor;
/**
 * Contains energy which can be spent on spawning bigger creeps. Extensions can
 * be placed anywhere in the room, any spawns will be able to use them regardless
 * of distance.
 */
interface StructureExtension extends OwnedStructure {
    readonly prototype: StructureExtension;
    /**
     * The amount of energy containing in the extension.
     */
    energy: number;
    /**
     * The total amount of energy the extension can contain.
     */
    energyCapacity: number;
    /**
     * DEPRECATED: Please use Creep.withdraw instead.
     * Transfer the energy from the extension to a creep.
     * @param target The creep object which energy should be transferred to.
     * @param amount The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     * @deprecated
     */
    transferEnergy(target: Creep, amount?: number): TransferEnergyReturn;
}
interface StructureExtensionConstructor extends _Constructor<StructureExtension>, _ConstructorById<StructureExtension> {
}
declare const StructureExtension: StructureExtensionConstructor;
/**
 * Remotely transfers energy to another Link in the same room.
 */
interface StructureLink extends OwnedStructure {
    readonly prototype: StructureLink;
    structureType: StructureConstLink;
    /**
     * The amount of game ticks the link has to wait until the next transfer is possible.
     */
    cooldown: number;
    /**
     * The amount of energy containing in the link.
     */
    energy: number;
    /**
     * The total amount of energy the link can contain.
     */
    energyCapacity: number;
    /**
     * Transfer energy from the link to another link or a creep. If the target is a creep, it has to be at adjacent square to the link. If the target is a link, it can be at any location in the same room. Remote transfer process implies 3% energy loss and cooldown delay depending on the distance.
     * @param target The target object.
     * @param amount The amount of energy to be transferred. If omitted, all the available energy is used.
     */
    transferEnergy(target: Creep | StructureLink, amount?: number): TransferEnergyReturn | ReturnConstErrInvalidArgs | ReturnConstErrTired | ReturnConstErrRCL;
}
interface StructureLinkConstructor extends _Constructor<StructureLink>, _ConstructorById<StructureLink> {
}
declare const StructureLink: StructureLinkConstructor;
/**
 * Non-player structure. Spawns NPC Source Keepers that guards energy sources
 * and minerals in some rooms. This structure cannot be destroyed.
 */
interface StructureKeeperLair extends OwnedStructure {
    readonly prototype: StructureKeeperLair;
    structureType: StructureConstKeeperLair;
    /**
     * Time to spawning of the next Source Keeper.
     */
    ticksToSpawn: number | undefined;
}
interface StructureKeeperLairConstructor extends _Constructor<StructureKeeperLair>, _ConstructorById<StructureKeeperLair> {
}
declare const StructureKeeperLair: StructureKeeperLairConstructor;
/**
 * Provides visibility into a distant room from your script.
 */
interface StructureObserver extends OwnedStructure {
    readonly prototype: StructureObserver;
    structureType: StructureConstObserver;
    /**
     * Provide visibility into a distant room from your script. The target room object will be available on the next tick. The maximum range is 5 rooms.
     * @param roomName
     */
    observeRoom(roomName: string): ReturnConstOk | ReturnConstErrInvalidArgs | ReturnConstErrRCL;
}
interface StructureObserverConstructor extends _Constructor<StructureObserver>, _ConstructorById<StructureObserver> {
}
declare const StructureObserver: StructureObserverConstructor;
/**
 *
 */
interface StructurePowerBank extends OwnedStructure {
    readonly prototype: StructurePowerBank;
    structureType: StructureConstPowerBank;
    /**
     * The amount of power containing.
     */
    power: number;
    /**
     * The amount of game ticks when this structure will disappear.
     */
    ticksToDecay: number;
}
interface StructurePowerBankConstructor extends _Constructor<StructurePowerBank>, _ConstructorById<StructurePowerBank> {
}
declare const StructurePowerBank: StructurePowerBankConstructor;
/**
 * Non-player structure. Contains power resource which can be obtained by
 * destroying the structure. Hits the attacker creep back on each attack.
 */
interface StructurePowerSpawn extends OwnedStructure {
    readonly prototype: StructurePowerSpawn;
    structureType: StructureConstPowerSpawn;
    /**
     * The amount of energy containing in this structure.
     */
    energy: number;
    /**
     * The total amount of energy this structure can contain.
     */
    energyCapacity: number;
    /**
     * The amount of power containing in this structure.
     */
    power: number;
    /**
     * The total amount of power this structure can contain.
     */
    powerCapacity: number;
    /**
     * Create a power creep. Currently in development
     * @param name The name of the power creep.
     */
    createPowerCreep(name: string): number;
    /**
     * Register power resource units into your account. Registered power allows to develop power creeps skills. Consumes 1 power resource unit and 50 energy resource units.
     */
    processPower(): ReturnConstOk | ReturnConstErrNotEnough | ReturnConstErrRCL;
    /**
     * DEPRECATED: Please use Creep.withdraw instead.
     * Transfer the energy from this structure to a creep.
     * @param target The creep object which energy should be transferred to.
     * @param amount The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     * @deprecated
     */
    transferEnergy(target: Creep, amount?: number): TransferEnergyReturn;
}
interface StructurePowerSpawnConstructor extends _Constructor<StructurePowerSpawn>, _ConstructorById<StructurePowerSpawn> {
}
declare const StructurePowerSpawn: StructurePowerSpawnConstructor;
/**
 * Blocks movement of hostile creeps, and defends your creeps and structures on
 * the same tile. Can be used as a controllable gate.
 */
interface StructureRampart extends OwnedStructure {
    readonly prototype: StructureRampart;
    structureType: StructureConstRampart;
    /**
     * The amount of game ticks when this rampart will lose some hit points.
     */
    ticksToDecay: number;
    /**
     * If false (default), only your creeps can step on the same square. If true, any hostile creeps can pass through.
     */
    isPublic: boolean;
    /**
     * Make this rampart public to allow other players' creeps to pass through.
     * @param isPublic Whether this rampart should be public or non-public
     */
    setPublic(isPublic: boolean): ReturnConstOk | ReturnConstErrNotOwner;
}
interface StructureRampartConstructor extends _Constructor<StructureRampart>, _ConstructorById<StructureRampart> {
}
declare const StructureRampart: StructureRampartConstructor;
/**
 * Decreases movement cost to 1. Using roads allows creating creeps with less
 * `MOVE` body parts.
 */
interface StructureRoad extends Structure {
    readonly prototype: StructureRoad;
    structureType: StructureConstRoad;
    /**
     * The amount of game ticks when this road will lose some hit points.
     */
    ticksToDecay: number;
}
interface StructureRoadConstructor extends _Constructor<StructureRoad>, _ConstructorById<StructureRoad> {
}
declare const StructureRoad: StructureRoadConstructor;
/**
 * A structure that can store huge amount of resource units. Only one structure
 * per room is allowed that can be addressed by `Room.storage` property.
 */
interface StructureStorage extends OwnedStructure {
    readonly prototype: StructureStorage;
    structureType: StructureConstStorage;
    /**
     * An object with the storage contents.
     */
    store: StoreDefinition;
    /**
     * The total amount of resources the storage can contain.
     */
    storeCapacity: number;
    /**
     * DEPRECATED: Please use Creep.withdraw instead.
     * Transfer resource from this storage to a creep. The target has to be at adjacent square.
     * @param target The target object.
     * @param resourceType One of the RESOURCE_* constants.
     * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
     * @deprecated
     */
    transfer(target: Creep, resourceType: ResourceConst, amount?: number): TransferEnergyReturn | ReturnConstErrInvalidArgs;
}
interface StructureStorageConstructor extends _Constructor<StructureStorage>, _ConstructorById<StructureStorage> {
}
declare const StructureStorage: StructureStorageConstructor;
/**
 * Remotely attacks or heals creeps, or repairs structures. Can be targeted to
 * any object in the room. However, its effectiveness highly depends on the
 * distance. Each action consumes energy.
 */
interface StructureTower extends OwnedStructure {
    readonly prototype: StructureTower;
    structureType: StructureConstTower;
    /**
     * The amount of energy containing in this structure.
     */
    energy: number;
    /**
     * The total amount of energy this structure can contain.
     */
    energyCapacity: number;
    /**
     * Remotely attack any creep in the room. Consumes 10 energy units per tick. Attack power depends on the distance to the target: from 600 hits at range 10 to 300 hits at range 40.
     * @param target The target creep.
     */
    attack(target: Creep): ReturnConstOk | ReturnConstErrNotEnough | ReturnConstErrInvalidTarget | ReturnConstErrRCL;
    /**
     * Remotely heal any creep in the room. Consumes 10 energy units per tick. Heal power depends on the distance to the target: from 400 hits at range 10 to 200 hits at range 40.
     * @param target The target creep.
     */
    heal(target: Creep): ReturnConstOk | ReturnConstErrNotEnough | ReturnConstErrInvalidTarget | ReturnConstErrRCL;
    /**
     * Remotely repair any structure in the room. Consumes 10 energy units per tick. Repair power depends on the distance to the target: from 600 hits at range 10 to 300 hits at range 40.
     * @param target The target structure.
     */
    repair(target: Structure): ReturnConstOk | ReturnConstErrNotEnough | ReturnConstErrInvalidTarget | ReturnConstErrRCL;
    /**
     * DEPRECATED: Please use Creep.withdraw instead.
     * Transfer the energy from this structure to a creep.
     * @param target The creep object which energy should be transferred to.
     * @param amount The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     * @deprecated
     */
    transferEnergy(target: Creep, amount?: number): TransferEnergyReturn;
}
interface StructureTowerConstructor extends _Constructor<StructureTower>, _ConstructorById<StructureTower> {
}
declare const StructureTower: StructureTowerConstructor;
/**
 * Blocks movement of all creeps.
 */
interface StructureWall extends Structure {
    readonly prototype: StructureWall;
    structureType: StructureConstWall;
    /**
     * The amount of game ticks when the wall will disappear (only for automatically placed border walls at the start of the game).
     */
    ticksToLive: number;
}
interface StructureWallConstructor extends _Constructor<StructureWall>, _ConstructorById<StructureWall> {
}
declare const StructureWall: StructureWallConstructor;
/**
 * Allows to harvest mineral deposits.
 */
interface StructureExtractor extends OwnedStructure {
    readonly prototype: StructureExtractor;
    structureType: StructureConstExtractor;
}
interface StructureExtractorConstructor extends _Constructor<StructureExtractor>, _ConstructorById<StructureExtractor> {
}
declare const StructureExtractor: StructureExtractorConstructor;
/**
 * Produces mineral compounds from base minerals and boosts creeps.
 */
interface StructureLab extends OwnedStructure {
    readonly prototype: StructureLab;
    structureType: StructureConstLab;
    /**
     * The amount of game ticks the lab has to wait until the next reaction is possible.
     */
    cooldown: number;
    /**
     * The amount of energy containing in the lab. Energy is used for boosting creeps.
     */
    energy: number;
    /**
     * The total amount of energy the lab can contain.
     */
    energyCapacity: number;
    /**
     * The amount of mineral resources containing in the lab.
     */
    mineralAmount: number;
    /**
     * The type of minerals containing in the lab. Labs can contain only one mineral type at the same time.
     */
    mineralType: ResourceConst;
    /**
     * The total amount of minerals the lab can contain.
     */
    mineralCapacity: number;
    /**
     * Boosts creep body part using the containing mineral compound. The creep has to be at adjacent square to the lab. Boosting one body part consumes 30 mineral units and 20 energy units.
     * @param creep The target creep.
     * @param bodyPartsCount The number of body parts of the corresponding type to be boosted. Body parts are always counted left-to-right for TOUGH, and right-to-left for other types. If undefined, all the eligible body parts are boosted.
     */
    boostCreep(creep: Creep, bodyPartsCount?: number): ReturnConstOk | ReturnConstErrNotOwner | ReturnConstErrNotFound | ReturnConstErrNotEnough | ReturnConstErrInvalidTarget | ReturnConstErrNotInRange;
    /**
     * Produce mineral compounds using reagents from two another labs. Each lab has to be within 2 squares range. The same input labs can be used by many output labs
     * @param lab1 The first source lab.
     * @param lab2 The second source lab.
     */
    runReaction(lab1: StructureLab, lab2: StructureLab): ReturnConstOk | ReturnConstErrNotOwner | ReturnConstErrNotEnough | ReturnConstErrInvalidTarget | ReturnConstErrFull | ReturnConstErrNotInRange | ReturnConstErrInvalidArgs | ReturnConstErrTired;
    /**
     * DEPRECATED: Please use Creep.withdraw instead.
     * Transfer resource from this structure to a creep. The target has to be at adjacent square.
     * @param target The target object.
     * @param resourceType One of the RESOURCE_* constants.
     * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
     * @deprecated
     */
    transfer(target: Creep, resourceType: ResourceConst, amount?: number): TransferEnergyReturn | ReturnConstErrInvalidArgs;
}
interface StructureLabConstructor extends _Constructor<StructureLab>, _ConstructorById<StructureLab> {
}
declare const StructureLab: StructureLabConstructor;
/**
 * Sends any resources to a Terminal in another room.
 */
interface StructureTerminal extends OwnedStructure {
    readonly prototype: StructureTerminal;
    structureType: StructureConstTerminal;
    /**
     * An object with the storage contents. Each object key is one of the RESOURCE_* constants, values are resources amounts.
     */
    store: StoreDefinition;
    /**
     * The total amount of resources the storage can contain.
     */
    storeCapacity: number;
    /**
     * Sends resource to a Terminal in another room with the specified name.
     * @param resourceType One of the RESOURCE_* constants.
     * @param amount The amount of resources to be sent. The minimum amount is 100.
     * @param destination The name of the target room. You don't have to gain visibility in this room.
     * @param description The description of the transaction. It is visible to the recipient. The maximum length is 100 characters.
     */
    send(resourceType: ResourceConst, amount: number, destination: string, description?: string): ReturnConstOk | ReturnConstErrNotOwner | ReturnConstErrNotEnough | ReturnConstErrInvalidArgs;
    /**
     * DEPRECATED: Please use Creep.withdraw instead.
     * Transfer resource from this terminal to a creep. The target has to be at adjacent square.
     * @param target The target object.
     * @param resourceType One of the RESOURCE_* constants.
     * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
     * @deprecated
     */
    transfer(target: Creep, resourceType: ResourceConst, amount?: number): TransferEnergyReturn | ReturnConstErrInvalidArgs;
}
interface StructureTerminalConstructor extends _Constructor<StructureTerminal>, _ConstructorById<StructureTerminal> {
}
declare const StructureTerminal: StructureTerminalConstructor;
/**
 * Contains up to 2,000 resource units. Can be constructed in neutral rooms. Decays for 5,000 hits per 100 ticks.
 */
interface StructureContainer extends Structure {
    readonly prototype: StructureContainer;
    structureType: StructureConstContainer;
    /**
     * An object with the structure contents. Each object key is one of the RESOURCE_* constants, values are resources
     * amounts. Use _.sum(structure.store) to get the total amount of contents
     */
    store: StoreDefinition;
    /**
     * The total amount of resources the structure can contain.
     */
    storeCapacity: number;
    /**
     * DEPRECATED: Please use Creep.withdraw instead.
     * Transfer resource from this structure to a creep. The target has to be at adjacent square.
     * @param target The target object.
     * @param resourceType One of the RESOURCE_* constants.
     * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
     * @deprecated
     */
    transfer(target: Creep, resourceType: ResourceConst, amount?: number): ReturnConstOk | ReturnConstErrNotOwner | ReturnConstErrNotEnough | ReturnConstErrInvalidTarget | ReturnConstErrFull | ReturnConstErrNotInRange | ReturnConstErrInvalidArgs;
}
interface StructureContainerConstructor extends _Constructor<StructureContainer>, _ConstructorById<StructureContainer> {
}
declare const StructureContainer: StructureContainerConstructor;
/**
 * Launches a nuke to another room dealing huge damage to the landing area.
 * Each launch has a cooldown and requires energy and ghodium resources. Launching
 * creates a Nuke object at the target room position which is visible to any player
 * until it is landed. Incoming nuke cannot be moved or cancelled. Nukes cannot
 * be launched from or to novice rooms.
 */
interface StructureNuker extends OwnedStructure {
    readonly prototype: StructureNuker;
    structureType: StructureConstNuker;
    /**
     * The amount of energy contained in this structure.
     */
    energy: number;
    /**
     * The total amount of energy this structure can contain.
     */
    energyCapacity: number;
    /**
     * The amount of energy contained in this structure.
     */
    ghodium: number;
    /**
     * The total amount of energy this structure can contain.
     */
    ghodiumCapacity: number;
    /**
     * The amount of game ticks the link has to wait until the next transfer is possible.
     */
    cooldown: number;
    /**
     * Launch a nuke to the specified position.
     * @param pos The target room position.
     */
    launchNuke(pos: RoomPosition): ReturnConstOk | ReturnConstErrNotOwner | ReturnConstErrNotEnough | ReturnConstErrInvalidTarget | ReturnConstErrNotInRange | ReturnConstErrTired | ReturnConstErrRCL;
}
interface StructureNukerConstructor extends _Constructor<StructureNuker>, _ConstructorById<StructureNuker> {
}
declare const StructureNuker: StructureNukerConstructor;
/**
 * A non-player structure.
 * Instantly teleports your creeps to a distant room acting as a room exit tile.
 * Portals appear randomly in the central room of each sector.
 */
interface StructurePortal extends Structure {
    readonly prototype: StructurePortal;
    structureType: StructureConstPortal;
    /**
     * The position object in the destination room.
     */
    destination: RoomPosition;
    /**
     * The amount of game ticks when the portal disappears, or undefined when the portal is stable.
     */
    ticksToDecay: number | undefined;
}
interface StructurePortalConstructor extends _Constructor<StructurePortal>, _ConstructorById<StructurePortal> {
}
declare const StructurePortal: StructurePortalConstructor;
