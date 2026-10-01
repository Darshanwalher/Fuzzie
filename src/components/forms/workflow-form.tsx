"use client"

import { WorkflowFormSchema } from "@/lib/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldGroup,
} from "../ui/field"

import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"

import { useModal } from "@/providers/modal-provider"
// import { onCreateWorkflow } from "@/app/(main)/(pages)/workflows/_actions/workflow-connections"

type Props = {
  title?: string
  subTitle?: string
}

const Workflowform = ({ subTitle, title }: Props) => {
  const { setClose } = useModal()
  const router = useRouter()

  const form = useForm<z.infer<typeof WorkflowFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(WorkflowFormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  })

  const isLoading = form.formState.isSubmitting

  const handleSubmit = async (
    values: z.infer<typeof WorkflowFormSchema>
  ) => {
    // try {
    //   const workflow = await onCreateWorkflow(
    //     values.name,
    //     values.description
    //   )

    //   if (workflow) {
    //     toast.success(workflow.message)
    //     router.refresh()
    //   }

    //   setClose()
    // } catch (error) {
    //   console.error(error)
    //   toast.error("Something went wrong")
    // }
  }

  return (
    <Card className="w-full max-w-162.5 border-none">
      {(title || subTitle) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {subTitle && <CardDescription>{subTitle}</CardDescription>}
        </CardHeader>
      )}

      <CardContent>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-5 text-left"
        >
          <FieldGroup>
            {/* Workflow Name */}
            <Field>
              <FieldLabel htmlFor="name">
                Name
              </FieldLabel>

              <FieldContent>
                <Input
                  id="name"
                  placeholder="Enter workflow name"
                  {...form.register("name")}
                />

                {form.formState.errors.name && (
                  <FieldError>
                    {form.formState.errors.name.message}
                  </FieldError>
                )}
              </FieldContent>
            </Field>

            {/* Description */}
            <Field>
              <FieldLabel htmlFor="description">
                Description
              </FieldLabel>

              <FieldContent>
                <Input
                  id="description"
                  placeholder="Enter workflow description"
                  {...form.register("description")}
                />

                {form.formState.errors.description && (
                  <FieldError>
                    {form.formState.errors.description.message}
                  </FieldError>
                )}
              </FieldContent>
            </Field>
          </FieldGroup>

          <Button
            className="mt-2"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              "Save Workflow"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default Workflowform