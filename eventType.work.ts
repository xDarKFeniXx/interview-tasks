enum EVENT_TYPE {
    AGENT_INSTANCE_CREATED = "AGENT_INSTANCE_CREATED",
    USER_CREATED = "USER_CREATED"
}

interface IAgentInstanceCreatedEvent {
    id: number
    rdcInstanceId: number
    rdcId: string
}
interface IUserCreatedEvent {
    id: number
    rdcInstanceId: number
    rdcId: string
}

interface IMappedEventType {
    [EVENT_TYPE.AGENT_INSTANCE_CREATED]: IAgentInstanceCreatedEvent
    [EVENT_TYPE.USER_CREATED]: IUserCreatedEvent
}

interface IWebScoketMessage<T extends EVENT_TYPE=EVENT_TYPE>{
    readonly notificationType: T;
    readonly data: IMappedEventType[T];
}

const queue=new Set<IWebScoketMessage>()

const waitForEvent = async <T extends EVENT_TYPE>(type:T, data?:Partial<IMappedEventType[T]>):Promise<IMappedEventType[T]|undefined>=>{
    const element= Array.from(queue).find(el=>el.notificationType===type)
    return element?.data
}

const fff=waitForEvent(EVENT_TYPE.AGENT_INSTANCE_CREATED, {rdcInstanceId:1})