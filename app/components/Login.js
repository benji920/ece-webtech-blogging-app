import { useContext } from "react";
import { useRouter } from "next/router";
import OutlineUserCircleIcon from "@heroicons/react/24/outline/UserCircleIcon.js";
import UserContext from "./UserContext";
import Gravatar from "react-gravatar";

export default function LoggedIn() {
  const router = useRouter();
  const { user, logout } = useContext(UserContext);
  function onClick() {
    if (user) router.push("/profile");
    else router.push("/login");
  }
  return (
    <button className="flex" onClick={onClick}>
      {user ? (
        <>
          <Gravatar
            email={user.email}
            className="rounded-full border-2 border-slate-400 mr-1"
            size={30}
          />
          {user.user_metadata.preferred_username}
        </>
      ) : (
        <>
          <OutlineUserCircleIcon />
          Login
        </>
      )}
    </button>
  );
}
