package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gocolly/colly"
)


func scrapeBooks(w http.ResponseWriter, r *http.Request) {
	scrapeUrl := "https://www.goodreads.com/shelf/show/books-read-in-school"
	c := colly.NewCollector(colly.AllowedDomains("www.goodreads.com"))
	books := []string{}
	c.OnHTML("a.bookTitle", func(h*colly.HTMLElement){
		books = append(books, h.Text)
	})
	c.Visit(scrapeUrl)

	w.Header().Set("Content Type", "application/json")
	json.NewEncoder(w).Encode(books)

	c.OnError(func(r *colly.Response, err error) {fmt.Println("Request URL:", r.Request.URL, "failed with response:", r, "nError:", err)})
}

func main() {
    http.HandleFunc("/api/books", scrapeBooks)
    fmt.Println("Starting server on :8080...")
    http.ListenAndServe(":8080", nil)
}