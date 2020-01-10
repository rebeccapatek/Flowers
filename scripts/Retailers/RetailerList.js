
import { useRetailers } from "./RetailerDataProvider.js"
import RetailerComponent from "./RetailerComponent.js"
import { useDistributors } from "../Distributors/DistributorDataProvider.js"


const contentTarget = document.querySelector(".retailers")

export const retailerList = () => {
    const retailers = useRetailers()
    const distributors = useDistributors()

    const render = () => {
        contentTarget.innerHTML = retailers.map(retailer => {
           
            const dis = distributors.find(name =>
                name.id === retailer.distributorId)

            // Get HTML representation of product
            const html = RetailerComponent(retailer, dis)

            return html
        }).join("")
    }

    render()
}

export default retailerList