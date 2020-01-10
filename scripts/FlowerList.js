


import { useFlowers } from "./FlowerDataProvider.js"
import FlowerComponent from "./FlowerComponent.js"


const contentTarget = document.querySelector(".flowers")

export const flowerList = () => {
    const flowers = useFlowers()

    const render = () => {
        contentTarget.innerHTML = flowers.map(flower => {
            

            // Get HTML representation of product
            const html = FlowerComponent(flower)

            return html
        }).join("")
    }

    render()
}

export default flowerList