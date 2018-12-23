/*
import { events as evt } from 'bifrost/api/kasbah';
import { valueFromAb } from 'utils/ab';
import { errorHandler } from 'utils/events';

const events = evt(['contractGetV6']);

export function getContractv6(step, auth) {
  if (global.name.match(/contract:gets/)) {
    return JSON.parse(global.name);
  }

  const timeout = valueFromAb('timeout', false);
  return events.proposalTracking(step, auth, 'v2', timeout).then(errorHandler);
}

export function getContract(step, auth) {
  return events.contractGetV6(step, auth, 'v2');
}
*/
