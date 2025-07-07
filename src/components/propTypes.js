import PropTypes from "prop-types";

export const headerPropTypes = {
  openMenu: PropTypes.string,
  setOpenMenu: PropTypes.func.isRequired,
  dropdownHover: PropTypes.bool.isRequired,
  setDropdownHover: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  ArrowUp: PropTypes.node.isRequired,
  ArrowDown: PropTypes.node.isRequired,
};

export const mobileMenuPropTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
