import {CanActivateFn} from "@angular/router";

export const OddGuard: CanActivateFn = (route, router) => {
  return parseInt(route.params['index']) % 2 == 1;
}
