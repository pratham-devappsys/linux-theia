import {
    ContributionFilterRegistry,
    FilterContribution
} from '@theia/core/lib/common';

import { injectable, interfaces } from '@theia/core/shared/inversify';

// Test
import { TestViewContribution } from '@theia/test/lib/browser/view/test-view-contribution';
import { TestRunViewContribution } from '@theia/test/lib/browser/view/test-run-view-contribution';
import { TestResultViewContribution } from '@theia/test/lib/browser/view/test-result-view-contribution';
import { TestOutputViewContribution } from '@theia/test/lib/browser/view/test-output-view-contribution';

// Git
// import { GitContribution } from '@theia/git/lib/browser/git-contribution';

// Debug
import { DebugFrontendApplicationContribution } from '@theia/debug/lib/browser/debug-frontend-application-contribution';

const filtered = [
    TestViewContribution,
    TestRunViewContribution,
    TestResultViewContribution,
    TestOutputViewContribution,
    // GitContribution,
    DebugFrontendApplicationContribution
];

@injectable()
export class RemoveFromUIFilterContribution implements FilterContribution {

    registerContributionFilters(registry: ContributionFilterRegistry): void {

        registry.addFilters('*', [
            (contrib) => !filtered.some(c => contrib instanceof c)
        ]);

        console.log('Registered contribution filters to remove Test and Git contributions from the UI');
    }
}

export function registerFilters({ bind }: { bind: interfaces.Bind; rebind: interfaces.Rebind }): void {
    bind(FilterContribution).to(RemoveFromUIFilterContribution).inSingletonScope();
}