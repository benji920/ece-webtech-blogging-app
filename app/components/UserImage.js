import { useContext } from "react";
import { useRouter } from "next/router";
import OutlineUserCircleIcon from "@heroicons/react/24/outline/UserCircleIcon.js";
import UserContext from "./UserContext";
import gravatar from "gravatar";

export default function UserImage(props) {
  const router = useRouter();
  const { user, logout } = useContext(UserContext);
  const url = gravatar.url(user.user_metadata.avatar_url, { d: "robohash" });
  return (
    <div className="flex w-full h-full">
      {user.user_metadata.avatar_url ? (
        <>
          <img
            src={user.user_metadata.avatar_url}
            className={props.className}
          ></img>
        </>
      ) : (
        <>
          <img src={url} className={props.className}></img>
        </>
      )}
    </div>
  );
}
