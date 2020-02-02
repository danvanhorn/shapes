import { connect } from "react-redux";
import { Drawer } from "@material-ui/core";
import { initialize } from "../../store/actions/actions";

const mapDispatchToProps = () => ({
  initialize
});

export default connect(mapDispatchToProps)(Drawer);
