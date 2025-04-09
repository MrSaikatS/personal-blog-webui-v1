import kyClient from "@/lib/ky/kyClient";
import { CategoryIdType, DefaultRequestType } from "@/lib/types";
import { HTTPError } from "ky";

const deleteCategoryHook = async ({ id }: CategoryIdType) => {
  try {
    const req = await kyClient
      .delete(`category/${id}`, {
        next: { tags: ["deleteCategory"] },
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

export default deleteCategoryHook;
