import React from "react";
import { ShallowWrapper, shallow } from "enzyme";
import { Select } from "@material-ui/core";
import Menu, { MenuProps } from "./Menu";
import { ShapesEnum } from "../../types/shapes";

describe("src/components/Menu/Menu.tsx", () => {
  let wrapper: ShallowWrapper;
  let props: MenuProps;
  const setActiveShape = jest.fn();

  beforeAll(() => {
    props = {
      setActiveShape,
      activeShape: ShapesEnum.square
    };
    wrapper = shallow(<Menu {...props} />);
  });

  it("sets default active shape to `square` on render", () => {
    expect(wrapper.find(Select).prop("value")).toEqual(ShapesEnum.square);
  });

  it(`changes 'activeShape' shape to ${ShapesEnum.triangle}`, () => {
    wrapper.find(Select).simulate("change", {
      target: {
        value: ShapesEnum.triangle
      }
    });
    expect(setActiveShape).toHaveBeenCalledWith(ShapesEnum.triangle);
  });

  it(`changes 'activeShape' shape to ${ShapesEnum.circle}`, () => {
    wrapper.find(Select).simulate("change", {
      target: {
        value: ShapesEnum.circle
      }
    });
    expect(setActiveShape).toHaveBeenCalledWith(ShapesEnum.circle);
  });
});
