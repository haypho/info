import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';

export type { RootState } from './reducer';

export default configureStore({ reducer: rootReducer });
