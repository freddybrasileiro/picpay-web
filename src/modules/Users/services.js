import picpayApi from "modules/picpayApi";
import { errorHandler } from "utils/events";

export function getUsers() {
  return picpayApi
    .get("users")
    .then(({ data }) => data)
    .then(errorHandler);
}
