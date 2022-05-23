import { makeStore } from "./index";
import type { IConvertStore } from './convertStore/types';

export interface StoreState {
  convertStore: IConvertStore,
}

type Store = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<Store['getState']>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = Store['dispatch'];
