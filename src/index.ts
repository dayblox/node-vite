import express from "express"

export const app = express()

app.get("*", ({ originalUrl }, res) => res.json({ originalUrl }))

if (import.meta.env.PROD) app.listen({ port: process.env.PORT })
