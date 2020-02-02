import React from "react";
import { ShallowWrapper, shallow } from "enzyme";
import { IconButton } from "@material-ui/core";
import Drawer, { DrawerProps } from "./Drawer";

describe("src/components/Drawer/Drawer.tsx", () => {
  let wrapper: ShallowWrapper;
  let props: DrawerProps;
  const initialize = jest.fn();
  const openDrawer = jest.fn();
  const closeDrawer = jest.fn();

  beforeAll(() => {
    props = {
      isDrawerOpen: false,
      initialize,
      openDrawer,
      closeDrawer
    };
    wrapper = shallow(<Drawer {...props} />);
  });

  it("Opens the Drawer", () => {
    wrapper
      .find(IconButton)
      .first()
      .simulate("click");
    expect(openDrawer).toHaveBeenCalled();
  });

  it("Closes the Drawer", () => {
    wrapper
      .find(IconButton)
      .last()
      .simulate("click");
    expect(closeDrawer).toHaveBeenCalled();
  });
});
