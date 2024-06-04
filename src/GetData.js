import useSWR from 'swr';
import Chart from "./Chart.js"
import Loading from "./Loading.js"
import Error from "./Error.js"

export default function GetData(props){
    const fetcher = (url) => fetch(url)
          .then((response) => {
             return response.json();
           })  
    const { data, error, isLoading } = useSWR(props.url,fetcher)
    
    if (isLoading) return <Loading/>
    if (error) return <Error/>
    return (
        <Chart
        id ="chart"
        data = {data}
        width = {window.innerWidth/1.1}
        height = {window.innerHeight/1.5}
        padding = {window.innerWidth/100}
        />    
    )           
}