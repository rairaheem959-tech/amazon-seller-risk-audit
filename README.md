# Amazon Seller Risk Audit Engine

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Overview
This is an open-source evaluation engine designed to help Amazon Sellers and agencies assess their account risk before Amazon enforces a suspension. 

Keeping up with Amazon's constantly changing Seller Policies (including Section 3, Intellectual Property, and Drop-shipping policies) is difficult. This project open-sources the core questionnaire and scoring logic we use internally so that developers, agencies, and sellers can build their own diagnostic tools.

## Why Open Source?
We believe that account health shouldn't be a black box. By open-sourcing our risk audit logic, we hope to use community contributions and AI (like Anthropic's Claude) to keep this checklist continuously updated against Amazon's latest Terms of Service (TOS) changes.

## Repository Structure
- `/data/questions.json`: The core checklist of Amazon policy risk vectors.
- `/src/logic.js`: The scoring engine that calculates the risk level.
- `/src/index.html`: A barebones implementation example.

## Usage
You can integrate the `questions.json` dataset into your own WordPress, React, or custom web applications to build a frontend diagnostic tool for your clients.

## Contributing
We welcome pull requests! If Amazon updates a policy (e.g., new Supply Chain standards or OTDR thresholds), please submit a PR to update `questions.json`.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
*The core logic of this project powers the Risk Audit tool at [Elite Reinstatement Pros](https://elitereinstatementpros.com/account-risk-audit/).*
