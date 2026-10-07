'use client'

import React, { useEffect } from 'react'

import { EditorCanvasTypes, EditorNodeType } from '@/lib/types'
import { useNodeConnections } from '@/providers/connections-provider'
import { useEditor } from '@/providers/editor-provider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { CONNECTIONS, EditorCanvasDefaultCardTypes } from '@/lib/constant'

import {
  onDragStart
} from '@/lib/editor-utils'

import EditorCanvasIconHelper from './editor-canvas-card-icon-hepler'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import RenderConnectionAccordion from './render-connection-accordion'
// import RenderOutputAccordion from './render-output-accordian'

import { useFuzzieStore } from '@/store'

type Props = {
  nodes: EditorNodeType[]
}

const EditorCanvasSidebar = ({ nodes }: Props) => {
  const { state } = useEditor()
  const { nodeConnection } = useNodeConnections()
  const { googleFile, setSlackChannels } = useFuzzieStore()

  // useEffect(() => {
  //   if (state) {
  //     onConnections(nodeConnection, state, googleFile)
  //   }
  // }, [state, nodeConnection, googleFile])

  // useEffect(() => {
  //   if (nodeConnection.slackNode.slackAccessToken) {
  //     fetchBotSlackChannels(
  //       nodeConnection.slackNode.slackAccessToken,
  //       setSlackChannels
  //     )
  //   }
  // }, [nodeConnection, setSlackChannels])

  return (
    <aside>
      <Tabs
        defaultValue="actions"
        className="h-screen overflow-scroll pb-24"
      >
        <TabsList className="bg-transparent">
          <TabsTrigger value="actions" className="cursor-pointer">
            Actions
          </TabsTrigger>
          <TabsTrigger value="settings" className="cursor-pointer">
            Settings
          </TabsTrigger>
        </TabsList>

        <Separator />

        {/* Actions */}
        <TabsContent
          value="actions"
          className="flex flex-col gap-4 p-4"
        >
          {Object.entries(EditorCanvasDefaultCardTypes)
            .filter(
              ([_, cardType]) =>
                (!nodes.length && cardType.type === 'Trigger') ||
                (nodes.length && cardType.type === 'Action')
            )
            .map(([cardKey, cardValue]) => (
              <Card
                key={cardKey}
                draggable
                className="w-full cursor-grab border-black bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 shrink-0"
                onDragStart={(event) =>
                  onDragStart(
                    event,
                    cardKey as EditorCanvasTypes
                  )
                }
              >
                <CardHeader className="flex flex-row items-center gap-4 p-4">
                  <EditorCanvasIconHelper
                    type={cardKey as EditorCanvasTypes}
                  />

                  <div>
                    <CardTitle className="text-md">
                      {cardKey}
                    </CardTitle>

                    <CardDescription>
                      {cardValue.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
        </TabsContent>

        {/* Settings */}
        <TabsContent
          value="settings"
          className="-mt-4 flex flex-col gap-4 p-4"
        >
          <div className="px-2 py-4 text-center text-xl font-bold">
            {state.editor.selectedNode.data.title}
          </div>

          <Accordion>
            {/* Account */}
            <AccordionItem
              value="account"
              className="border-y px-2 "
            >
              <AccordionTrigger className="no-underline! cursor-pointer">
                Account
              </AccordionTrigger>

              <AccordionContent>
                {CONNECTIONS.map((connection) => (
                  <RenderConnectionAccordion
                    key={connection.title}
                    state={state}
                    connection={connection}
                  />
                ))}
              </AccordionContent>
            </AccordionItem>

            {/* Action */}
            <AccordionItem
              value="action"
              className="px-2"
            >
              <AccordionTrigger className="no-underline! cursor-pointer">
                Action
              </AccordionTrigger>

              <AccordionContent>
                {/* <RenderOutputAccordion
                  state={state}
                  nodeConnection={nodeConnection}
                /> */}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
    </aside>
  )
}

export default EditorCanvasSidebar