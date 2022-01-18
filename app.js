import express from "express"
import dotenv from "dotenv"
import { Telegraf } from "telegraf"

dotenv.config()
let app = express()
let bot = new Telegraf(process.env.TOKEN)

// Start Command
bot.start((ctx) => {
    ctx.reply(`Hallo Baraya\npake perintah ini : \n/kata_random = buat nampilin kata random\n/angka_random = baut nampilin angka rangom\n/waktu = buat nampilin kode waktu tanggal`)
})

bot.command('kata_random', (ctx) => {
    ctx.reply('Judith Caesarino herlambang ada disini, di otakmu!!!')
})
bot.command('angka_random', (ctx) => {
    ctx.reply(Math.floor(Math.random() * 10))
})
bot.command('waktu', (ctx) => {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    ctx.reply(today)
})

// Run bot
bot.launch()
console.log(`jalan lurdd silahkan coba`)