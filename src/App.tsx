import React from "react"

import { Shell } from "components"

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

const App: React.FC = () => {
  const [{ loggedIn, username }, dispatch] = React.useReducer(reducer, init)

  const signIn = () => dispatch({ type: "LOG_IN" })
  const setUsername = (username: string) =>
    dispatch({ type: "SET_USERNAME", username })

  return (
    <Shell>
      {loggedIn ? (
        <>Hello {username}</>
      ) : (
        <form data-testid="login" onSubmit={signIn}>
          <label>
            username
            <input
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
          </label>
          <label>
            password
            <input></input>
          </label>
          <button>Sign in</button>
        </form>
      )}
    </Shell>
  )
}

export default App
