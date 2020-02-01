// Utility Action Type
export type ActionType<T, P = null> = {
  type: T;
  data?: P;
};
