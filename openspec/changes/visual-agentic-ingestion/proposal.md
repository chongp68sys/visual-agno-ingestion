---
title: Proposal — Visual Agentic Ingestion (Agno)
status: proposed
owners:
  - Paul Chong
created: 2025-11-02
links:
  - spec: /openspec/specs/workflows/ingestion/spec.md
---

## Summary
Introduce a **visual workflow builder** built on the **Agno framework**, where Agents are instantiated without tools by default and Tools are attached dynamically from the UI.

The builder compiles a saved graph (nodes, edges, config) into executable **Agno Workflows** for client data ingestion.

---

## Goals
- Agents are **tool-less until UI attaches tools**.
- Support drag-and-drop Agents and configurable Tool dropdowns.
- Allow “Test” vs “Live” execution modes.
- Store versioned workflows for reuse and scheduling.

---

## Non-Goals
- No direct user-authored Python code in production.
- No secrets stored in JSON graph definitions.

---

## Motivation
Data ingestion flows currently require manual scripts per client. This system allows non-engineers to define and reuse ingestion pipelines visually, generating fully compliant Agno Workflows.

---

## Success Criteria
- A user can create an ingestion workflow in the visual builder.
- The workflow JSON compiles into an executable Agno Workflow.
- Workflows can be tested and scheduled from the UI.
