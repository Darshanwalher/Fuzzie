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
    <Card
      className="
        flex w-full flex-row items-center justify-between gap-4
        rounded-lg border border-border
        bg-card px-5 py-6
        text-card-foreground
        shadow-sm
      "
    >
      <CardHeader className="flex min-w-0 flex-1 flex-col items-start gap-3 p-0 text-left">
        <Image
          src={icon}
          alt={title}
          height={32}
          width={32}
          className="h-[30px] w-[30px] shrink-0 object-contain"
        />

        <div className="min-w-0">
          <CardTitle className="text-base font-semibold text-foreground">
            {title}
          </CardTitle>

          <CardDescription className="mt-1 text-muted-foreground">
            {description}
          </CardDescription>
        </div>
      </CardHeader>

      <div className="flex shrink-0 items-center p-0">
        {connected[type] ? (
          <div
            className="
              rounded-lg border-2 border-primary
              px-3 py-2
              font-semibold
              text-primary
            "
          >
            Connected
          </div>
        ) : (
          <Link
            href={
              title === 'Discord'
                ? process.env.NEXT_PUBLIC_DISCORD_REDIRECT!
                : title === 'Notion'
                  ? process.env.NEXT_PUBLIC_NOTION_AUTH_URL!
                  : title === 'Slack'
                    ? process.env.NEXT_PUBLIC_SLACK_REDIRECT!
                    : '#'
            }
            className="
              rounded-lg
              bg-primary px-3 py-2
              font-semibold
              text-primary-foreground
              transition-opacity
              hover:opacity-90
            "
          >
            Connect
          </Link>
        )}
      </div>
    </Card>
  )
}

export default ConnectionCard