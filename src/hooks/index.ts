import React from "react"

type Message =
  | { type: "SET_USERNAME"; username: string }
  | {
      type: "LOG_IN"
    }

const init = { username: "", loggedIn: false }

const reducer = (state: typeof init, message: Message) => {
  switch (message.type) {
    case "SET_USERNAME":
      return { ...state, username: message.username }
    case "LOG_IN":
      return { ...state, loggedIn: true }
    default:
      return state
  }
}

export const useAuth = () => {
  const [{ loggedIn, username }, dispatch] = React.useReducer(reducer, init)

  const signIn = () => dispatch({ type: "LOG_IN" })
  const setUsername = (username: string) =>
    dispatch({ type: "SET_USERNAME", username })

  return {
    loggedIn,
    username,
    setUsername,
    signIn
  }
}
