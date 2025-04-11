import ky from "ky";
import { env } from "../env";

const kyServer = ky.create({
  prefixUrl: env.NEXT_SERVER_WEB_API,
  credentials: "include",
  mode: "cors",
  cache: "no-store",
  retry: 3,
});

export default kyServer;
