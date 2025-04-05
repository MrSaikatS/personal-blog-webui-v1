import kyClient from "@/lib/ky/kyClient";
import { DefaultRequestType, LoginDataType } from "@/lib/types";
import { HTTPError } from "ky";

const loginHook = async (lfData: LoginDataType) => {
  try {
    const req: DefaultRequestType = await kyClient
      .post("auth/login", {
        next: { tags: ["authLogin"] },

        json: {
          email: lfData.email,
          password: lfData.password,
        },
      })
      .json();

    return {
      success: true,
      message: req.message,
    };
  } catch (error: any) {
    if (error.name === "HTTPError") {
      const httpError = error as HTTPError;

      const errorJson = await httpError.response.json<any>(); // eslint-disable-line

      return {
        success: false,
        message: errorJson.message,
      };
    } else {
      return {
        success: false,
        message: "Network Error",
      };
    }
  }
};

export default loginHook;
