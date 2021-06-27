const express = require("express")
const app = express()
const { webhookToken } = require("./config.json")
const { Webhook } = require("@top-gg/sdk")
const webhook = new Webhook(webhookToken)

app.post("./webhook/topgg",webhook.listen(vote=>{
  console.log(vote.user)
}))