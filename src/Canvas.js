
import React, { useRef, useEffect, useState } from 'react'

const Canvas = (props) => {

  var arr = Array.apply(null, Array(540)).map((x, i) => { return {index:i, state:Math.random() < 0.5}; }); // Making an Array of 540 elements, with index values and random state values
  const array_chunks = (array, chunk_size) => Array(Math.ceil(array.length / chunk_size)).fill()
     .map((_, index) => index * chunk_size).map(begin => array.slice(begin, begin + chunk_size));   // Divide array into evenly sized chunks of chunk_size
  const matgrid = array_chunks(arr, 27) // Creating the grid matrix

  // To Exclude Borders from our grid
  for (let i = 0; i < matgrid.length; i++) {
      for (let j = 0; j < matgrid[0].length; j++) {
          if (i === 0 || j === 0 || i ===  matgrid.length-1  || j === matgrid[0].length - 1){
              matgrid[i][j].border = true;
              matgrid[i][j].state = false;
          }
          else{
              matgrid[i][j].border = false;
          }    

      }
  }

  // Initilize the states
  const[grid, setGrid] = useState(matgrid);
  const[index, setIndex] = useState(true);
  const[dispname, setDispname] = useState(false);
  const[name, setName] = useState(null);

  useEffect(()=>{
    var nextGeneration = [...grid]  // Make a shallow copy of the grid
    for(let l=1; l<grid.length-1; l++){
      for(let m=1; m<grid[0].length-1; m++){
          var aliveNeighbours = 0;
          for(let i=-1; i<=1; i++){
            for(let j=-1; j<=1; j++){
              aliveNeighbours +=grid[l+i][m+j].state===true?1:0;       // Add up all the alive neighbours
            }
          }
          aliveNeighbours-=grid[l][m].state===true?1:0;                 // Remove original cell count

          // Check for these conditions
          if(grid[l][m].state===true && aliveNeighbours<2){
            nextGeneration[l][m].state = false;
          }
          else if(grid[l][m].state===true && aliveNeighbours>3){
            nextGeneration[l][m].state = false;
          }
          else if(grid[l][m].state===false && aliveNeighbours===3){
            nextGeneration[l][m].state = true;
          }
          else{
            nextGeneration[l][m] = grid[l][m]
          }
      }
    }
    // Replace the original grid with the new grid
    setGrid(nextGeneration);

  },[index])

  return (
    <div>
      <table style={{marginBottom: '2vh', marginLeft: '22vw'}}>
        <tbody>
          {grid.map((row, index1)=> 
          <tr key={Math.random()}> 
            {row.map((item, index2)=> 
            <td 
              style=
              {item.index==name? {border:"0.5vh solid blue", width:"1.25vw", height: '2vh',textAlign:"center", borderRadius:"0.5vw", backgroundColor: "blue", cursor:"pointer", fontSize: "calc(0.5vh + 0.5vw)"}:item.state===true && item.border===false?
              { border:"0.5vh solid black", width:"1.25vw", height: '2vh',textAlign:"center", borderRadius:"0.5vw", backgroundColor: "red", cursor:"pointer", fontSize: "calc(0.5vh + 0.5vw)"}:
              { border:"0.5vh solid black", width:"1.25vw", height: '2vh',textAlign:"center", borderRadius:"0.5vw", cursor:"pointer", fontSize: "calc(0.5vh + 0.5vw)"}} 
              onClick={(event)=>{
                let newarr = [...grid];  // Making a Shallow copy of the grid
                let cell = item.border===false?
                    {...newarr[index1][index2], state: !grid[index1][index2].state }:
                    {...newarr[index1][index2], state: false };          // When the selected location is not border, then not of original state
                newarr[index1][index2] = cell;    // Insert new value
                setGrid(newarr)                   // Replace the grid
                 setIndex(!index)
              }} key={Math.random()}> 
                {dispname?item.index:<a>.</a>}
              </td>)}  
          </tr>)}
      </tbody>
      </table>
      <button onClick={()=>setIndex(!index)} style={{marginRight: '6vw', border:"0.3vh solid black", backgroundColor: "white", cursor:"pointer"}}> <b>Progress</b> </button>
      <button onClick={()=>setDispname(!dispname)} style={{marginRight: '6vw',border:"0.3vh solid black", backgroundColor: "white", cursor:"pointer"}} > <b>Display Names</b> </button>
      <input type="text" placeholder="Search for a Cell" onChange={(event)=>event.target.value==''?setName(null):setName(event.target.value)} style={{border:"0.3vh solid black", paddingLeft:"0.5vw",backgroundColor: "white"}} />
    </div>
  )
}

export default Canvas 