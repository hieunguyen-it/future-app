import { combineReducers } from '@reduxjs/toolkit'

import { authReducer, authSlice } from './slices'

const rootStore = {
    [authSlice.name]: authReducer
}

export const createReducer = () => {
    return combineReducers({ ...rootStore })
}
