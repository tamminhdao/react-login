import React from "react"

import { Shell } from "components"

const App: React.FC = () => {
  const [username, setUsername] = React.useState("")
  const [loggedIn, setLoggedIn] = React.useState(false)

  const signIn = () => setLoggedIn(true)

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
