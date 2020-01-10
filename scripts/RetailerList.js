
import { useRetailers } from "./RetailerDataProvider.js"
import RetailerComponent from "./RetailerComponent.js"



const contentTarget = document.querySelector(".retailers")

export const retailerList = () => {
    const retailers = useRetailers()

    const render = () => {
        contentTarget.innerHTML = retailers.map(retailer => {
            

            // Get HTML representation of product
            const html = RetailerComponent(retailer)

            return html
        }).join("")
    }

    render()
}

export default retailerList