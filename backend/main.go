package main

import (
	"database/sql"
	"fmt"
	"github.com/go-sql-driver/mysql"
	"github.com/labstack/echo/v4"
	_ "github.com/labstack/echo/v4"
	_ "github.com/labstack/echo/v4/middleware"
	"gorm.io/gen"
)
	- "gorm.io/gen"
)

func main() {
	fmt.Println("running api server...")

	e := echo.New()

	e.GET("/", func(c echo.Context) error {
		return c.String(200, "Hello, World!")
	})

	e.POST("ping", func(c echo.Context) error {
		return c.String(200, "Pong!")
	})
	e.Logger.Fatal(e.Start(":1323"))

}

func handleDb(){
	g := gen.NewGenerator(gen.Config{
		OutPath: "./query",
		Mode: gen.WithoutContext| gen.WithDefaultQuery |gen.WithQueryInterface,

	})
}