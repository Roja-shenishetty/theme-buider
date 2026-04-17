"use client"

import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import dynamic from "next/dynamic"
import "./YTForm.css"
import { channel } from 'process'

const DevTool = dynamic(
  () => import("@hookform/devtools").then((mod) => mod.DevTool),
  { ssr: false }
)

export const YTForm = () => {

  type FormValues = {
    username: string
    email: string
    channel: string
    social: {
      twitter: string
      instagram: string
    }
    phoneNumbers: string[]
    PHNM: {
      number: string
    }[],
    age: number,
    dob: Date
  }

  const form = useForm<FormValues>({
    defaultValues: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
      const data = await res.json()

      return {
        username: data.username,
        email: data.email,
        channel: "", // ✅ fixed
        social: {
          twitter: "",
          instagram: ""
        },
        phoneNumbers: ["", ""],
        PHNM: [{ number: "" }],
        age:0,
        dob: new Date()
      }
    }
  })

  const { register, control, handleSubmit, formState ,watch } = form
  const { errors } = formState

  const { fields, append, remove } = useFieldArray({
    control,
    name: "PHNM"
  })

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data)
  }

const watchForm = watch();

  return (
    <div className="form-container">
      <h2 className="form-title">YouTube Form</h2>
<h3>Watched Form:{JSON.stringify(watchForm)}</h3>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Username */}
        <label className="form-label">UserName:</label>
        <input className="form-input"
          {...register("username", { required: "Username is required" })}
        />
        <p className="form-error">{errors.username?.message}</p>

        {/* Email */}
        <label className="form-label">Email:</label>
        <input className="form-input"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email"
            },
            validate: {
              notAdmin: (value) =>
                value !== "admin@example.com" || "Enter different email",
              notBlackListed: (value) =>
                !value.endsWith("baddomain.com") || "Domain not allowed"
            }
          })}
        />
        <p className="form-error">{errors.email?.message}</p>

        {/* Channel */}
        <label className="form-label">Channel:</label>
        <input className="form-input"
          {...register("channel", { required: "Channel is required" })}
        />
        <p className="form-error">{errors.channel?.message}</p>

        {/* Social */}
        <label className="form-label">Twitter:</label>
        <input className="form-input"
          {...register("social.twitter", { required: "Twitter required" })}
        />

        <label className="form-label">Instagram:</label>
        <input className="form-input"
          {...register("social.instagram", { required: "Instagram required" })}
        />

        {/* Static Phone Numbers */}
        <label className="form-label">Primary Phone:</label>
        <input className="form-input"
          {...register("phoneNumbers.0", { required: "Required" })}
        />

        <label className="form-label">Secondary Phone:</label>
        <input className="form-input"
          {...register("phoneNumbers.1")}
        />

        {/* Dynamic Fields */}
        <label className="form-label">Dynamic Phone Numbers:</label>

        {fields.map((field, index) => (
          <div key={field.id} className="form-control">
            <input
              className="form-input"
              {...register(`PHNM.${index}.number` as const, {
                required: "Phone required"
              })}
            />

            <button
              type="button"
              className="form-button remove"
              onClick={() => remove(index)}
            >
              Remove
            </button>
          </div>
        ))}

        <button
          type="button"
          className="form-button add"
          onClick={() => append({ number: "" })}
        >
          Add Phone Number
        </button>

            {/* Age */}     
        <label className="form-label">Age:</label>
        <input className="form-input"
          type="number"
          {...register("age", { valueAsNumber: true })}
        />
        <p className="form-error">{errors.age?.message}</p>

        {/* Date of Birth */}
        <label className="form-label">Date of Birth:</label>
        <input className="form-input"
          type="date"
          {...register("dob", { valueAsDate: true })}
        />
        <p className="form-error">{errors.dob?.message}</p>

        <button className="form-button" type="submit">
          Submit
        </button>

      </form>

      {process.env.NODE_ENV === "development" && (
        <DevTool control={control as any} />
      )}
    </div>
  )
}