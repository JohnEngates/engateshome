---
title: "Post Quantum Cryptography Checker"
description: "Web-based tool for scanning websites to identify cryptographic implementations that need post-quantum upgrades"
date: 2024-12-10
excerpt: "Scan websites and systems (URLs) to identify cryptographic vulnerabilities that quantum computers could exploit."
featured: true
technologies: ["Python", "Flask", "Cryptography", "TLS Analysis", "Security", "PQC"]
githubUrl: "https://github.com/JohnEngates/check-pqc"
liveUrl: "https://checkpqc.com"
image: "./pqc-checker-screenshot.png"
status: "completed"
---

## Purpose

The Post Quantum Cryptography Checker helps organizations identify where they're using cryptographic algorithms that will be vulnerable to quantum computing attacks. As quantum computers advance, many current encryption methods will become obsolete, making it critical to identify and plan upgrades now.

## How It Works

The tool performs multi-level analysis through a simple web interface:

### Cryptographic Algorithm Analysis
- Scans websites for TLS/SSL configurations
- Identifies specific algorithms and key sizes
- Detects vulnerable cipher suites

### Configuration Scanning
- Examines SSL/TLS certificate details
- Checks certificate algorithms and key strengths
- Validates protocol versions

## Why This Matters

The "harvest now, decrypt later" threat means adversaries may be collecting encrypted data today to decrypt once quantum computers become available. Organizations need to:

1. **Inventory**: Know where cryptography is used
2. **Prioritize**: Focus on long-lived secrets and sensitive data
3. **Plan**: Develop migration strategies before it's urgent
4. **Monitor**: Track the quantum computing threat landscape

## Technical Insights

Building this tool combined my experience with:
- **Security Architecture**: Understanding cryptographic dependencies in complex systems
- **Risk Assessment**: Prioritizing upgrades based on threat models

This project represents the intersection of emerging quantum threats and practical security engineering—helping organizations prepare for a fundamental shift in cryptographic security.