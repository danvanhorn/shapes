import React from "react";
import PropTypes from "prop-types";
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core";
import { ShapesEnum, shapes } from "../../types/shapes";
import { ChangeEvent } from "../../types/domTypes";
import { SetActiveShapeAction } from "../../store/actions/actionTypes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  })
);

export type MenuValueProps = {
  activeShape: string;
};

export type MenuFunctionProps = {
  setActiveShape(data: ShapesEnum): SetActiveShapeAction;
};

export type MenuProps = MenuValueProps & MenuFunctionProps;

const Menu: React.FC<MenuProps> = ({ activeShape, setActiveShape }) => {
  const classes = useStyles();
  const onSelectActiveShape = (event: React.ChangeEvent<ChangeEvent>): void => {
    setActiveShape(event.target.value as ShapesEnum);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>Shape</InputLabel>
      <Select
        labelId="select-active-shape-label"
        id="select-active-shape"
        value={activeShape}
        onChange={onSelectActiveShape}
        className={classes.selectEmpty}
      >
        {shapes.map((shape: ShapesEnum) => (
          <MenuItem key={shape} value={shape}>
            {shape}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

Menu.propTypes = {
  activeShape: PropTypes.oneOf<ShapesEnum>([
    ShapesEnum.circle,
    ShapesEnum.square,
    ShapesEnum.triangle
  ]).isRequired,
  setActiveShape: PropTypes.func.isRequired
};

export default React.memo(Menu);
