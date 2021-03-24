# REST API example using Sequelize
<table>
  <thead>
    <tr>
      <th>Method</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>Retrieves resources</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>Creates resources</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>Changes and/or replaces resources or collections</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>Deletes resources</td>
    </tr>
  </tbody>
</table>

## Install Dependencies 

    npm install

## Run the Server

    npm start
<hr>

# Dining Hall

## Get list of Dining Halls

#### Request

`GET /api/dining`
  
    curl http://localhost:3000/api/dining

#### Response
    [{
        "hall_id": 1,
        "hall_name": "North Campus Diner",
        "hall_address": "4121 Farm Dr, College Park, MD 20742",
        "hall_lat": "38.9923223",
        "hall_long": "-76.9466945"
    },
    {
        "hall_id": 2,
        "hall_name": "South Campus Dining Hall",
        "hall_address": "7093 Preinkert Dr, College Park, MD 20740",
        "hall_lat": "38.9832579",
        "hall_long": "-76.9437231"
    },
        ...
    }]
## Get a Specific Dining Hall

#### Request

`GET /api/dining/:hall_id`

    curl http://localhost:3000/api/dining/1

#### Response

    [{
        "hall_id":1,
        "hall_name":"North Campus Dining Hall",
        "hall_address": "4121 Farm Dr, College Park, MD 20742",
        "hall_lat": "38.9923223",
        "hall_long": "-76.9466945"
    }]
    


## Create a new Dining Hall

#### Request

`POST /api/dining`

    curl -d "hall_name=Example1&hall_address=Stamp&hall_lat=38.9923&hall_long=-76.9466" -X POST http://localhost:3000/api/dining
#### Response

    {
        "hall_name":"Example",
        "hall_address": "4121 Farm Dr, College Park, MD 20742",
        "hall_lat": "38.9923223",
        "hall_long": "-76.9466945"
    }

## Updating an Existing Dining Hall

#### Request

`PUT /api/dining`

    curl -d "hall_id=4&hall_name=Example1&hall_address=Stamp&hall_lat=38.9923&hall_long=-76.9466" -X PUT http://localhost:3000/api/dining

#### Response

    Successfully Updated

## Delete an Existing Dining Hall

#### Request

`DELETE /api/dining/:hall_id`

    curl -X DELETE http://localhost:3000/api/dining/4

#### Response

    Successfully Deleted
<hr>

# Meals

## Get list of Meals

#### Request

`GET /api/meals`

    curl http://localhost:3000/api/meals
#### Response
    [{
        "meal_id":1,
        "meal_name":"Scrambled Eggs",
        "meal_category":"B"
    },
    {
        "meal_id":2,
        "meal_name":"French Toast",
        "meal_category":"B"
    },
    {
        "meal_id":3,
        "meal_name":"Pancakes",
        "meal_category":"B"
    },
        ...
    ]
## Get a Specific Meal

#### Request

`GET /api/meals/:meal_id`

    curl http://localhost:3000/api/meals/1

#### Response

    [{
        "meal_id":1,
        "meal_name":"Scrambled Eggs",
        "meal_category":"B"
    }]
    
## Updating an Existing Meal

#### Request

`PUT /api/meals`

    curl -d "meal_id=1&meal_name=Scrambled Eggs&meal_category=L" -X PUT http://localhost:3000/api/meal

#### Response

    Successfully Updated

<hr>

# Macros

## Get list of Macros

#### Request

`GET /api/macros`

    curl http://localhost:3000/api/macros

#### Response
    [{
        "macro_id":1,
        "calories":218,
        "serving_size":20,
        "cholesterol":544,
        "sodium":206,
        "carbs":1,
        "protein":17,
        "meal_id":1,
        "fat":16
    },
    {
        "macro_id":2,
        "calories":371,
        "serving_size":1,
        "cholesterol":0,
        "sodium":209,
        "carbs":10,
        "protein":5,
        "meal_id":2,
        "fat":10
    },
        ...
    ]
## Get a Macros for a Specific Meal

#### Request

`GET /api/macros/:meal_id`

    curl http://localhost:3000/api/macros/1

#### Response

    [{
        "macro_id":1,
        "calories":218,
        "serving_size":20,
        "cholesterol":544,
        "sodium":206,
        "carbs":1,
        "protein":17,
        "meal_id":1,
        "fat":16
    }]
    
## Updating an Existing Macro

#### Request

`PUT /api/macros`

    curl -d "macro_id=1&calories=318&serving_size=20&cholesterol=544&sodium=206&carbs=1&protein=17&meal_id=1&fat=16" -X PUT http://localhost:3000/api/macros

#### Response

    Successfully Updated
<hr>

# Custom Client SQL

## Custom SQL Query
#### Request

`GET /api/custom`

    curl --location --request GET 'http://localhost:3000/api/custom' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'query=SELECT * FROM Meals'

#### Response
     [{
        "meal_id":1,
        "meal_name":"Scrambled Eggs",
        "meal_category":"B"
    },
    {
        "meal_id":2,
        "meal_name":"French Toast",
        "meal_category":"B"
    },
    {
        "meal_id":3,
        "meal_name":"Pancakes",
        "meal_category":"B"
    },
        ...
    ]
## Get Meal Macro Information
#### Request

`GET /api/custom`

    curl --location --request GET 'http://localhost:3000/api/table/data'  

#### Response
    [{
        "meal_name": "Scrambled Eggs",
        "calories": 218,
        "carbs": 1,
        "sodium": 206,
        "protein": 17,
        "fat": 16,
        "cholesterol": 544
    },
    {
        "meal_name": "French Toast",
        "calories": 371,
        "carbs": 10,
        "sodium": 209,
        "protein": 5,
        "fat": 10,
        "cholesterol": 0
    },
    {
        "meal_name": "Pancakes",
        "calories": 430,
        "carbs": 15,
        "sodium": 111,
        "protein": 4,
        "fat": 15,
        "cholesterol": 30
    },
        ...
    ]

## Get Meal Location Information
#### Request

`GET /api/custom`

    curl --location --request GET 'http://localhost:3000/api/map/data'  

#### Response
    [{
        "hall_name": "North Campus Diner",
        "hall_address": "4121 Farm Dr, College Park, MD 20742",
        "hall_lat": "38.9923223",
        "hall_long": "-76.9466945",
        "meal_name": "Scrambled Eggs"
    },
    {
        "hall_name": "North Campus Diner",
        "hall_address": "4121 Farm Dr, College Park, MD 20742",
        "hall_lat": "38.9923223",
        "hall_long": "-76.9466945",
        "meal_name": "Pancakes"
    },
    {
       "hall_name": "North Campus Diner",
        "hall_address": "4121 Farm Dr, College Park, MD 20742",
        "hall_lat": "38.9923223",
        "hall_long": "-76.9466945",
        "meal_name": "Pork Sausage Link"
    },
        ...
    ]
