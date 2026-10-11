'use client'
import { Button } from '@/components/ui/button'
import { useNodeConnections } from '@/providers/connections-provider'
import { usePathname } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import {
  onCreateNodesEdges,
  onFlowPublish,
} from '../_actions/workflow-connections'
import { toast } from 'sonner'

type Props = {
  children: React.ReactNode
  edges: any[]
  nodes: any[]
}

const FlowInstance = ({ children, edges, nodes }: Props) => {
  const pathname = usePathname()
  const [isFlow, setIsFlow] = useState([])
  const { nodeConnection } = useNodeConnections()

  const onFlowAutomation = useCallback(async () => {
    const flow = await onCreateNodesEdges(
      pathname.split('/').pop()!,
      JSON.stringify(nodes),
      JSON.stringify(edges),
      JSON.stringify(isFlow)
    )

    if (flow) toast.message(flow.message)
  }, [nodeConnection])

  const onPublishWorkflow = useCallback(async () => {
    const response = await onFlowPublish(pathname.split('/').pop()!, true)
    if (response) toast.message(response)
  }, [])

  const onAutomateFlow = async () => {
    const flows: any = []
    const connectedEdges = edges.map((edge) => edge.target)
    connectedEdges.map((target) => {
      nodes.map((node) => {
        if (node.id === target) {
          flows.push(node.type)
        }
      })
    })

    setIsFlow(flows)
  }

  useEffect(() => {
    onAutomateFlow()
  }, [edges])

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex gap-3 p-4 shrink-0 border-b border-border/40">
        <Button
          className="cursor-pointer"
          onClick={onFlowAutomation}
          disabled={isFlow.length < 1}
        >
          Save
        </Button>
        <Button
          className="cursor-pointer"
          disabled={isFlow.length < 1}
          onClick={onPublishWorkflow}
        >
          Publish
        </Button>
      </div>
      <div className="flex-1 min-h-0 overflow-hidden">
        {children}
      </div>
    </div>
  )
}

export default FlowInstance