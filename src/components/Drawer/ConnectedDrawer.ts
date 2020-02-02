import { connect } from "react-redux";
import {
  initialize,
  openDrawer,
  closeDrawer
} from "../../store/actions/actions";
import Drawer, { DrawerFunctionProps, DrawerValueProps } from "./Drawer";
import {
  InitializeAction,
  CloseDrawerAction,
  OpenDrawerAction
} from "../../store/actions/actionTypes";
import { State } from "../../types/state";
import { getIsDrawerOpen } from "../../store/selectors/selectors";

const mapStateToProps = (state: State): DrawerValueProps => ({
  isDrawerOpen: getIsDrawerOpen(state)
});

const mapDispatchToProps = (dispatch: any): DrawerFunctionProps => ({
  initialize: (): InitializeAction => dispatch(initialize()),
  openDrawer: (): OpenDrawerAction => dispatch(openDrawer()),
  closeDrawer: (): CloseDrawerAction => dispatch(closeDrawer())
});

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
