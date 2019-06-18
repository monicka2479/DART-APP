import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'planner', loadChildren: './pages/dart/planner/planner.module#PlannerPageModule' },
  { path: 'diary', loadChildren: './pages/dart/diary/diary.module#DiaryPageModule' },
  { path: 'report', loadChildren: './pages/dart/report/report.module#ReportPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
