server.get("/documentation", (request, response) => {
    response.redirect("https://pkg.go.dev/github.com/Goscord/goscord#section-documentation");
});