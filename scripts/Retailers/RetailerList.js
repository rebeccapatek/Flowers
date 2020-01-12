
import { useRetailers } from "./RetailerDataProvider.js"
import RetailerComponent from "./RetailerComponent.js"
import { useDistributors } from "../Distributors/DistributorDataProvider.js"
import { useNurseries } from "../Nurseries/NurseryDataProvider.js"
import { useDistributorNurseries } from "../distributornurseryDataProvider.js"


const contentTarget = document.querySelector(".retailers")

export const retailerList = () => {
    const retailers = useRetailers()
    const distributors = useDistributors()
    const nurseries = useNurseries()
    const distribNur = useDistributorNurseries()

    const render = () => {
        contentTarget.innerHTML = retailers.map(retailer => {
           
            const dis = distributors.find(name =>
                name.id === retailer.distributorId)
            const nurseryRelationships = distribNur.filter(ds => ds.distributorId === retailer.id)
            const foundnurseryArray = nurseryRelationships.map(rn => {
                const foundNursery = nurseries.find(nursery => nursery.id === rn.nurseryId)
                return foundNursery
            })

           
          

            // Get HTML representation of product
            const html = RetailerComponent(retailer, dis, foundnurseryArray)

            return html
        }).join("")
    }

    render()
}

export default retailerList