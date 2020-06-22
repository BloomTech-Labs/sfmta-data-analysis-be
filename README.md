# API Documentation

#### 1️⃣ Backend delpoyed at [AWS beanstalk](https://be.datadriventransit.org/) <br>

## 1️⃣ Getting started

To get the server running locally:



- Clone this repo
- **npm install** to install all required dependencies
- **npm run dev** to start the local server
- **npm test** to start server using testing environment

### Backend framework goes here

-    express to structure out alot of http stuff
-    cors for cross origin problems
-    helmet for basic security
-    knex and postgresql to pull historical data to send to front end

## 2️⃣ Endpoints

#### Organization Routes

| Method | Endpoint                | Access Control | Description                                               |
| ------ | ----------------------- | -------------- | ----------------------------------------------------------|
| GET    | `/api/type`             | all users      | Returns a list of transit types.                          |
| POST   | `/api/route`            | all users      | Returns a list of routes for a specific type.             |
| GET    | `/api/route/:id`        | all users      | returns lat and lon of specified route.                   |
| GET    | `/api/report`           | all users      | returns an overall report of all routes                   |
| POST   | `/api/report/type`      | all users      | returns an array of reports for specified type.           |
| POST   | `/api/report/date`      | all users      | returns an array of reports for specified type and date   |
| POST   | `/api/route-report/`    | all users      | returns an array of reports for specified route and date  |


# Report Model
```
{
    id: integer,
    date: string:timestamp,
    report: [
        date: string:timestamp,
        coverage: percentage with decimals,
        map_data: {
            type: `FeatureCollection`,
            bunches: [
                type: `Feature`,
                geometry: {
                    type: `point`,
                    coordinates: [
                        integers with decimals...
                    ]
                },
                properties: {
                    time: string:timestamp,
                    stopId: integer in a string
                }
            ...]
        },
        num_gaps: integer,
        route_id: string,
        line_chart: {
            gaps: [
                integers...
            ],
            times: [
                00:00-23:50
            ],
            bunches: [
                integers...
            ]
        },
        route_name: string,
        route_type: bus,
        num_bunches: integer,
        route_table: [
            {
                coverage: integer with decimal,
                route_id: string of an integer,
                route_id: string,
                route_name: string,
                overall_health: integer with decimal,
                gapped_percentage: integer with decimal,
                bunched_percentage: integer with decimal,
                on_time_percentage: integer with decimal
            }...
        ]...
    ]
}
```


## 2️⃣ Actions

`get()` -> Returns all transit types

`getRoutes(route_type)` -> Returns a list of route names for that type

`getCoords(id)` ->returns a list of coordinates for that route id

`getAll()` -> Returns a report of all transits 

`getByDate(date)` -> returns a report of specified routes for date parameter

<br>
<br>
<br>


## 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:


    
    *  HOST - database host url
    *  DBPORT - database port
    *  USER - database user
    *  PASSWORD - database password
    *  DATABASE - the database
    *  DB_ENV - specifies the enviroment defaults to development
    
## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](https://github.com/Lambda-School-Labs/sfmta-data-analysis-fe) for details on the fronend of our project.

