import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from "react-router-dom";
import ReactTestUtils from 'react-dom/test-utils'
import PagePost from "./PagePost";

// jest.mock('./PagePost');
let div;

beforeEach(() => {
  div = document.createElement('div');
  document.body.appendChild(div);
});

afterEach(() => {
  document.body.removeChild(div);
  div = null;
});

test("and so is a spec", function () {
  let panel;
  ReactTestUtils.act(() => {
    // PagePost.props.mockResolvedValue({ location: { state: {username: "", password: ""} } });
    panel = ReactDOM.render(<HashRouter><PagePost /></HashRouter>, div);
    // panel.setState({ username: "yushi", password: "123456" });
    // expect(panel.state).toEqual({ username: "yushi", password: "123456" });
  });
  // const inputPassword = div.querySelector('input[name=account]');
  // ReactTestUtils.act(() => {
  //   inputPassword.value = "abc";
  //   ReactTestUtils.Simulate.change(inputPassword);
  //   expect(panel.state).toEqual({ username: "abc", password: "" });
  // });
});