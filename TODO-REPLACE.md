# SreeRam Technical Portfolio — Placeholder Replacement Guide

This portfolio strictly adheres to **Absolute Truth & Credibility Rules**. No fake URLs, dates, credentials, or company details are invented. All unverified fields are explicitly marked with styled placeholders.

When you obtain the verified details, replace the placeholders in the respective source files listed below:

---

## 1. Resume Document
- **Location:** `/public/resume/resume.pdf`
- **Current State:** ✅ **ACTIVE & VERIFIED** (`Sree Ram Vundavalli.pdf` installed into `/public/resume/resume.pdf`).
- **Capabilities:** "View Resume in Browser" and "Download PDF Copy" are fully functional.
- **Component:** `src/components/ResumeSection.tsx`

---

## 2. Certifications (`src/data/certifications.ts`)
| Certification Name | Field to Update | Current Value | Required Real Value |
| :--- | :--- | :--- | :--- |
| **Craft Precise Prompts for AI Models** | `year`, `credentialId`, `credentialUrl` | `[ADD YEAR]`, `[ADD CREDENTIAL ID]`, `null` | Real completion year, ID, and verification link |
| **Oracle — Agentic AI Certification** | `year`, `credentialId`, `credentialUrl` | `[ADD YEAR]`, `[ADD CREDENTIAL ID]`, `null` | Real Oracle certificate ID and verification URL |
| **SkillCraft Technology — Data Science** | `year`, `credentialId`, `credentialUrl` | `[ADD YEAR]`, `[ADD CREDENTIAL ID]`, `null` | Real internship certificate link and date |
| **Cisco — Python** | `year`, `credentialId`, `credentialUrl` | `[ADD YEAR]`, `[ADD CREDENTIAL ID]`, `null` | Real Cisco credential ID and URL |
| **Cisco — Computer Networks** | `year`, `credentialId`, `credentialUrl` | `[ADD YEAR]`, `[ADD CREDENTIAL ID]`, `null` | Real Cisco certificate link |
| **NPTEL** | `year`, `credentialId`, `credentialUrl` | `[ADD YEAR]`, `[ADD CREDENTIAL ID]`, `null` | Real course name, score/ID, and NPTEL URL |
| **Cambridge English** | `year`, `credentialId`, `credentialUrl` | `[ADD YEAR]`, `[ADD CREDENTIAL ID]`, `null` | Real Cambridge score/CEFR level and verification URL |

---

## 3. Internships (`src/data/internships.ts`)
| Domain | Fields to Update | Current Value | Required Real Value |
| :--- | :--- | :--- | :--- |
| **AI & Machine Learning** | `company`, `role`, `duration`, `startDate`, `endDate`, `responsibilities`, `certificateUrl` | `[ADD COMPANY]`, `[ADD ROLE]`, etc. | Real company/organization name, exact dates, verified responsibilities, offer/completion doc |
| **Data Analytics & Data Science** | `company`, `role`, `duration`, `startDate`, `endDate`, `responsibilities`, `certificateUrl` | `[ADD COMPANY]`, `[ADD ROLE]`, etc. | Verified company details and certificate link |
| **Cybersecurity** | `company`, `role`, `duration`, `startDate`, `endDate`, `responsibilities`, `certificateUrl` | `[ADD COMPANY]`, `[ADD ROLE]`, etc. | Verified company details and certificate link |
| **Python Development** | `company`, `role`, `duration`, `startDate`, `endDate`, `responsibilities`, `certificateUrl` | `[ADD COMPANY]`, `[ADD ROLE]`, etc. | Verified company details and certificate link |

---

## 4. Projects (`src/data/projects.ts`)
| Project | Fields to Update | Action Required |
| :--- | :--- | :--- |
| **Duty Assignment Portal** | `github`, `liveDemo` | Add real GitHub repository URL (`https://github.com/police-create/...`) and live deployment URL when deployed. |
| **University Management System** | `github`, `liveDemo` | Add real GitHub repository URL and live deployment URL. |
| **AI / ML Predictive Intelligence Pipeline** | `github`, `liveDemo` | Add repository link or Colab notebook link. |
| **Python + AI Integration Pipeline** | `github`, `liveDemo` | Add repository link. |
| **Data Science Analytics Engine** | `github`, `liveDemo` | Add repository link. |

---

## 5. Contact Form Endpoint (`.env`)
- **Location:** `.env`
- **Variable:** `VITE_CONTACT_ENDPOINT`
- **Action Required:** Add your Formspree, Getform, or custom backend URL (e.g. `VITE_CONTACT_ENDPOINT=https://formspree.io/f/your-form-id`).
- If left empty, the contact form automatically falls back to an interactive email composer directly addressing `vu.241fa04e42@gmail.com`.
