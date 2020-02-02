import { connect } from "react-redux";
import { Drawer } from "@material-ui/core";
import { initialize } from "../../store/actions/actions";
import { DrawerFunctionProps } from "./Drawer";
import { InitializeAction } from "../../store/actions/actionTypes";

const mapDispatchToProps = (dispatch: any): DrawerFunctionProps => ({
  initialize: (): InitializeAction => dispatch(initialize())
});

export default connect(mapDispatchToProps)(Drawer);
