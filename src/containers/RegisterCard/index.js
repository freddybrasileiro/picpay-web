import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import RegisterCard from "components/RegisterCard";

/*import { closeDialog as doCloseDialog } from "modules/Payment/actions";
import { DIALOG_SCREENS } from "modules/Payment/constants";
import {
  selectIsDialogOpen,
  selectDialogScreen
} from "modules/Payment/selectors";
*/

const RegisterCardContainer = ({}) => <RegisterCard />;

const propTypes = {};

const defaultProps = {};

RegisterCardContainer.propTypes = propTypes;
RegisterCardContainer.defaultProps = defaultProps;

const mapDispatchToProps = dispatch => ({
  dispatch
});

const mapStateToProps = createStructuredSelector({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterCardContainer);
