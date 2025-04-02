import ky from "ky";
import { env } from "../env";

const kyClient = ky.create({
  prefixUrl: env.NEXT_PUBLIC_WEB_API,
  credentials: "include",
  mode: "cors",
  cache: "no-store",
  retry: 0,
});

export default kyClient;
