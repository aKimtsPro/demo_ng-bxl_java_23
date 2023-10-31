import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {TrueService} from "../services/true.service";

export const trueGuard: CanActivateFn = (route, state) => {
  const trueServ = inject(TrueService);
  return trueServ.getTrue();
};
