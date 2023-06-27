import { useEffect, useState } from "react";
import { HandlerState } from "./handlerState";

export function useHandlerState<State>(handlerState: HandlerState<State>) {
    const [state, setState] = useState(handlerState.state);

    useEffect(() => {
        const stateSubscription = (state: State) => {
            setState(state);
        };

        handlerState.subscribe(stateSubscription);

        return () => handlerState.unsubscribe(stateSubscription);
    }, [handlerState]);

    return state;
}
