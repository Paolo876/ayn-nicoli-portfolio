import { createContext, useReducer, useEffect } from 'react'
import { auth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { useCollection } from '../hooks/useCollection'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    case 'AUTH_IS_READY':
      return { ...state, user: action.payload, authIsReady: true }
    case 'SET_PROJECTS':
      const architecturalProjects = action.payload.find(item => item.id === "architectural")
      const graphicProjects = action.payload.find(item => item.id === "graphic");

      return { ...state, architecturalProjects, graphicProjects }
    default:
      return state
  }
}


export const AuthContextProvider = ({ children }) => {
  const { documents, isLoading, error } = useCollection('projects');
  const [state, dispatch] = useReducer(authReducer, { 
    user: null,
    authIsReady: false,
    architecturalProjects: null,
    graphicProjects: null,
    isLoading,
    error
  })

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      dispatch({ type: 'AUTH_IS_READY', payload: user })

      // unsub()   //unsubscribe to prevent running this again when auth state changes
    })

    return () => unsub();
  }, [])

  //get projects
  useEffect(() => {
    if(documents) dispatch({ type: 'SET_PROJECTS', payload: documents })    
  }, [documents])
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}