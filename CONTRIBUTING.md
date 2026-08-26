# Contributing to Amazon Seller Risk Audit Engine

Thank you for helping keep this project up-to-date with Amazon's ever-changing policies!

## How to Contribute

### Updating Policy Questions
1. Fork this repository
2. Edit `data/questions.json`
3. Add or update questions following the existing schema
4. Submit a Pull Request with:
   - Link to the Amazon policy page that changed
   - Date of the policy change
   - Brief explanation of the update

### Reporting Issues
- Use GitHub Issues to report outdated questions or policy changes
- Label issues with: `policy-update`, `bug`, or `enhancement`

## Question Schema

Each question in `questions.json` must follow this structure:

```json
{
  "id": "unique-id",
  "category": "Supply Chain Authenticity | Account Health Metrics | Related Accounts (Section 3) | Intellectual Property",
  "question": "Your question text here",
  "options": [
    { "text": "Option text", "riskScore": 0 },
    { "text": "Option text", "riskScore": 5 },
    { "text": "Option text", "riskScore": 10 }
  ]
}
```

**Risk Score Guide:**
- `0` = No risk
- `1-4` = Low risk
- `5-7` = Medium risk
- `8-10` = High risk

## Code of Conduct

Be respectful and constructive. We are all here to help Amazon sellers stay compliant and avoid unfair suspensions.
