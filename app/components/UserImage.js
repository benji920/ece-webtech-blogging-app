import { useContext } from "react";
import { useRouter } from "next/router";
import OutlineUserCircleIcon from "@heroicons/react/24/outline/UserCircleIcon.js";
import UserContext from "./UserContext";
import gravatar from "gravatar";
import Gravatar from "react-gravatar";

export default function UserImage(props) {
  const router = useRouter();
  const { user, logout } = useContext(UserContext);
  const url = gravatar.url(user.user_metadata.avatar_url, { d: "robohash" });
  return (
    <>
      {user.user_metadata.avatar_url ? (
        <>
          {/* <img
            src={user.user_metadata.avatar_url}
            className={props.className}
          ></img> */}
          <Gravatar email={user.email} />
        </>
      ) : (
        <>
          <img src={url} className={props.className}></img>
        </>
      )}
    </>
  );
}
