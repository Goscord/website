package main

import (
	"fmt"
	"strings"

	"github.com/Goscord/goscord"
	"github.com/Goscord/goscord/discord"
	"github.com/Goscord/goscord/gateway"
)

var client *gateway.Session

func main() {
	fmt.Println("Starting...")

	client = goscord.New(&gateway.Options{
		Token: "your bot token",
	})

	client.On("ready", func() {
		fmt.Println("Logged in as " + client.User().Tag())
	})

	client.On("message", func(msg *discord.Message) {
		if strings.ToLower(msg.Content) == "ping" {
			_, _ = msg.Reply("Pong ! 🏓")
		}
	})
}
