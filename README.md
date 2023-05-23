# Pokedex
A website where Pokemon trainers could find and view pokemons.

Live: https://pokedex-job.vercel.app/

## Details
In this website, you could view the list of pokemons in the home page. The website initially loads 10 pokemons, but you could load more pokemons by scrolling down. You could also search pokemons by their name and id. Additionally you can sort the Pokemons by name or ID. The websites uses [PokeAPI](https://pokeapi.co/) to fetch information about pokemons.

## Getting Started

### Setup the Program
* Clone the repository using `git clone https://github.com/LipatJob/meta-trivia.git`
* Install dependencies using `npm install`

### Running the Program
* Run the program in development mode using `npm run dev`
* Run the program in production mode using `npm build; npm run start`

### Executing Tests
* Browse through the tests using the Cypress UI using `npm run cypress`
* Run tests using `npx cypress run`

## Skills Demonstrated
* Knowledge of Front end Development Tools and Libraries
  * React
  * NextJs
  * TailwindCSS  
* Agile Development (partially)
  * Created user stories from requirements 
  * User stories are captured as Github Issues
  * See [#1](https://github.com/LipatJob/pokedex/issues/1), [#2](https://github.com/LipatJob/pokedex/issues/2), [#3](https://github.com/LipatJob/pokedex/issues/3), [#4](https://github.com/LipatJob/pokedex/issues/4), [#5](https://github.com/LipatJob/pokedex/issues/5), [#7](https://github.com/LipatJob/pokedex/issues/7), [#8](https://github.com/LipatJob/pokedex/issues/8)
* Continuous Integration and Continuous Delivery
  * Used GitHub actions to create a CI pipeline that builds, lints and tests
  * Used GitHub actions to create a CD pipeline that deploys the website to Vercel
  * See [CI pipeline](https://github.com/LipatJob/pokedex/blob/main/.github/workflows/continuous-integration.yml) and [CD pipeline](https://github.com/LipatJob/pokedex/blob/main/.github/workflows/vercel-deployment.yml) 
* Behavior Driven Design/Test Driven Design
  * Used Cypress to verify that the application is satisfying acceptance criteria
  * See [Cypress tests](https://github.com/LipatJob/pokedex/tree/main/cypress/e2e) 
* Separation of Concerns
  * Created a service layer to abstract the API fetching logic from the user interface 
* Responsive User Interface Design
  * The website is usable on desktop and mobile phones 

## Bugs and Suggestions
Please feel free to create issues for any bug reports or suggestions for the website.

## Author
Job Lipat
