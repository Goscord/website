export const codeExample = `
package main

import (
    "fmt"

    "github.com/Goscord/goscord"
    "github.com/Goscord/goscord/discord"
    "github.com/Goscord/goscord/goscord/gateway"
    "github.com/Goscord/goscord/goscord/gateway/event"
)

var client *gateway.Session

func main() {
    fmt.Println("Starting...")

    client := goscord.New(&gateway.Options{
        Token:   "token",
        Intents: gateway.IntentGuildMessages,
    })

    client.On(event.EventReady, func() {
        fmt.Println("Logged in as " + client.Me().Tag())
    })

    client.On(event.EventMessageCreate, func(msg *discord.Message) {
        if msg.Content == "ping" {
            client.Channel.SendMessage(msg.ChannelId, "Pong ! 🏓")
        }
    })

    client.Login()

    select {}
}
}
`.trim();