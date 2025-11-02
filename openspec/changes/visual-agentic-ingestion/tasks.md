---
title: Tasks — Visual Agentic Ingestion
status: in-progress
---

## 1️⃣ Backend foundations
- [ ] Implement tool registry `/api/registry/tools`
- [ ] Implement agent factory (build agents dynamically from JSON)
- [ ] Compile JSON → Agno Workflow class
- [ ] Workflow run endpoints (`/api/workflows/:id/run`)
- [ ] Versioned workflow storage (`workflows`, `workflow_runs`)
- [ ] Scheduler integration (APScheduler or Windmill.dev)

## 2️⃣ UI Builder
- [ ] Agent node (no tools by default)
- [ ] Tool dropdown (populated from registry)
- [ ] Tool config form (schema-driven)
- [ ] Workflow JSON save/load/versioning

## 3️⃣ Data Inspection
- [ ] Preview first N rows of uploaded files
- [ ] Client ↔ schema mapping editor
- [ ] Validation feedback UI

## 4️⃣ Observability
- [ ] Retry/backoff policies
- [ ] Slack/webhook alerts
- [ ] Audit log of all runs

## 5️⃣ Documentation
- [ ] Update `/openspec/specs/agents/spec.md`
- [ ] Update `/openspec/specs/tools/spec.md`
- [ ] Update `/openspec/specs/workflows/ingestion/spec.md`
