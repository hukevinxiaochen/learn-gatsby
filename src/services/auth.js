/* HELPERS */ 
// checks if browser globals are available
export const isBrowser = () => typeof window !== "undefined"

// if isBrowser
// && window.localStorage.getItem("gatsbyUser") returns a truthy value
// returns aforementioned value, i.e. there is a logged in user
// : otherwise returns an empty object {}
export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

// sets a gatsbyUser in window.localStorage
const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

/* EXPORTS */
// login handler function that sets user if given
// john and pass
export const handleLogin = ({ username, password }) => {
  if (username === `full` && password === `stack`) {
    return setUser({
      username: `fsa`,
      name: `kevin`,
      email: `kevin@example.org`,
    })
  }

  return false
}

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.username
}

export const logout = callback => {
  setUser({})
  callback()
}
