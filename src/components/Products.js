const Products  = () => {
    const products = [
        {
            id: 1,
            name: "Rice",
            price: "100.50",
            desc: "Bamathi Rice"
        },
        {
            id: 2,
            name: "Oil",
            price: "50.50",
            desc: "Sunflower Oil"
        },
        {
            id: 3,
            name: "Soap",
            price: "56.75",
            desc: "Bath Soap"
        }
    ]
    return (
        <>
            {
                products.map((e)=>{
                    return (
                        <>
                            <h1 key={e.name}>{e.name}</h1>
                            <h3 key={e.price}>{e.price}</h3>
                            <p key={e.desc}>{e.desc}</p>
                        </>
                    )
                })
            }
        
        </>
    )
}

export default Products