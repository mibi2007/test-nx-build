import { Routes } from "@angular/router";
import { SignInComponent } from './pages/sign-in/sign-in.component';

/**
 * This routes will be used to genarate the app's sitemap.
 * For development build on Firebase we need the hash tag (#) to work with host like web.app/domain/
 * but for production we strip it out. That's why we have 2 app-routing.module files.
 */

class AppPath {
  home = '/';
  signIn = '/sign-in/';
  signOut = '/sign-out/';
  classProgram = '/class-program/';
  test = '/test/';
  diagnosticTestDecision = '/diagnostic-test-decision/';
  diagnosticTest = '/diagnostic-test/';
  learningPath = '/learning-path/';
  lessonPage = '/learning-path/lesson-page/';
  diagnosticTestComplete = '/diagnostic-test/test-complete/';
  waitingForTutor = '/waiting-for-tutor/';
  profile = '/profile/';
  pageNotfound = '/page-not-found/';
  newLesson = '/new-lesson/';
}

const routes: Routes = [
  { path: '', component: SignInComponent },
];

export { routes, AppPath };

