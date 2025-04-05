"use client";

import logoutHook from "@/hooks/logoutHook";
import { Button } from "../ui/button";

const LogoutButton = () => {
  const logoutFunc = async () => {
    const { success, message } = await logoutHook();

    if (!success) {
      console.log(message);
    }

    if (success) {
      console.log(message);
    }
  };

  return (
    <>
      <Button
        className="cursor-pointer"
        onClick={logoutFunc}
      >
        Logout
      </Button>
    </>
  );
};

export default LogoutButton;
