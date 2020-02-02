import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import App from "./App";
import Drawer from "./components/Drawer/ConnectedDrawer";

describe("src/App.tsx", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders the drawer", () => {
    expect(wrapper.find(Drawer).exists()).toBeTruthy();
  });
});
