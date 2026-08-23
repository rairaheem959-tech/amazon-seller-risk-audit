// Core logic for processing the Amazon Seller Risk Audit JSON data
// Powered by Open-Source - Elite Reinstatement Pros

class RiskAuditEngine {
    constructor(questionsData) {
        this.questions = questionsData;
        this.totalScore = 0;
        this.maxPossibleScore = this.calculateMaxScore();
    }

    // Helper to determine the worst case scenario score
    calculateMaxScore() {
        return this.questions.reduce((total, q) => {
            const maxOption = Math.max(...q.options.map(o => o.riskScore));
            return total + maxOption;
        }, 0);
    }

    // Process a user's answers (array of { questionId, selectedOptionIndex })
    calculateRisk(answers) {
        this.totalScore = 0;
        let findings = [];

        answers.forEach(answer => {
            const question = this.questions.find(q => q.id === answer.questionId);
            if (question) {
                const selectedOption = question.options[answer.selectedOptionIndex];
                this.totalScore += selectedOption.riskScore;
                
                if (selectedOption.riskScore >= 5) {
                    findings.push({
                        category: question.category,
                        warning: `High risk detected in ${question.category} based on your response.`
                    });
                }
            }
        });

        const riskPercentage = (this.totalScore / this.maxPossibleScore) * 100;
        return {
            score: this.totalScore,
            percentage: riskPercentage.toFixed(2),
            riskLevel: this.getRiskLevel(riskPercentage),
            criticalFindings: findings
        };
    }

    getRiskLevel(percentage) {
        if (percentage < 20) return "LOW RISK - Account is currently healthy.";
        if (percentage < 50) return "MEDIUM RISK - Review compliance documentation immediately.";
        return "HIGH RISK - Immediate danger of Section 3 or Policy Suspension.";
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RiskAuditEngine;
}
