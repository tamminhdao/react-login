import React from "react"

import { useAuth } from "hooks"

export const Auth = React.createContext({} as ReturnType<typeof useAuth>)
