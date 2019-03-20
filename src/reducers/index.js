import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import { reducer as formReducer } from 'redux-form'
import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import cities from './city'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['form'],
}

const reducers = combineReducers({
    cities,
    form: formReducer
})
const persistedReducer = persistReducer(persistConfig, reducers)
const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

export const store = createStore(persistedReducer, applyMiddleware(...middleware))
export const persistor = persistStore(store)
