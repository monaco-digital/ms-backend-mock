# Monaco Solicitors backend mock
An extremely simple backend to fetch `paragraphs` and `topics` on baseUrl `http://localhost:<port>`

## Endpoints
### Paragraphs
Endpoint: `/paragraphs`
Method: GET
Example Response:

```json
[
  ...
    {
    "id": "x__D3qPn4Cvk6r7e4HDNa",
    "summary": "I resigned because of their discrimination.",
    "textFirstPerson": "I refer to my recent resignation due to [insert protected characteristic] discrimination. ",
    "textThirdPerson": "I have been instructed by the above named client, who resigned because they were discriminated against.",
    "authorFirstPerson": "AV",
    "authorThirdPerson": "RP",
    "verticalHeight": "1",
    "status": "Live",
    "topics": [
    "D",
    "Rd"
    ]
    }
  ...
]

### Topics
Endpoint: `/topic`
Method: GET
Example Response:

```json
[
  ...
    {
      "_id": "5fd89b791bbe5657164463ae",
      "id": "E",
      "name": "EMPLOYED",
      "text": "Employed",
      "questionText": "I am still employed",
      "type": "employment_situation"
    }
  ...
]
