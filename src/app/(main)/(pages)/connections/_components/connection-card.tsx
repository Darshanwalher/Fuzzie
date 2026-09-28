import { ConnectionTypes } from '@/lib/types'
import React from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  type: ConnectionTypes
  icon: string
  title: ConnectionTypes
  description: string
  callback?: () => void
  connected: {} & any
}

const ConnectionCard = ({
  description,
  type,
  icon,
  title,
  connected,
}: Props) => {
  return (
    <Card className="w-full flex-row items-center justify-between gap-4 rounded-lg border-0 bg-neutral-950/60 px-5 py-6 ring-1 ring-neutral-800">
      <CardHeader className="flex min-w-0 flex-1 flex-col items-start gap-3 text-left">
        <div className="flex flex-col gap-1">
          <Image
            src={icon}
            alt={title}
            height={32}
            width={32}
            className="h-[30px] w-[30px] shrink-0 object-contain"
          />
        </div>
        <div className="min-w-0">
          <CardTitle className="text-base font-semibold text-white">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <div className="flex shrink-0 flex-col items-center gap-2 p-4">
        {connected[type] ? (
          <div className="border-bg-primary rounded-lg border-2 px-3 py-2 font-bold text-white">
            Connected
          </div>
        ) : (
          <Link
            href={
              title == 'Discord'
                ? process.env.NEXT_PUBLIC_DISCORD_REDIRECT!
                : title == 'Notion'
                  ? process.env.NEXT_PUBLIC_NOTION_AUTH_URL!
                  : title == 'Slack'
                    ? process.env.NEXT_PUBLIC_SLACK_REDIRECT!
                    : '#'
            }
            className="rounded-lg bg-primary p-2 font-bold text-primary-foreground"
          >
            Connect
          </Link>
        )}
      </div>
    </Card>
  )
}

export default ConnectionCard