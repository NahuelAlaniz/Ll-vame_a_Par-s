import { CanDeactivateFn, Router } from '@angular/router';
import { GuardService } from '../services/guard.service';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

export const guardGuard: CanDeactivateFn<DashboardComponent> = (component, currentRoute, currentState, nextState) => {
  const authGuardService = new GuardService(new Router)
  return authGuardService.canDeactivate();
};
