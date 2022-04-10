export const SET_LAUNCH = 'SET_LAUNCH'

interface ILaunch {
    launches: object[]
}

interface IAction {
    type: string
    payload?: any
}

const initialState: ILaunch = {
    launches: []
}

export default function reducer(state = initialState, action: IAction):ILaunch {
    switch(action.type) {
        case SET_LAUNCH:
            return {
                ...state,
                launches: action.payload
            }
        default:
            return state
    }
}

export type RootReducer = ReturnType<typeof reducer>