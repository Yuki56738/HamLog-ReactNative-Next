package main

import (
	"fmt"
	"github.com/labstack/echo/v4"
	_ "github.com/labstack/echo/v4"
	_ "github.com/labstack/echo/v4/middleware"
)

func main() {
	fmt.Println("running api server...")

	e := echo.New()

	e.GET("/", func(c echo.Context) error {
		return c.String(200, "Hello, World!")
	})
	e.Logger.Fatal(e.Start(":1323"))
}
