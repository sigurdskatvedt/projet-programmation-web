import "./layoutstyle.css"
import Map from "../../components/Map"
import TopComp from "./top"
import BottComp from "./bottom"
import GeoR from "./georesto"


export default function LayoutTest() {
    return (
        
        <div>
        <TopComp />
        
        <Map />
        
        <BottComp />
       

        
        </div>
    )
  }