import { render, cleanup, fireEvent } from "@testing-library/react"
import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

it("renders without crashing", async () => {
  const component = render(<App />)

  const usernameInput = await component.findByLabelText("username")
  const passwordInput = await component.findByLabelText("password")

  fireEvent.input(usernameInput, { target: { value: "new-user" } })
  fireEvent.input(passwordInput, { target: { value: "apassword" } })
  fireEvent.submit(await component.findByText("Sign in"))
  // component.debug()

  await component.findByText("Hello new-user")

  expect(component.queryByTestId("login")).toBeNull()
})
