import { connect } from "react-redux";
import { getActiveShape } from "../../store/selectors/selectors";
import { setActiveShape } from "../../store/actions/actions";
import Menu, { MenuValueProps, MenuFunctionProps } from "./Menu";
import { State } from "../../types/state";
import { ShapesEnum } from "../../types/shapes";
import { SetActiveShapeAction } from "../../store/actions/actionTypes";

const mapStateToProps = (state: State): MenuValueProps => ({
  activeShape: getActiveShape(state)
});

const mapDispatchToProps = (dispatch: any): MenuFunctionProps => ({
  setActiveShape: (shape: ShapesEnum): SetActiveShapeAction =>
    dispatch(setActiveShape(shape))
});

export const ConnectedMenu = connect(mapStateToProps, mapDispatchToProps)(Menu);
