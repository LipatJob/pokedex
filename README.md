[![Continouous Integration](https://github.com/LipatJob/pokedex/actions/workflows/continuous-integration.yml/badge.svg)](https://github.com/LipatJob/pokedex/actions/workflows/continuous-integration.yml)
[![Continouous Delivery](https://github.com/LipatJob/pokedex/actions/workflows/vercel-deployment.yml/badge.svg)](https://github.com/LipatJob/pokedex/actions/workflows/vercel-deployment.yml)

# Pokedex
A website where Pokemon trainers could find and view pokemons.

Live: https://pokedex-job.vercel.app/


## Details
Welcome to the Pokedex website! This site allows you to explore a comprehensive list of Pokemons. Here's what you can do:

* View Pokemons: On the home page, you will find an initial list of 10 Pokemons. As you scroll down, more Pokemons will be loaded dynamically, providing an endless browsing experience.

* Search Pokemons: Use the search functionality to find specific Pokemons by their name or ID. Simply enter the desired search term, and the list will update to display the matching results.

* Sort Pokemons: You can sort the Pokemons based on their name or ID. Choose the sorting option that suits your preference, and the list will be rearranged accordingly.

* PokeAPI Integration: This website leverages the PokeAPI to fetch comprehensive information about the Pokemons, ensuring accurate and up-to-date details.

Feel free to explore the fascinating world of Pokemons and dive into their unique characteristics and attributes. Start your journey now with the Pokedex website!

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

## Planned Features
Please see the [issues the repository](https://github.com/LipatJob/pokedex/issues) for planned features  

## Bugs and Suggestions
Please feel free to create issues for any bug reports or suggestions for the website.

## Author
Job Lipat
