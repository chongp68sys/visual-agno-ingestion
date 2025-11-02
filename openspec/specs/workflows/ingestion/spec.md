---
title: Workflow: Client Data Ingestion
version: 1.0.0
status: active
---
name: Client Data Ingestion
description: Intake → Transform → (later Mapping) → Commit
agents: [File Intake Agent, Transform Agent]
sequence:
  - "await fileintakeagent.run('Fetch & parse inbound file')"
  - "await transformagent.run('Clean & validate parsed data')"
