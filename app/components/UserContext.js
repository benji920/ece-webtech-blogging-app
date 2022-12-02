import {createContext, useState} from 'react'

const UserContext = createContext()

export default UserContext

export const UserContextProvider = ({
  children
}) => {
  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider
      value={{
        user: user,
        login: (user) => {
          setUser(user)
        },
        logout: () => {
          setUser(null)
        }
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
