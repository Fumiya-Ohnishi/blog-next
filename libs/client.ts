import { createClient } from "microcms-js-sdk"
export const client = createClient({
  serviceDomain: 'ppodgcyn9h',
  apiKey: process.env.API_KEY || "",
})
