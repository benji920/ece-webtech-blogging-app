import { useContext } from "react";
import { useRouter } from "next/router";
import OutlineUserCircleIcon from "@heroicons/react/24/outline/UserCircleIcon.js";
import UserContext from "./UserContext";
import UserImage from "./UserImage";

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
          <UserImage className="rounded-full w-7 border-2 bg-white" />
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
