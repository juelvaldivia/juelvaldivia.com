type Subscription<State> = (state: State) => void;

export abstract class HandlerState<State> {
  private internalState: State;
  private listeners: Subscription<State>[] = [];

  constructor(initialState: State) {
    this.internalState = initialState;
  }

  public get state(): State {
    return this.internalState;
  }

  changeState(newState: State) {
    this.internalState = newState;

    if (this.listeners.length > 0) {
      this.listeners.forEach(listener => listener(this.state));
    }
  }

  subscribe(listener: Subscription<State>) {
    this.listeners.push(listener);
  }

  unsubscribe(listener: Subscription<State>) {
    const index = this.listeners.indexOf(listener);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }
}
