const FlowerComponent = (flower) => {
    return `
        <section class="flower">
            <header>
                <h2>Flower number ${flower.id}</h2>
            </header>
            <div>
                Name: ${flower.commonName}
            </div>
            <div>
                Color: ${flower.color}
            </div>
        </section>
    `
}

export default FlowerComponent