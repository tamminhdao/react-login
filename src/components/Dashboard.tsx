import React from "react"

import { Auth } from "context"

export const Dashboard: React.FC = () => {
  const { username, loggedIn, signIn, setUsername } = React.useContext(Auth)

  return loggedIn ? (
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
  )
}
