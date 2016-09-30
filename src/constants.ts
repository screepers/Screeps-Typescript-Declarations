/**
 * This file is Screeps API description file.
 * This might need some updates when Screeps publishes new features or changes it's existing API
 */

type FindConst = FindConstExit | FindConstExitAny | FindConstTypeCreep | FindConstTypeSource | FindConstTypeResource | FindConstTypeStructure | FindConstTypeFlag | FindConstTypeConstructionSite | FindConstTypeSpawn | FindConstTypeMineral | FindConstTypeNuke;

type FindConstExit = FindConstExitTop | FindConstExitRight | FindConstExitBottom | FindConstExitLeft;
type FindConstExitTop = DirConstTop;
type FindConstExitRight = DirConstRight;
type FindConstExitBottom = DirConstBottom;
type FindConstExitLeft = DirConstLeft;
type FindConstExitAny = 10;

type FindConstTypeCreep = FindConstCreep | FindConstMyCreep | FindConstHostileCreep;
type FindConstCreep = 101;
type FindConstMyCreep = 102;
type FindConstHostileCreep = 103;

type FindConstTypeSource = FindConstSourceActive | FindConstSource;
type FindConstSourceActive = 104;
type FindConstSource = 105;

type FindConstTypeResource = FindConstResource;
type FindConstResource = 106;

type FindConstTypeStructure = FindConstStructure | FindConstMyStructure | FindConstHostileStructure;
type FindConstStructure = 107;
type FindConstMyStructure = 108;
type FindConstHostileStructure = 109;

type FindConstTypeFlag = FindConstFlag;
type FindConstFlag = 110;

type FindConstTypeConstructionSite = FindConstConstructionSite | FindConstMyConstructionSite | FindConstHostileConstructionSite;
type FindConstConstructionSite = 111;
type FindConstMyConstructionSite = 114;
type FindConstHostileConstructionSite = 115;

type FindConstTypeSpawn = FindConstMySpawn | FindConstHostileSpawn;
type FindConstMySpawn = 112;
type FindConstHostileSpawn = 113;

type FindConstTypeMineral = FindConstMineral;
type FindConstMineral = 116;

type FindConstTypeNuke = FindConstNuke;
type FindConstNuke = 117;

declare var FIND_EXIT_TOP:                   FindConstExitTop;
declare var FIND_EXIT_RIGHT:                 FindConstExitRight;
declare var FIND_EXIT_BOTTOM:                FindConstExitBottom;
declare var FIND_EXIT_LEFT:                  FindConstExitLeft;
declare var FIND_EXIT:                       FindConstExitAny;
declare var FIND_CREEPS:                     FindConstCreep;
declare var FIND_MY_CREEPS:                  FindConstMyCreep;
declare var FIND_HOSTILE_CREEPS:             FindConstHostileCreep;
declare var FIND_SOURCES_ACTIVE:             FindConstSourceActive;
declare var FIND_SOURCES:                    FindConstSource;
declare var FIND_DROPPED_ENERGY:             FindConstResource;
declare var FIND_DROPPED_RESOURCES:          FindConstResource;
declare var FIND_STRUCTURES:                 FindConstStructure;
declare var FIND_MY_STRUCTURES:              FindConstMyStructure;
declare var FIND_HOSTILE_STRUCTURES:         FindConstHostileStructure;
declare var FIND_FLAGS:                      FindConstFlag;
declare var FIND_CONSTRUCTION_SITES:         FindConstConstructionSite;
declare var FIND_MY_SPAWNS:                  FindConstMySpawn;
declare var FIND_HOSTILE_SPAWNS:             FindConstHostileSpawn;
declare var FIND_MY_CONSTRUCTION_SITES:      FindConstMyConstructionSite;
declare var FIND_HOSTILE_CONSTRUCTION_SITES: FindConstHostileConstructionSite;
declare var FIND_MINERALS:                   FindConstMineral;
declare var FIND_NUKES:                      FindConstNuke;

type DirConst = DirConstTop | DirConstTopRight | DirConstRight | DirConstBottomRight | DirConstBottom | DirConstBottomLeft | DirConstLeft | DirConstTopLeft;
type DirConstTop = 1;
type DirConstTopRight = 2;
type DirConstRight = 3;
type DirConstBottomRight = 4;
type DirConstBottom = 5;
type DirConstBottomLeft = 6;
type DirConstLeft = 7;
type DirConstTopLeft = 8;

declare var TOP:          DirConstTop;
declare var TOP_RIGHT:    DirConstTopRight;
declare var RIGHT:        DirConstRight;
declare var BOTTOM_RIGHT: DirConstBottomRight;
declare var BOTTOM:       DirConstBottom;
declare var BOTTOM_LEFT:  DirConstBottomLeft;
declare var LEFT:         DirConstLeft;
declare var TOP_LEFT:     DirConstTopLeft;

type ReturnConst =
    ReturnConstOk
    | ReturnConstErrNotOwner
    | ReturnConstErrNoPath
    | ReturnConstErrNameExists
    | ReturnConstErrBusy
    | ReturnConstErrNotFound
    | ReturnConstErrNotEnough
    | ReturnConstErrInvalidTarget
    | ReturnConstErrFull
    | ReturnConstErrNotInRange
    | ReturnConstErrInvalidArgs
    | ReturnConstErrTired
    | ReturnConstErrNoBodypart
    | ReturnConstErrRCL
    | ReturnConstErrGCL
;
type ReturnConstOk = 0;
type ReturnConstErrNotOwner = -1;
type ReturnConstErrNoPath = -2;
type ReturnConstErrNameExists = -3;
type ReturnConstErrBusy = -4;
type ReturnConstErrNotFound = -5;
type ReturnConstErrNotEnough = -6;
type ReturnConstErrInvalidTarget = -7;
type ReturnConstErrFull = -8;
type ReturnConstErrNotInRange = -9;
type ReturnConstErrInvalidArgs = -10;
type ReturnConstErrTired = -11;
type ReturnConstErrNoBodypart = -12;
type ReturnConstErrRCL = -14;
type ReturnConstErrGCL = -15;

declare var OK:                        ReturnConstOk;
declare var ERR_NOT_OWNER:             ReturnConstErrNotOwner;
declare var ERR_NO_PATH:               ReturnConstErrNoPath;
declare var ERR_NAME_EXISTS:           ReturnConstErrNameExists;
declare var ERR_BUSY:                  ReturnConstErrBusy;
declare var ERR_NOT_FOUND:             ReturnConstErrNotFound;
declare var ERR_NOT_ENOUGH_RESOURCES:  ReturnConstErrNotEnough;
declare var ERR_NOT_ENOUGH_ENERGY:     ReturnConstErrNotEnough;
declare var ERR_INVALID_TARGET:        ReturnConstErrInvalidTarget;
declare var ERR_FULL:                  ReturnConstErrFull;
declare var ERR_NOT_IN_RANGE:          ReturnConstErrNotInRange;
declare var ERR_INVALID_ARGS:          ReturnConstErrInvalidArgs;
declare var ERR_TIRED:                 ReturnConstErrTired;
declare var ERR_NO_BODYPART:           ReturnConstErrNoBodypart;
declare var ERR_NOT_ENOUGH_EXTENSIONS: ReturnConstErrNotEnough;
declare var ERR_RCL_NOT_ENOUGH:        ReturnConstErrRCL;
declare var ERR_GCL_NOT_ENOUGH:        ReturnConstErrGCL;

type ColorConst = ColorConstRed | ColorConstPurple | ColorConstBlue | ColorConstCyan | ColorConstGreen | ColorConstYellow | ColorConstOrange | ColorConstBrown | ColorConstGrey | ColorConstWhite;
type ColorConstRed = 1;
type ColorConstPurple = 2;
type ColorConstBlue = 3;
type ColorConstCyan = 4;
type ColorConstGreen = 5;
type ColorConstYellow = 6;
type ColorConstOrange = 7;
type ColorConstBrown = 8;
type ColorConstGrey = 9;
type ColorConstWhite = 10;

declare var COLOR_RED:    ColorConstRed;
declare var COLOR_PURPLE: ColorConstPurple;
declare var COLOR_BLUE:   ColorConstBlue;
declare var COLOR_CYAN:   ColorConstCyan;
declare var COLOR_GREEN:  ColorConstGreen;
declare var COLOR_YELLOW: ColorConstYellow;
declare var COLOR_ORANGE: ColorConstOrange;
declare var COLOR_BROWN:  ColorConstBrown;
declare var COLOR_GREY:   ColorConstGrey;
declare var COLOR_WHITE:  ColorConstWhite;
declare var COLORS_ALL:   ColorConst[];

type LookConst = LookConstCreep | LookConstEnergy | LookConstResource | LookConstSource | LookConstMineral | LookConstStructure | LookConstFlag | LookConstConstructionSite | LookConstNuke | LookConstTerrain;
type LookConstCreep = "creep";
type LookConstEnergy = "energy"
type LookConstResource = "resource";
type LookConstSource = "source";
type LookConstMineral = "mineral";
type LookConstStructure = "structure";
type LookConstFlag = "flag";
type LookConstConstructionSite = "constructionSite";
type LookConstNuke = "nuke";
type LookConstTerrain = "terrain";

declare var LOOK_CREEPS:             LookConstCreep;
declare var LOOK_ENERGY:             LookConstEnergy;
declare var LOOK_RESOURCES:          LookConstResource;
declare var LOOK_SOURCES:            LookConstSource;
declare var LOOK_MINERALS:           LookConstMineral;
declare var LOOK_STRUCTURES:         LookConstStructure;
declare var LOOK_FLAGS:              LookConstFlag;
declare var LOOK_CONSTRUCTION_SITES: LookConstConstructionSite;
declare var LOOK_NUKES:              LookConstNuke;
declare var LOOK_TERRAIN:            LookConstTerrain;

type BodypartConst = BodypartConstMove | BodypartConstWork | BodypartConstCarry | BodypartConstAttack | BodypartConstRangedAttack | BodypartConstTough | BodypartConstHeal | BodypartConstClaim;
type BodypartConstMove = "move";
type BodypartConstWork = "work";
type BodypartConstCarry = "carry";
type BodypartConstAttack = "attack";
type BodypartConstRangedAttack = "ranged_attack";
type BodypartConstTough = "tough";
type BodypartConstHeal = "heal";
type BodypartConstClaim = "claim";

declare var MOVE: BodypartConstMove;
declare var WORK: BodypartConstWork;
declare var CARRY: BodypartConstCarry;
declare var ATTACK: BodypartConstAttack;
declare var RANGED_ATTACK: BodypartConstRangedAttack;
declare var TOUGH: BodypartConstTough;
declare var HEAL: BodypartConstHeal;
declare var CLAIM: BodypartConstClaim;
declare var BODYPARTS_ALL: BodypartConst[];

type StructureConst =
    StructureConstSpawn
    | StructureConstExtension
    | StructureConstRoad
    | StructureConstWall
    | StructureConstRampart
    | StructureConstKeeperLair
    | StructureConstPortal
    | StructureConstController
    | StructureConstLink
    | StructureConstStorage
    | StructureConstTower
    | StructureConstObserver
    | StructureConstPowerBank
    | StructureConstPowerSpawn
    | StructureConstExtractor
    | StructureConstLab
    | StructureConstTerminal
    | StructureConstContainer
    | StructureConstNuker
;
type StructureConstSpawn = "spawn";
type StructureConstExtension = "extension";
type StructureConstRoad = "road";
type StructureConstWall = "constructedWall";
type StructureConstRampart = "rampart";
type StructureConstKeeperLair = "keeperLair";
type StructureConstPortal = "portal";
type StructureConstController = "controller";
type StructureConstLink = "link";
type StructureConstStorage = "storage";
type StructureConstTower = "tower";
type StructureConstObserver = "observer";
type StructureConstPowerBank = "powerBank";
type StructureConstPowerSpawn = "powerSpawn";
type StructureConstExtractor = "extractor";
type StructureConstLab = "lab";
type StructureConstTerminal = "terminal";
type StructureConstContainer = "container";
type StructureConstNuker = "nuker";

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

type ObjectConst = StructureConst | "creep" | "wall";

type ResourceConst =
    ResourceConstEnergy
    | ResourceConstPower
    | ResourceConstH
    | ResourceConstO
    | ResourceConstU
    | ResourceConstL
    | ResourceConstK
    | ResourceConstZ
    | ResourceConstX
    | ResourceConstG
    | ResourceConstOH
    | ResourceConstZK
    | ResourceConstUL
    | ResourceConstUH
    | ResourceConstUO
    | ResourceConstKH
    | ResourceConstKO
    | ResourceConstLH
    | ResourceConstLO
    | ResourceConstZH
    | ResourceConstZO
    | ResourceConstGH
    | ResourceConstGO
    | ResourceConstUH2O
    | ResourceConstUHO2
    | ResourceConstKH2O
    | ResourceConstKHO2
    | ResourceConstLH2O
    | ResourceConstLHO2
    | ResourceConstZH2O
    | ResourceConstZHO2
    | ResourceConstGH2O
    | ResourceConstGHO2
    | ResourceConstXUH2O
    | ResourceConstXUHO2
    | ResourceConstXKH2O
    | ResourceConstXKHO2
    | ResourceConstXLH2O
    | ResourceConstXLHO2
    | ResourceConstXZH2O
    | ResourceConstXZHO2
    | ResourceConstXGH2O
    | ResourceConstXGHO2
;
type ResourceConstEnergy = "energy";
type ResourceConstPower = "power";
type ResourceConstH = "H";
type ResourceConstO = "O";
type ResourceConstU = "U";
type ResourceConstL = "L";
type ResourceConstK = "K";
type ResourceConstZ = "Z";
type ResourceConstX = "X";
type ResourceConstG = "G";
type ResourceConstOH = "OH";
type ResourceConstZK = "ZK";
type ResourceConstUL = "UL";
type ResourceConstUH = "UH";
type ResourceConstUO = "UO";
type ResourceConstKH = "KH";
type ResourceConstKO = "KO";
type ResourceConstLH = "LH";
type ResourceConstLO = "LO";
type ResourceConstZH = "ZH";
type ResourceConstZO = "ZO";
type ResourceConstGH = "GH";
type ResourceConstGO = "GO";
type ResourceConstUH2O = "UH2O";
type ResourceConstUHO2 = "UHO2";
type ResourceConstKH2O = "KH2O";
type ResourceConstKHO2 = "KHO2";
type ResourceConstLH2O = "LH2O";
type ResourceConstLHO2 = "LHO2";
type ResourceConstZH2O = "ZH2O";
type ResourceConstZHO2 = "ZHO2";
type ResourceConstGH2O = "GH2O";
type ResourceConstGHO2 = "GHO2";
type ResourceConstXUH2O = "XUH2O";
type ResourceConstXUHO2 = "XUHO2";
type ResourceConstXKH2O = "XKH2O";
type ResourceConstXKHO2 = "XKHO2";
type ResourceConstXLH2O = "XLH2O";
type ResourceConstXLHO2 = "XLHO2";
type ResourceConstXZH2O = "XZH2O";
type ResourceConstXZHO2 = "XZHO2";
type ResourceConstXGH2O = "XGH2O";
type ResourceConstXGHO2 = "XGHO2";

type SubscriptionTokenConst = "token";

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

type TerrainConst = "plain" | "swamp" | "wall";

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
    2: number,
    3: number,
    4: number,
    5: number,
    6: number,
    7: number,
    8: number
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

declare var CONTROLLER_LEVELS: {[level: number]: number};
declare var CONTROLLER_STRUCTURES: {[structure: string]: {[level: number]: number}};
declare var CONTROLLER_DOWNGRADE: {[level: number]: number};
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

type ModeConst = ModeConstSimulation | ModeConstSurvival | ModeConstWorld | ModeConstArena;
type ModeConstSimulation = "simulation";
type ModeConstSurvival = "survival";
type ModeConstWorld = "world";
type ModeConstArena = "arena";

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
    H: number,
    O: number,
    L: number,
    K: number,
    Z: number,
    U: number,
    X: number
}
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
    0: number,
    1: number,
    4: number
}

declare var REACTIONS: {
    [reagent: string]: {
        [reagent: string]: ResourceConst
    }
}

declare var BOOSTS: {
    [part: string]: {
        [boost: string]: {
            [action: string]: number
        }
    }
}

type OrderConst = OrderConstSell | OrderConstBuy;
type OrderConstSell = "sell";
type OrderConstBuy = "buy";

declare var ORDER_SELL: OrderConstSell;
declare var ORDER_BUY: OrderConstBuy;
