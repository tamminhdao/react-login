import React from "react"

import { useAuth } from "hooks"
import { Auth } from "context"

export const Shell: React.FC = ({ children }) => {
  const auth = useAuth()
  return <Auth.Provider value={auth}>{children}</Auth.Provider>
}
