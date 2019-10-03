import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'general-register', loadChildren: './general-register/general-register.module#GeneralRegisterPageModule' },
  { path: 'general-register2', loadChildren: './general-register2/general-register2.module#GeneralRegister2PageModule' },
  { path: 'msu-register', loadChildren: './msu-register/msu-register.module#MsuRegisterPageModule' },
  { path: 'showprofile', loadChildren: './showprofile/showprofile.module#ShowprofilePageModule' },
  { path: 'edit-profile', loadChildren: './edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'new-event', loadChildren: './new-event/new-event.module#NewEventPageModule' },
  { path: 'code-event', loadChildren: './code-event/code-event.module#CodeEventPageModule' },
  { path: 'com-event', loadChildren: './com-event/com-event.module#ComEventPageModule' },
  { path: 'join-event', loadChildren: './join-event/join-event.module#JoinEventPageModule' },
  { path: 'q-event', loadChildren: './q-event/q-event.module#QEventPageModule' },
  { path: 'detail-event', loadChildren: './detail-event/detail-event.module#DetailEventPageModule' },
  { path: 'checkpoint-report', loadChildren: './checkpoint-report/checkpoint-report.module#CheckpointReportPageModule' },
  { path: 'event-detail-report', loadChildren: './event-detail-report/event-detail-report.module#EventDetailReportPageModule' },
  { path: 'event-report', loadChildren: './event-report/event-report.module#EventReportPageModule' },
  { path: 'join-detail-report', loadChildren: './join-detail-report/join-detail-report.module#JoinDetailReportPageModule' },
  { path: 'join-report', loadChildren: './join-report/join-report.module#JoinReportPageModule' },
  { path: 'report', loadChildren: './report/report.module#ReportPageModule' },
  { path: 'myevent', loadChildren: './myevent/myevent.module#MyeventPageModule' },
  { path: 'event-list', loadChildren: './event-list/event-list.module#EventListPageModule' },
  { path: 'detail-event-list', loadChildren: './detail-event-list/detail-event-list.module#DetailEventListPageModule' },
  { path: 'checkpoint', loadChildren: './checkpoint/checkpoint.module#CheckpointPageModule' },
  { path: 'checkpoint-detail', loadChildren: './checkpoint-detail/checkpoint-detail.module#CheckpointDetailPageModule' },
  { path: 'attend', loadChildren: './attend/attend.module#AttendPageModule' },
  { path: 'member-list', loadChildren: './member-list/member-list.module#MemberListPageModule' },
  { path: 'approve', loadChildren: './approve/approve.module#ApprovePageModule' },
  { path: 'join-list', loadChildren: './join-list/join-list.module#JoinListPageModule' },
  { path: 'join-list-event', loadChildren: './join-list-event/join-list-event.module#JoinListEventPageModule' },
  { path: 'join-check', loadChildren: './join-check/join-check.module#JoinCheckPageModule' },
  { path: 'new-checkpoint', loadChildren: './new-checkpoint/new-checkpoint.module#NewCheckpointPageModule' },
  { path: 'edit-checkpoint', loadChildren: './edit-checkpoint/edit-checkpoint.module#EditCheckpointPageModule' },
  { path: 'edit-event', loadChildren: './edit-event/edit-event.module#EditEventPageModule' },
  { path: 'edit-event2', loadChildren: './edit-event2/edit-event2.module#EditEvent2PageModule' },
  { path: 'regist', loadChildren: './regist/regist.module#RegistPageModule' },
  { path: 'add-checker', loadChildren: './add-checker/add-checker.module#AddCheckerPageModule' },
  { path: 'facebook-register', loadChildren: './facebook-register/facebook-register.module#FacebookRegisterPageModule' },
  { path: 'reset-password', loadChildren: './reset-password/reset-password.module#ResetPasswordPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
