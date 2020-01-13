
import { useRetailers } from "./RetailerDataProvider.js"
import RetailerComponent from "./RetailerComponent.js"
import { useDistributors } from "../Distributors/DistributorDataProvider.js"
import { useNurseries } from "../Nurseries/NurseryDataProvider.js"
import { useDistributorNurseries } from "../distributornurseryDataProvider.js"
import { useNuseryflowers } from "../nuseryflowerDataProvider.js"
import { useFlowers } from "../Flowers/FlowerDataProvider.js"


const contentTarget = document.querySelector(".retailers")

export const retailerList = () => {
    const retailers = useRetailers()
    const distributors = useDistributors()
    const nurseries = useNurseries()
    const distribNur = useDistributorNurseries()
    const nursFlow = useNuseryflowers()
    const flowers = useFlowers()
    const render = () => {
        contentTarget.innerHTML = retailers.map(retailer => {
           
            const dis = distributors.find(name =>
                name.id === retailer.distributorId)
            //find the distibuters with a matching distributor id to this retailer
            const nurseryRelationships = distribNur.filter(ds => ds.distributorId === dis.id)
            const foundnurseryArray = nurseryRelationships.map(rn => {
                const foundNursery = nurseries.find(nursery => nursery.id === rn.nurseryId)
                return foundNursery
            })

    // Map over each nursery in the new array containing the associated nurseries with the current retailer
            const flowerArray=foundnurseryArray.map(nursery => {

        // For each nurseryFlowerRelationship object from the join table fetch, filter the nurseryFlowerRelationship objects (fk) that match with the current nursery id (pk)
            const nursFlowRelation = nursFlow.filter(nf => nf.nurseryId === nursery.id)
            //need to push into a

        // Map over each nurseryFlowerRelation object in the new array
            const foundFlowerArray = nursFlowRelation.map(nfr => {

          // For each nurseryFlowerRelation object, perform a find on the full flowers array from the fetch and compare the flower object id (pk) to the flowerId (fk) on the nurseryFlowerRelation object
          const foundFlower = flowers.find(flower => flower.id === nfr.flowerId)
          
          return foundFlower
        })
        return foundFlowerArray
    })
      
console.log(flowerArray)
           
          

            // Get HTML representation of product
            const html = RetailerComponent(retailer, dis, foundnurseryArray, flowerArray)

            return html
        }).join("")
    }

    render()
}

export default retailerList