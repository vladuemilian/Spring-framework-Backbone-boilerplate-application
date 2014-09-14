
# A boilerplate web application in Spring framework 4 and Backbone #

This application provides a folder structure, an overview of how the
folder structure should look in a big application.

The bussines logic is built around decoratee pattern which I consider
a good practice in big projects.

The project comes with a event-driven development approach in mind 
using Spring events. Also a validation sample is provided. All of those
features is coupled with service layer using decoratee pattern to keep
your services as clean as possible.

The project was not intented to be published on github, but now, the 
target of this repository is to inspire another developers about how 
to structure their applications :)

#### Technical details ####

The frontend is built as single page application (SPA) with Backbone, 
all routes are handled by Backbone. When the URL changes, only required
data are requested from the server.

#### Technologies used ####

Spring Framework 4 - for building the restful API

MongoDB - for storaged

Backbone - backbone framework for building the frontend

Maven

### Run the project ###

`git@github.com:vladuemilian/Spring-framework-Backbone-boilerplate-application.git`

`cd Spring-framework-Backbone-boilerplate-application`

Install Mongo on your machine and update `src/main/java/application.properties` 
mongo connection details.

`mvn spring-boot:run`

Browse http://localhost:9005


