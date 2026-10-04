"use client"

import React from "react"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { toast } from "sonner"

type Props = {
  name: string
  description: string
  id: string
  publish: boolean | null
}

const Workflow = ({ description, id, name, publish }: Props) => {
    //WIP : write up DB
  const onPublishFlow = async (checked: boolean) => {
    // const response = await onFlowPublish(id, checked)

    // if (response) {
    //   toast.message(response)
    // }
  }

  return (
    <Card className="w-full flex-row items-center justify-between gap-0">
      <CardHeader className="min-w-0 flex-1 px-6 py-5">
        <Link
          href={`/workflows/editor/${id}`}
          className="block min-w-0"
        >
          <div className="mb-3 flex items-center gap-2">
            <Image
              src="/googleDrive.png"
              alt="Google Drive"
              height={32}
              width={32}
              className="h-8 w-8 shrink-0 object-contain"
            />

            <Image
              src="/notion.png"
              alt="Notion"
              height={32}
              width={32}
              className="h-8 w-8 shrink-0 object-contain"
            />

            <Image
              src="/discord.png"
              alt="Discord"
              height={32}
              width={32}
              className="h-8 w-8 shrink-0 object-contain"
            />

            <Image
              src="/slack.png"
              alt="Slack"
              height={32}
              width={32}
              className="h-8 w-8 shrink-0 object-contain"
            />
          </div>

          <CardTitle className="mb-1 text-lg font-semibold">
            {name}
          </CardTitle>

          <CardDescription className="max-w-2xl truncate">
            {description}
          </CardDescription>
        </Link>
      </CardHeader>

      <div className="flex shrink-0 flex-col items-center justify-center gap-2 px-6 py-5">
        <Label
          htmlFor="airplane-mode"
          className="text-sm font-medium text-muted-foreground"
        >
          {publish ? "On" : "Off"}
        </Label>

        <Switch
          className="cursor-pointer"
          id="airplane-mode"
        //   defaultChecked={publish!}
        //   onClick={onPublishFlow}
        />
      </div>
    </Card>
  )
}

export default Workflow