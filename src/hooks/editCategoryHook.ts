import kyClient from "@/lib/ky/kyClient";
import { DefaultRequestType } from "@/lib/types";
import { HTTPError } from "ky";

type EditCategoryHookType = {
  id: string;
  name: string;
  slug: string;
};

const editCategoryHook = async ({ id, name, slug }: EditCategoryHookType) => {
  try {
    const req = await kyClient
      .patch(`category/${id}`, {
        next: { tags: ["editCategory"] },

        json: {
          name: name,
          slug: slug,
        },
      })
      .json<DefaultRequestType>();

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

export default editCategoryHook;
