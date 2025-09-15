"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
  name: z.string().min(1, { message: "Companion is required" }),
  Subject: z.string().min(1, { message: "Subject is required" }),
  topic: z.string().min(1, { message: "topic is required" }),
  style: z.string().min(1, { message: "style is required" }),
  duration: z.number().min(1, { message: "duration is required" }),
})

const CompanionForm = () => {

    // 1. Define your form.
const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
        name:'',
        Subject:'',
        topic:'',
        style:'',
        duration: 15,
  },
})

const onSubmit = (values: z.infer<typeof formSchema>) => {
  console.log(values)
}


  return (
    <div>
      CompanionForm
    </div>
  )
}

export default CompanionForm
