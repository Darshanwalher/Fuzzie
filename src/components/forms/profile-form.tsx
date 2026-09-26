'use client'

import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { EditUserProfileSchema } from '@/lib/types'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from '../ui/field'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'

type Props = {
  user: any
  onUpdate?: any
}

const ProfileForm = ({ user, onUpdate }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<z.infer<typeof EditUserProfileSchema>>({
    mode: 'onChange',
    resolver: zodResolver(EditUserProfileSchema),
    defaultValues: {
      name: "",
      email: " ",
    },
  })

  const handleSubmit = async (
    values: z.infer<typeof EditUserProfileSchema>
  ) => {
    setIsLoading(true)
    await onUpdate(values.name)
    setIsLoading(false)
  }

  useEffect(() => {
    form.reset({ name: user?.name || '', email: user?.email || '' })
  }, [user])

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <FieldGroup>
        <Controller
          control={form.control}
          name="name"
          render={({ field }) => (
            <Field>
              <FieldLabel className="text-lg">User full name</FieldLabel>
              <FieldContent>
                <Input
                  {...field}
                  placeholder="Name"
                />
              </FieldContent>
            </Field>
          )}
        />
      </FieldGroup>
      <FieldGroup>
        <Controller
          control={form.control}
          name="email"
          render={({ field }) => (
            <Field>
              <FieldLabel className="text-lg">Email</FieldLabel>
              <FieldContent>
                <Input
                  {...field}
                //   disabled={true}
                  placeholder="Email"
                  type="email"
                />
              </FieldContent>
            </Field>
          )}
        />
        <Button
          type="submit"
          className="self-start hover:bg-[#2F006B] hover:text-white "
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving
            </>
          ) : (
            'Save User Settings'
          )}
        </Button>
      </FieldGroup>
    </form>
  )
}

export default ProfileForm