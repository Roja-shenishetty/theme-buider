"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import dynamic from "next/dynamic"
import "./YTForm.css"
const DevTool = dynamic(
  () => import("@hookform/devtools").then((mod) => mod.DevTool),
  { ssr: false }
)

export const YTForm = () => {
  let renderCount = 0

  type FormValues = {
    username: string
    email: string
    channel: string
    social:{
        twitter:string
        instagram:string
    }
    phoneNumbers: string[]
  }
  const form = useForm<FormValues>(
    {
      defaultValues: async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        const data = await response.json()
        return {
          username: data.username,
          email: data.email,
          channel: data.channel,
          social:{
            twitter:"",
            instagram:""
          },
          phoneNumbers:["",""]
        }
      }
    }
  )
  const { register, control, handleSubmit , formState} = form
 const { errors } = formState

  const onSubmit=(data:FormValues)=>{
    console.log("Form submitted", data)
  }

  renderCount++

  return (
    <div className="form-container">
  <h2 className="form-title">YouTube Form</h2>

  <form onSubmit={handleSubmit(onSubmit)}>
    <label className="form-label" htmlFor="username">UserName:</label>
    <input className="form-input" type="text" id="username"
      {...register("username", { required: "Username is required" })}
    />

    <p className='form-error'>{errors.username?.message}</p>

    <label className="form-label" htmlFor="email">Email:</label>
    <input className="form-input" type="email" id="email"
      {...register("email", {
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email address"
        },
        validate:{
            notAdmin:(value)=>{ 
            return ( 
                value!=="admin@example.com" || "Enter a different email address"
            );
        },
        notBlackListed:(value)=>{
            return (
                !value.endsWith("baddomain.com") || "This domain is not allowed"    
            );
        }
    },
        required: "Email is required"
      })}
    />
    <p className='form-error'>{errors.email?.message}</p>

    <label className="form-label" htmlFor="channel">Channel:</label>
    <input className="form-input" type="text" id="channel"
      {...register("channel", { required: "Channel is required" })}
    />
    <p className='form-error'>{errors.channel?.message}</p>

    <label className="form-label" htmlFor="twitter">Twitter:</label>
    <input className="form-input" type="text" id="twitter"
      {...register("social.twitter", { required: "Twitter is required" })}
    />

<label className="form-label" htmlFor="instagram">Instagram:</label>
    <input className="form-input" type="text" id="instagram"
      {...register("social.instagram", { required: "Instagram is required" })}
    />

    <label className="form-label" htmlFor="primaryphoneNumbers">Phone Numbers:</label>
    <input className="form-input" type="number" id="phoneNumbers"
      {...register("phoneNumbers.0", { required: "Phone number is required" })}
    />
    <label className="form-label" htmlFor="secondaryphoneNumbers">Secondary Phone Number:</label>
    <input className="form-input" type="number" id="phoneNumbers"
      {...register("phoneNumbers.1")}
    />

    <button className="form-button" type="submit">Submit</button>
  </form>
        <p className="render-count">Render Count: {renderCount}</p>         

      {process.env.NODE_ENV === "development" && (
        <DevTool control={control as any} />
      )}
    </div>
  )
}