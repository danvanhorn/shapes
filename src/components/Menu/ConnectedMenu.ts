import { connect } from "react-redux";
import { getActiveShape } from "../../store/selectors/selectors";
import { setActiveShape } from "../../store/actions/actions";
import Menu, { MenuValueProps, MenuFunctionProps } from "./Menu";
import { State } from "../../types/state";

const mapStateToProps = (state: State): MenuValueProps => ({
  activeShape: getActiveShape(state)
});

const mapDispatchToProps = (): MenuFunctionProps => ({
  setActiveShape
});

export const ConnectedMenu = connect(mapStateToProps, mapDispatchToProps)(Menu);
