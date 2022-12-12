package main

import (
	"fmt"

	"github.com/Goscord/goscord"
	"github.com/Goscord/goscord/discord"
	"github.com/Goscord/goscord/gateway"
)

var client *gateway.Session

func main() {
	fmt.Println("Starting...")

	client := goscord.New(&gateway.Options{
		Token:   "token",
		Intents: gateway.IntentGuildMessages,
	})

	client.On("ready", func() {
		fmt.Println("Logged in as " + client.Me().Tag())
	})

	client.On("message", func(msg *discord.Message) {
		if msg.Content == "ping" {
			client.Channel.Send(msg.ChannelId, "Pong ! 🏓")
		}
	})

	client.Login()

	select {}
}
