package main

import (
	"fmt"
	"github.com/labstack/echo/v4"
	"gorm.io/driver/mysql"
	"gorm.io/gen"
	"gorm.io/gorm"
	"time"
)

func main() {
	fmt.Println("running api server...")
	//handleDb("QZ1W", 10, 10, "QZ1W", "test", "test")
	e := echo.New()

	e.GET("/", func(c echo.Context) error {
		return c.String(200, "Hello, World!")
	})

	e.POST("ping", func(c echo.Context) error {
		return c.String(200, "Pong!")
	})
	e.POST("add", func(c echo.Context) error {
		callsign := c.FormValue("callsign")
		hisrs := c.FormValue("hisrs")
		myrs := c.FormValue("myrs")
		qth := c.FormValue("qth")
		name := c.FormValue("name")
		remark := c.FormValue("remark")
		userid := c.FormValue("userid")
		handleDb(callsign, hisrs, myrs, qth, name, remark, userid)
		return c.String(200, "OK")
	})
	e.Logger.Fatal(e.Start(":1323"))

}

type hamlogs struct {
	ID        int `gorm:"primaryKey"`
	CreatedAt string
	//UpdatedAt string `gorm:"type:datetime"`
	CALLSIGN string
	HISRS    string
	MYRS     string
	QTH      string
	NAME     string
	REMARK   string
	USERID   string
}

func handleDb(callsign string, hisrs string, myrs string, qth string, name string, remark string, userid string) {
	g := gen.NewGenerator(gen.Config{
		OutPath:       "./query",
		Mode:          gen.WithoutContext | gen.WithDefaultQuery | gen.WithQueryInterface,
		FieldNullable: true,
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

	log := hamlogs{
		CALLSIGN:  callsign,
		HISRS:     hisrs,
		MYRS:      myrs,
		QTH:       qth,
		NAME:      name,
		REMARK:    remark,
		CreatedAt: time.Now().String(),
		USERID:    userid,
	}
	err := db.AutoMigrate(&hamlogs{})
	if err != nil {
		return
	}
	//g.Execute()
	//db.Create(&log)
	g.Execute()
	err = db.Transaction(func(tx *gorm.DB) error {
		err := tx.Create(&log).Error
		if err != nil {
			return err
		}
		return nil
	})
	g.Execute()
}
