1.-Initial commands:
	npm init playwright@latest

√ Do you want to use TypeScript or JavaScript? · JavaScript
√ Where to put your end-to-end tests? · tests
√ Add a GitHub Actions workflow? (y/N) · false
√ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true


2.-Run
npx playwright test
npx playwright test --headed

3.-Report
npx playwright show-report

4.- Execute tests
npx playwright test Demo2.spec.js Demo3.spec.js --headed

5.- Codegen
npx playwright codegen demo.playwright.dev/todomvc