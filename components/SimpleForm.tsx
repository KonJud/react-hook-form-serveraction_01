"use client"

import { FormEvent, useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export default function SimpleForm() {

    const [data, setData] = useState()

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        const form = event.currentTarget
        const formData = new FormData(form)
        const formDataObject = Object.fromEntries(formData.entries())

        const data = await fetch("/api/form", {
            method: "POST",
            body: JSON.stringify(formDataObject),
        }).then((res) => res.json())

        setData(data)
        form.reset()
    }

    return (
        <section className="flex gap-6">
            <form
                onSubmit={handleSubmit}
                className="flex flex-1 flex-col gap-4 sm:w-1/2"
            >
               <Input
                    name="name"
                    placeholder="Name"
                    required
               />
                <Input
                    name="message"
                    placeholder="Message"
                    required
                />
                <Button>Submit</Button>
            </form>
            <div className="flex-1 rounded-lg bg-cyan-800 p-8 text-white">
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        </section>
    )
}