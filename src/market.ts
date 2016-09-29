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
    orders: { [key: string]: Order };
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

//No static is available

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
