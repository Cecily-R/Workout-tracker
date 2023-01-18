import { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext()

export const WorkoutsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return {
        workouts: AuthenticatorAssertionResponse.payload
      }
    case 'CREATE_WORKOUTS':
      return {
        workouts: [action.payload]
      }
  }
}

const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null
  })
  
  return(
    <WorkoutsContext.Provider value>
      { children }
    </WorkoutsContext.Provider>
  )
}