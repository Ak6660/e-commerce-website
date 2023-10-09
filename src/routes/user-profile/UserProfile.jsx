import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { capitalize } from "../../utils/helpers/string.helpers";

const UserProfile = (props) => {
  const { userName } = useParams();
  return <div>{capitalize(userName)}</div>;
};

UserProfile.propTypes = {};

export default UserProfile;
