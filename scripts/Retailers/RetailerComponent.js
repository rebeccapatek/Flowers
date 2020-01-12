const RetailerComponent = (retailer, dis, foundnurseryArray) => {
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
            </section>

        </section>
    `
}

export default RetailerComponent