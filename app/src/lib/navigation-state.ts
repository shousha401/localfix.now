// Tracks whether the user has performed an SPA navigation since the initial
// page load. AppShell (src/App.tsx) marks it on the first route change;
// HeroSection uses it to distinguish "mounting during the initial load" from
// "mounting because the user navigated Home" for its entrance-animation gate.
let spaNavigated = false;

export function markSpaNavigation() {
  spaNavigated = true;
}

export function hasSpaNavigated() {
  return spaNavigated;
}
