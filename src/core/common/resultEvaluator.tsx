type Ok<OkValue> = { kind: 'ok'; okValue: OkValue };
type withError<ErrorValue> = { kind: 'withError'; errorValue: ErrorValue };

type ResultValue<OkValue, ErrorValue> = Ok<OkValue> | withError<ErrorValue>;

export class ResultEvaluator<OkValue, ErrorValue> {
  private constructor(private readonly value: ResultValue<OkValue, ErrorValue>) {}

  isOk(): boolean {
    return this.value.kind === 'ok';
  }

  isWithError(): boolean {
    return this.value.kind === 'withError';
  }

  evaluate<T>(okFn: (okValue: OkValue) => T, withErrorFn: (errorValue: ErrorValue) => T): T {
    switch (this.value.kind) {
      case 'ok':
        return okFn(this.value.okValue);
      case 'withError':
        return withErrorFn(this.value.errorValue);
    }
  }

  static ok<OkValue, ErrorValue>(value: OkValue) {
    return new ResultEvaluator<OkValue, ErrorValue>({ kind: 'ok', okValue: value });
  }

  static withError<OkValue, ErrorValue>(value: ErrorValue) {
    return new ResultEvaluator<OkValue, ErrorValue>({ kind: 'withError', errorValue: value });
  }
}
