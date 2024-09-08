package main

import (
	"fmt"
	"github.com/labstack/echo/v4"
	"gorm.io/driver/mysql"
	"gorm.io/gen"
	"gorm.io/gorm"
)

func main() {
	fmt.Println("running api server...")
	handleDb()
	e := echo.New()

	e.GET("/", func(c echo.Context) error {
		return c.String(200, "Hello, World!")
	})

	e.POST("ping", func(c echo.Context) error {
		return c.String(200, "Pong!")
	})
	e.Logger.Fatal(e.Start(":1323"))

}

type hamlog struct {
	ID        int    `gorm:"primaryKey"`
	CreatedAt string `gorm:"type:datetime"`
	UpdatedAt string `gorm:"type:datetime"`
	CALLSIGN  string
	HISRS     int
	MYRS      int
	QTH       string
	NAME      string
	REMARK    string
}

func handleDb() {
	g := gen.NewGenerator(gen.Config{
		OutPath: "./query",
		Mode:    gen.WithoutContext | gen.WithDefaultQuery | gen.WithQueryInterface,
	})
	var dbToCreateDb *gorm.DB
	dbToCreateDb, _ = gorm.Open(mysql.Open("root:password@tcp(127.0.0.1:3306)/?charset=utf8mb4&parseTime=True&loc=Local"), &gorm.Config{})
	g.UseDB(dbToCreateDb)
	_ = dbToCreateDb.Exec("CREATE DATABASE IF NOT EXISTS hamlog;")
	g.Execute()
	var db *gorm.DB
	db, _ = gorm.Open(mysql.Open("root:password@tcp(127.0.0.1:3306)/hamlog?charset=utf8mb4&parseTime=True&loc=Local"), &gorm.Config{})
	g.UseDB(db)
	g.Execute()

}
