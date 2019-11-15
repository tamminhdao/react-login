import React from "react"

import { Shell } from "components"
import { useAuth } from "hooks"

const App: React.FC = () => {
  const { username, loggedIn, signIn, setUsername } = useAuth()

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
