import {useRef, useEffect} from "react";
import * as d3 from "d3";





export default function Chart(props){
    const width = props.width;
    const height = props.height;
    const padding = props.padding;
    const dataSet = props.data
    const window = useRef("#window")
    const svg = useRef("#svg")
    const legend = useRef("#legend")
    const lenght = props.data.children.lenght
    console.log(lenght);
    const root  = d3.treemap()
    .size([width, height])
    .padding(2)
    (d3.hierarchy(dataSet)
       .sum((d) => d.value)
       .sort((a, b) => b.height - a.height || b.value - a.value))
    const color = d3.scaleOrdinal(dataSet.children.map(d => d.name), d3.schemeTableau10)

    useEffect(() => void d3.select(svg.current)
                           .selectAll("g")
                           .data(root.leaves())
                           .join("g")
                           .attr("transform", d => `translate(${d.x0},${d.y0})`)
                           .append("rect")
                           .attr("fill", d => { while (d.depth > 1) d = d.parent; return color(d.data.name);})
                           .attr("width", d => d.x1 - d.x0)
                           .attr("height", d => d.y1 - d.y0)
                           .attr("class","tile")
                           .attr("data-name",d => {while (d.depth > 1) d = d.parent; return d.data.name})
                           .attr("data-category",d => {while (d.depth > 1) d = d.parent; return d.data.category})
                           .attr("data-value",d => {while (d.depth > 1) d = d.parent; return d.data.name})                     
    )
    
    useEffect(() => void d3.select(window.current)
                           .append("svg")
                           .attr("id","legend")
                           .attr("width",width + "px")
                           .attr("height",height/4 + "px")
                           .selectAll("rect")
                           .data(dataSet.children)
                           .enter()
                           .append("rect")
                           .attr("width",30)
                           .attr("height",30)
                           .attr("fill", d=> color(d.name))
                           .attr("x",(d,i) => i*60)              
    )
    useEffect(() => void d3.select(legend.current)
                           .selectAll("text")
                           .data(dataSet.children)
                           .enter()
                           .append("text")
                           .text(d => d.name)
                           .attr("x",(d,i) => i*60)
                           .attr("y",50)
    )
    
    

    return (
      <div id ="window">
        <svg 
          id ="svg"
          width = {width + "px"}
          height = {height + "px"}
        >
        </svg>
      </div>
    )
    
   
  }