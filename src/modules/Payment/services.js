import picpayApi from "modules/picpayApi";
import { errorHandler } from "utils/events";

export function doTransaction(payload) {
  return picpayApi
    .post("transaction", payload)
    .then(({ data }) => data)
    .then(errorHandler);
}
