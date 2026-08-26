# Amazon Seller Risk Audit Engine

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Open Source](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-red)](https://github.com/rairaheem959-tech/amazon-seller-risk-audit)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

> An open-source evaluation engine to help Amazon Sellers assess account suspension risk before Amazon enforces penalties.

## Why This Matters

Over **2 million Amazon sellers** risk account suspension every year due to policy violations they are not even aware of. Amazon enforcement is opaque and unpredictable. This project open-sources the core risk-scoring logic so any developer, agency, or seller can build their own diagnostic tools on top of it.

## Features

- Covers **Section 3**, IP violations, Dropshipping policy, OTDR thresholds, and Supply Chain Authenticity
- JSON-based question bank that is easy to update when Amazon changes TOS
- Lightweight scoring engine in vanilla JavaScript (no dependencies)
- Embeddable in React, WordPress, or any web application
- Community-maintained to stay current with Amazon policy changes

## Repository Structure

```
amazon-seller-risk-audit/
├── data/
│   └── questions.json     # Core checklist of Amazon policy risk vectors
├── src/
│   ├── logic.js           # Scoring engine that calculates risk level from answers
│   └── index.html         # Barebones implementation example
└── README.md
```

## Quick Start

```bash
git clone https://github.com/rairaheem959-tech/amazon-seller-risk-audit.git
cd amazon-seller-risk-audit
```

Open `src/index.html` in your browser, or integrate `logic.js` into your own project.

## Policy Categories Covered

| Category | Risk Factors |
|---|---|
| Supply Chain Authenticity | Wholesale invoices, authorized distributors |
| Account Health Metrics | ODR, Late Shipment Rate, OTDR thresholds |
| Related Accounts (Section 3) | Shared IPs, VA credentials, linked accounts |
| Intellectual Property | IP complaints, brand registry, counterfeit risk |

## Contributing

We welcome pull requests! Amazon frequently updates its policies (Supply Chain standards, OTDR thresholds, Section 3 enforcement criteria). If you spot a policy change:

1. Fork the repository
2. Update `data/questions.json` with the new or revised question
3. Submit a Pull Request with a link to the Amazon policy source

See [CONTRIBUTING.md](CONTRIBUTING.md) for full guidelines and the question schema.

## Integration Examples

This engine can be embedded in:
- **WordPress** via a custom plugin using the JSON data
- **React** as a multi-step form component
- **Node.js** backend for API-based risk scoring

## License

MIT License - free to use, modify, and distribute. See [LICENSE](LICENSE) for details.

---
*This engine powers the live Risk Audit tool at [Elite Reinstatement Pros](https://elitereinstatementpros.com/account-risk-audit/)*
