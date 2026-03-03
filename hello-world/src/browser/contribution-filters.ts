import { FrontendApplicationContribution } from '@theia/core/lib/browser';

export class OpenFileContribution implements FrontendApplicationContribution {

  onStart(): void {
    const params = new URLSearchParams(window.location.search);
    const file = params.get('openfile');

    if (file) {
        console.log(`Opening file: ${file}`);
      localStorage.setItem('openfile', file);
    }
  }
}