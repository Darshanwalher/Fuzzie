'use client'

import React from 'react'
import {
  Calendar,
  CircuitBoard,
  Database,
  GitBranch,
  HardDrive,
  Mail,
  MousePointerClickIcon,
  Timer,
  Webhook,
  Zap,
} from 'lucide-react'
import { EditorCanvasTypes } from '@/lib/types'
import Image from 'next/image'

type Props = {
  type: EditorCanvasTypes
}

const EditorCanvasIconHelper = ({ type }: Props) => {
  switch (type) {
    case 'Email':
      return (
        <Mail
          className="shrink-0"
          size={30}
        />
      )

    case 'Condition':
      return (
        <GitBranch
          className="shrink-0"
          size={30}
        />
      )

    case 'AI':
      return (
        <CircuitBoard
          className="shrink-0"
          size={30}
        />
      )

    case 'Slack':
      return (
        <Image
          src="/slack.png"
          alt="Slack"
          width={30}
          height={30}
          className="shrink-0"
        />
      )

    case 'Google Drive':
      return (
        <HardDrive
          className="shrink-0"
          size={30}
        />
      )

    case 'Notion':
      return (
        <Database
          className="shrink-0"
          size={30}
        />
      )

    case 'Custom Webhook':
      return (
        <Webhook
          className="shrink-0"
          size={30}
        />
      )

    case 'Google Calendar':
      return (
        <Calendar
          className="shrink-0"
          size={30}
        />
      )

    case 'Trigger':
      return (
        <MousePointerClickIcon
          className="shrink-0"
          size={30}
        />
      )

    case 'Action':
      return (
        <Zap
          className="shrink-0"
          size={30}
        />
      )

    case 'Wait':
      return (
        <Timer
          className="shrink-0"
          size={30}
        />
      )

    default:
      return (
        <Zap
          className="shrink-0"
          size={30}
        />
      )
  }
}

export default EditorCanvasIconHelper