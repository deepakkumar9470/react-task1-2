import { configureStore } from '@reduxjs/toolkit'
// import {persistReducer,persistStore} from 'redux-persist'
// import storage from 'redux-persist/lib/storage';

import todoReducer from './features/todoSlice'



// const persistConfig = {
//   key : 'persist-store',
//   storage
// }


// const persistedReducer = persistReducer(persistConfig,todoReducer)



export const store = configureStore({
  reducer: {
        todoreducer : todoReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  
});

// export const persistor = persistStore(store)