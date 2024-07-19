import { Middleware } from "@reduxjs/toolkit"

export const loggerMidelware : Middleware = store => next => action => {

    try {
        console.log('dispatching', action)
        console.log(store.getState());
        return next(action)
    } catch (error) {
        console.log('monitoreo',error)
        throw error
    }
}