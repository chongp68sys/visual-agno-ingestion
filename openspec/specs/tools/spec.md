---
title: Tools Specification
version: 0.1.0
status: active
---
## SFTPTool
description: Fetch latest file from SFTP.
inputs_schema: { path: string }
outputs_schema: { file_path: string }

## FileTypeTool
description: Detect MIME type via python-magic.
inputs_schema: { file_path: string }
outputs_schema: { file_type: string }

## ParserTool
description: Parse CSV/XLSX to DataFrame.
inputs_schema: { file_path: string, engine: string }
outputs_schema: { rows: number, columns: string[] }

## TransformTool
description: Normalise headers, enrich data.
inputs_schema: { dataframe: object, transform_name?: string }
outputs_schema: { dataframe: object }

## ValidationTool
description: Validate schema.
inputs_schema: { dataframe: object, schema: string }
outputs_schema: { valid: boolean, errors: object[] }
