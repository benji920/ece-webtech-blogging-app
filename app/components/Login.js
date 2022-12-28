import { useContext } from "react";
import { useRouter } from "next/router";
import OutlineUserCircleIcon from "@heroicons/react/24/outline/UserCircleIcon.js";
import UserContext from "./UserContext";
import Gravatar from "react-gravatar";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function LoggedIn() {
  const router = useRouter();
  const { user, logout } = useContext(UserContext);
  const supabaseClient = useSupabaseClient();
  function onClick() {
    if (user) router.push("/profile");
    else router.push("/login");
  }
  return (
    <button className="flex " onClick={onClick}>
      {user ? (
        <>
          <div className="w-9 mr-2">
            {" "}
            <Gravatar
              email={user.email}
              className="rounded-full border-color500 bg-white mr-1"
              size={100}
            />
          </div>
          {user.user_metadata.preferred_username}
          {/* <span> {user.user_metadata.preferred_username}</span> */}
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
