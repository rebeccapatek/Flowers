const RetailerComponent = (retailer, dis, foundnurseryArray, flowerArray) => {
    return `
        <section class="retailer">
            <header>
                <h2>Retailer Name: ${retailer.name}</h2>
            </header>
            <div>
                Address: ${retailer.address}
            </div>
            <div>
             ${retailer.city}, ${retailer.state}
            </div>
            <div>
            ${dis.name}
            </div>
            <section class="distrib__nursery">
                Nurseries include:
                <ol>
                ${
                    foundnurseryArray.map(n => {
                        return `<li>${n.name}</li>`
                    }).join("")
                }
                </ol>
            <section class="retailers__flowers"
                Flowers available at this retailer:
                <ol>
                ${
                    flowerArray.map(f => {
                        return `<li>${f.commonName}</li>`
                    }).join("")
                }
                </ol>
            </section>

        </section>
    `
}

export default RetailerComponent