.PHONY: codegen
codegen:
	openspec compile
	openspec generate python-agno
	openspec generate typescript-ui
