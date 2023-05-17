# BondFilm API

This project contains a simple REST API for movies. It is written in Node.js and uses Express.js as the web server.


## API Reference

#### Get all movies

```http
  GET /movies
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `apiKey` | `string` | **Required**. Your API key |

#### Get movie

```http
  GET /movies/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `imdbID`      | `string` | **Required**. Id of item to fetch |

#### Post movie(Create a movie)

```http
  Post /movies
```
Method: `POST `URL: `/movie `Body: `{ "Title": "moviename", "Year": "2010", "Released":"dd-mm-yy", "Genre": "Action, Adventure, Thriller" }`

```http
  Update /movies/:id
```
Method: `PUT `URL: `/movie/:id `Body: `{ "Title": "updatedmoviename", "Year": "updated Year", "Released":"updated date", "Genre": " updated genre" }`


```http
  Delete /movies/:id
```
Method: `DELETE `URL: `/movie/:id `
## Using the API with Postman

1. Download and install Postman.
2. USe the predefined APIKEy i.e 420 to start exploring the API.

3. Create a new "Request" in your collection 
for each API endpoint, and configure it with the correct method and URL (as described above.

4. For POST and PUT calls, go to the "Body" tab of your request and select "raw" and "JSON" as the format. Then enter the JSON data for your character as shown in the example above.
