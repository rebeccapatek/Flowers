const RetailerComponent = (retailer) => {
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
        </section>
    `
}

export default RetailerComponent