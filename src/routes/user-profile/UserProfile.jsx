import { useParams } from "react-router-dom";
import { capitalize } from "../../utils/helpers/string.helpers";
import { useUserContext } from "../../contexts/userContext";

const UserProfile = () => {
  const { userName } = useParams();
  const { currentUser } = useUserContext();
  console.log("UserInfo", currentUser);
  return <div>{capitalize(userName)}</div>;
};

export default UserProfile;
