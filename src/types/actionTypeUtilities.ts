// Utility Action Types

export type ActionType<T> = {
  type: T;
};

export type ActionTypeWithPayload<T, P> = {
  type: T;
  data: P;
};
