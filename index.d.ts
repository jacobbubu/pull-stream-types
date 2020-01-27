declare module 'pull-stream' {
  namespace Pull {
    type Abort = Error | boolean | null
    type EndOrError = Error | boolean | null
    type CbError = Error | null
    type SourceCallback<T> = (end: EndOrError, data?: T) => void

    type Source<T> = (endOrError: Abort, cb: SourceCallback<T>) => void
    type Sink<T> = (source: Source<T>) => void
    type Through<T, U> = (source: Source<T>) => Source<U>
  }

  function Pull(): undefined
  function Pull<In, Out>(t1: Pull.Through<In, Out>): Pull.Through<In, Out>

  function Pull<In, Out>(source: Pull.Source<In>, t1: Pull.Through<In, Out>): Pull.Source<Out>
  function Pull<In, P1, Out>(
    t1: Pull.Through<In, P1>,
    t2: Pull.Through<P1, Out>
  ): Pull.Through<In, Out>
  function Pull<InOut>(source: Pull.Source<InOut>, sink: Pull.Sink<InOut>): undefined

  function Pull<In, P1, P2, Out>(
    t1: Pull.Through<In, P1>,
    t2: Pull.Through<P1, P2>,
    t3: Pull.Through<P2, Out>
  ): Pull.Through<In, Out>
  function Pull<In, P1, Out>(
    source: Pull.Source<In>,
    t1: Pull.Through<In, P1>,
    t2: Pull.Through<P1, Out>
  ): Pull.Source<Out>
  function Pull<In, Out>(
    source: Pull.Source<In>,
    t1: Pull.Through<In, Out>,
    sink: Pull.Sink<Out>
  ): undefined

  function Pull<In, P1, Out>(
    source: Pull.Source<In>,
    t1: Pull.Through<In, P1>,
    t2: Pull.Through<P1, Out>,
    sink: Pull.Sink<Out>
  ): undefined
  function Pull<In, P1, P2, Out>(
    source: Pull.Source<In>,
    t1: Pull.Through<In, P1>,
    t2: Pull.Through<P1, P2>,
    t3: Pull.Through<P2, Out>,
    sink: Pull.Sink<Out>
  ): undefined

  function Pull<In, P1, P2, P3, Out>(
    source: Pull.Source<In>,
    t1: Pull.Through<In, P1>,
    t2: Pull.Through<P1, P2>,
    t3: Pull.Through<P2, P3>,
    t4: Pull.Through<P3, Out>,
    sink: Pull.Sink<Out>
  ): undefined
  function Pull<In, P1, P2, P3, P4, Out>(
    source: Pull.Source<In>,
    t1: Pull.Through<In, P1>,
    t2: Pull.Through<P1, P2>,
    t3: Pull.Through<P2, P3>,
    t4: Pull.Through<P3, P4>,
    t5: Pull.Through<P4, Out>,
    sink: Pull.Sink<Out>
  ): undefined

  function Pull<In>(sink: Pull.Sink<In>): Pull.Sink<In>
  function Pull<In, Out>(t1: Pull.Through<In, Out>, sink: Pull.Sink<Out>): Pull.Sink<In>
  function Pull<In, P1, Out>(
    t1: Pull.Through<In, P1>,
    t2: Pull.Through<P1, Out>,
    sink: Pull.Sink<Out>
  ): Pull.Sink<In>
  function Pull<In, P1, P2, Out>(
    t1: Pull.Through<In, P1>,
    t2: Pull.Through<P1, P2>,
    t3: Pull.Through<P2, Out>,
    sink: Pull.Sink<Out>
  ): Pull.Sink<In>
  function Pull<In, P1, P2, P3, Out>(
    t1: Pull.Through<In, P1>,
    t2: Pull.Through<P1, P2>,
    t3: Pull.Through<P2, P3>,
    t4: Pull.Through<P3, Out>,
    sink: Pull.Sink<Out>
  ): Pull.Sink<In>
  function Pull<In, P1, P2, P3, P4, Out>(
    t1: Pull.Through<In, P1>,
    t2: Pull.Through<P1, P2>,
    t3: Pull.Through<P2, P3>,
    t4: Pull.Through<P3, P4>,
    t5: Pull.Through<P4, Out>,
    sink: Pull.Sink<Out>
  ): Pull.Sink<In>
  function Pull<In, P1, P2, P3, P4, P5, Out>(
    t1: Pull.Through<In, P1>,
    t2: Pull.Through<P1, P2>,
    t3: Pull.Through<P2, P3>,
    t4: Pull.Through<P3, P4>,
    t5: Pull.Through<P4, P5>,
    t6: Pull.Through<P5, Out>,
    sink: Pull.Sink<Out>
  ): Pull.Sink<In>

  function Pull<Out>(source: Pull.Source<Out>): Pull.Source<Out>

  function Pull<In, P1, P2, Out>(
    source: Pull.Source<In>,
    t1: Pull.Through<In, P1>,
    t2: Pull.Through<P1, P2>,
    t3: Pull.Through<P2, Out>
  ): Pull.Source<Out>
  function Pull<In, P1, P2, P3, Out>(
    source: Pull.Source<In>,
    t1: Pull.Through<In, P1>,
    t2: Pull.Through<P1, P2>,
    t3: Pull.Through<P2, P3>,
    t4: Pull.Through<P3, Out>
  ): Pull.Source<Out>
  function Pull<In, P1, P2, P3, P4, Out>(
    source: Pull.Source<In>,
    t1: Pull.Through<In, P1>,
    t2: Pull.Through<P1, P2>,
    t3: Pull.Through<P2, P3>,
    t4: Pull.Through<P3, P4>,
    t5: Pull.Through<P4, Out>
  ): Pull.Source<Out>
  function Pull<In, P1, P2, P3, P4, P5, Out>(
    source: Pull.Source<In>,
    t1: Pull.Through<In, P1>,
    t2: Pull.Through<P1, P2>,
    t3: Pull.Through<P2, P3>,
    t4: Pull.Through<P3, P4>,
    t5: Pull.Through<P4, P5>,
    t6: Pull.Through<P5, Out>
  ): Pull.Source<Out>

  function Pull<In, P1, P2, P3, Out>(
    t1: Pull.Through<In, P1>,
    t2: Pull.Through<P1, P2>,
    t3: Pull.Through<P2, P3>,
    t4: Pull.Through<P3, Out>
  ): Pull.Through<In, Out>
  function Pull<In, P1, P2, P3, P4, Out>(
    t1: Pull.Through<In, P1>,
    t2: Pull.Through<P1, P2>,
    t3: Pull.Through<P2, P3>,
    t4: Pull.Through<P3, P4>,
    t5: Pull.Through<P4, Out>
  ): Pull.Through<In, Out>
  function Pull<In, P1, P2, P3, P4, P5, Out>(
    t1: Pull.Through<In, P1>,
    t2: Pull.Through<P1, P2>,
    t3: Pull.Through<P2, P3>,
    t4: Pull.Through<P3, P4>,
    t5: Pull.Through<P4, P5>,
    t6: Pull.Through<P5, Out>
  ): Pull.Through<In, Out>

  function Pull(
    ...pullStreams: ReadonlyArray<Pull.Source<any> | Pull.Sink<any> | Pull.Through<any, any>>
  ): Pull.Source<any> | Pull.Sink<any> | Pull.Through<any, any> | undefined

  // Sources
  namespace Pull {
    function count(max?: number, onAbort?: (err?: CbError) => void): Pull.Source<number>
    function empty(): Pull.Source<never>
    function error(): Pull.Source<never>
    function infinite<T = number>(
      generator?: () => T,
      onAbort?: (err?: CbError) => void
    ): Pull.Source<T>
    function keys(
      obj: object | ReadonlyArray<any>,
      onAbort?: (err?: CbError) => void
    ): Pull.Source<string>
    function once<T>(value?: T, onAbort?: (err?: CbError) => void): Pull.Source<T>
    function values<T>(
      arrayOrObject?: Record<any, T> | ReadonlyArray<T>,
      onAbort?: (err?: CbError) => void
    ): Pull.Source<T>
  }

  // Sinks
  namespace Pull {
    function collect<T>(cb?: (err: CbError, results: T[]) => void): Pull.Sink<T>
    function concat(cb?: (err: CbError, result: string) => void): Pull.Sink<string>
    function drain<T>(op?: (data: T) => unknown, cb?: (err: CbError) => void): Pull.Sink<T>
    function find<T>(cb?: (err: CbError, results: T[]) => void): Pull.Sink<T>
    function find<T>(
      test: ((data: T) => boolean) | keyof T,
      cb?: (err: CbError, result: T) => void
    ): Pull.Sink<T>
    function log(): Pull.Sink<any>
    function onEnd(cb?: (err: CbError) => void): Pull.Sink<any>
    function reduce<T, U>(
      reducer: (acc: U | null, data: T) => U,
      cb: (err: CbError, result: U) => void
    ): Pull.Sink<T>
    function reduce<T, U>(
      reducer: (acc: U, data: T) => U,
      initial: U,
      cb: (err: CbError, result: U) => void
    ): Pull.Sink<T>
  }

  // Throughs
  namespace Pull {
    function asyncMap<In, Out>(
      fn: (data: In, cb: (err: CbError, result: Out) => void) => any
    ): Pull.Through<In, Out>
    function filterNot<InOut>(test: (data: InOut) => boolean): Pull.Through<InOut, InOut>
    function filter<In, Out extends In>(test: (data: In) => data is Out): Pull.Through<In, Out>
    function filter<InOut>(test: (data: InOut) => boolean): Pull.Through<InOut, InOut>
    function flatten<Out>(): Pull.Through<
      ReadonlyArray<Out | Pull.Source<Out> | Pull.Through<any, Out>>,
      Out
    >
    function map<In, Out>(fn: (data: In) => Out): Pull.Through<In, Out>
    function nonUnique<InOut>(
      prop?: ((data: InOut) => unknown) | keyof InOut
    ): Pull.Through<InOut, InOut>
    function take<InOut>(n: number): Pull.Through<InOut, InOut>
    function take<InOut>(
      testFn: (data: InOut) => boolean,
      opts?: { last: boolean }
    ): Pull.Through<InOut, InOut>
    function through<InOut>(
      op?: (data: InOut) => unknown,
      onEnd?: (err: CbError) => void
    ): Pull.Through<InOut, InOut>
    function unique<InOut>(
      prop?: ((data: InOut) => unknown) | keyof InOut
    ): Pull.Through<InOut, InOut>
  }
  export = Pull
}
