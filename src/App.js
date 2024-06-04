import { useState } from "react"
import GetData from "./GetData.js"
import Button from "./Button.js"


export default function App() {
 const [title,setTitle] = useState("Video Game Sales");
  return (
    <div id ="background">
      <div>
        <Button
        onclick = {() => setTitle("Video Game Sales")}
        sourceName = "Video Game Sales Data Set"
        bg = {title === "Video Game Sales"?"var(--background2)":"var(--background3)"}
        />
        <Button
        onclick = {() => setTitle("Movie Sales")}
        sourceName = "Movie Sales Data Set"
        bg = {title === "Movie Sales"?"var(--background2)":"var(--background3)"}
        />
        <Button
        onclick = {() => setTitle("Kickstarter Pledges")}
        sourceName = "Kikstarter Pledges Data Set"
        bg = {title === "Kickstarter Pledges"?"var(--background2)":"var(--background3)"}
        />
      </div>
      
      <h1 id ="title">{title}</h1>
      {title === "Video Game Sales"&&<h4 id = "description">Top 100 Most Sold Video Games Grouped by Platform</h4>}
      {title === "Movie Sales"&&<h4 id = "description">Top 100 Highest Grossing Movies Grouped By Genre</h4>}
      {title === "Kickstarter Pledges"&&<h4 id = "description">Top 100 Most Pledged Kickstarter Campaigns Grouped By Category</h4>}
      {title === "Video Game Sales"&&
        <GetData
          url = {"https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json"}
        />}
      {title === "Movie Sales"&&
       <GetData
          url = {"https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json"}
       />}
      {title === "Kickstarter Pledges"&&
        <GetData
          url = {"https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json"}
        />}   
    </div>  
  )
}


