declare type onErrorQuery = (error: unknown, variables: unknown, context: unknown) => Promise<unknown> | void

declare type onSuccessQuery = (data: unknown, variables: unknown, context: unknown) => Promise<unknown> | void
