import kyClient from "@/lib/ky/kyClient";
import { DefaultRequestType } from "@/lib/types";
import { HTTPError } from "ky";

type AddCategoryHookType = {
  name: string;
  slug: string;
};

const addCategoryHook = async (cfData: AddCategoryHookType) => {
  try {
    const req: DefaultRequestType = await kyClient
      .post("category", {
        next: { tags: ["addCategory"] },

        json: {
          name: cfData.name,
          slug: cfData.slug,
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

export default addCategoryHook;
