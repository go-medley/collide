package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/helmet/v2"
)

func main() {
	app := fiber.New()

	app.Use(helmet.New())

	app.Get("/", func(c *fiber.Ctx) error {
		payload := map[string]string{"message": "hello, collider"}
		return c.JSON(payload)
	})

	app.Listen(":3000")
}
