# Opencart-automation

This repository contains automation scripts and tests for OpenCart, an open-source online shopping cart system. The automation is implemented using [Cypress](https://www.cypress.io/), a modern JavaScript end-to-end testing framework.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>=12.x)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [OpenCart](https://www.opencart.com/) instance for testing

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/opencart-automation.git

2. Install dependencies
   cd opencart-automation
   npm install

3. Project Structure
cypress/: Contains Cypress tests, fixtures, and support files.
cypress/e2e/: Place your test files here.
cypress/fixtures/: Store your test data in JSON files.
cypress/support/: Add custom commands or global configuration.
cypress.json: Cypress configuration file.
package.json: Node.js project configuration.

3.Running Tests
Run the tests using the Cypress Test Runner:
npx cypress run 

