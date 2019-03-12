import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'spotlight', loadChildren: './spotlight/spotlight.module#SpotlightPageModule' },
  { path: 'mytickets', loadChildren: './mytickets/mytickets.module#MyticketsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'food', loadChildren: './food/food.module#FoodPageModule' },
  { path: 'promos', loadChildren: './promos/promos.module#PromosPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
