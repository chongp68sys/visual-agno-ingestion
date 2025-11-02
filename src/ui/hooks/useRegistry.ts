import { useMemo, useState } from "react";
import { TOOL_REGISTRY, AGENT_REGISTRY, type ToolDefinition, type AgentDefinition } from "@/ui/generated/registry";
export interface RegistryHook {
  agents: AgentDefinition[]; tools: ToolDefinition[];
  filteredAgents: AgentDefinition[]; filteredTools: ToolDefinition[];
  search: string; setSearch: (v: string)=>void;
  getAgentByName: (n: string)=>AgentDefinition|undefined;
  getToolByName: (n: string)=>ToolDefinition|undefined;
  getToolsForAgent: (n: string)=>ToolDefinition[];
}
export function useRegistry(): RegistryHook {
  const [search, setSearch] = useState("");
  const f = (s: string) => s.toLowerCase();
  const filteredAgents = useMemo(()=>!search?AGENT_REGISTRY:AGENT_REGISTRY.filter(a=>f(a.name).includes(f(search))||f(a.description).includes(f(search))),[search]);
  const filteredTools = useMemo(()=>!search?TOOL_REGISTRY:TOOL_REGISTRY.filter(t=>f(t.name).includes(f(search))||f(t.description).includes(f(search))),[search]);
  const getAgentByName = (n:string)=>AGENT_REGISTRY.find(a=>a.name===n);
  const getToolByName = (n:string)=>TOOL_REGISTRY.find(t=>t.name===n);
  const getToolsForAgent = (n:string)=> (getAgentByName(n)?.tools||[]).map(getToolByName).filter(Boolean) as ToolDefinition[];
  return { agents: AGENT_REGISTRY, tools: TOOL_REGISTRY, filteredAgents, filteredTools, search, setSearch, getAgentByName, getToolByName, getToolsForAgent };
}
