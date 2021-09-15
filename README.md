# Implementation of Conway's Game of Life

### Steps for Setting up the App:
* Clone the Repository to your Local Machine.
* Navigate to the cloned folder through the Terminal.
* Make Sure you have [Node.js](https://nodejs.org/en/download/current/) installed.
* Run the Following Command Through the Terminal:
 ```bash
 npm install 
 ```
 * Once its finished simply execute the following line in the Terminal:
 
  ```bash
 npm start 
 ```
 
 <p align="center">
  <img width="800" src="https://user-images.githubusercontent.com/66672417/133478053-1a6551be-43da-412d-94dc-dc80434562cc.PNG">
</p>

## How the Game Works:
* Initially through a random seed, the first generation of cells will be created.
* You can keep clicking on #Progress# to progress the generation further.
* You can also click anywhere on the grid to add new cells.
* Adding new cells will then move the generation forward, the cells will evolve on the basis of following rules:
  > Any live cell with fewer than two live neighbors dies, as if caused by under population. \
  > Any live cell with two or three live neighbors lives on to the next generation. \
  > Any live cell with more than three live neighbors dies, as if by overpopulation. \
  > Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction. 
 * There is also an index associated with each cell, you can display them by clicking on Display Name.
 * Typing any index in the Search Bar will highlight that cell in the grid.

