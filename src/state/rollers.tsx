import React, {
  createContext,
  Dispatch,
  useReducer, 
  ReactNode
} from 'react'

export interface Roller {
  name: string
  count: number
  sides: number
  bonus: number
}

export interface RollersState {
  rollers: Roller[]
}

export enum RollersActionType {
  ADD_ROLLER
}

export interface RollersAction {
  type: RollersActionType
  roller?: Roller
}

const initialState: RollersState = {
  rollers: []
}

export const RollersContext = createContext([
  initialState,
  ((a: RollersAction) => a) as Dispatch<RollersAction>
])

const reducer = (state: RollersState, action: RollersAction) => {
  switch (action.type) {
    case RollersActionType.ADD_ROLLER:
      if (!action.roller) {
        throw new Error('action must provide roller')
      }

      return {
        ...state,
        rollers: [ action.roller, ...state.rollers ]
      }

    default:
      return state
  }
}

export const RollersProvider = ({ children }: { children: ReactNode }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  return <RollersContext.Provider value={[ state, dispatch ]}>
    { children }
  </RollersContext.Provider>
}
