let Main = document.getElementsByTagName("main")[0];

async function getList()
{

    let Res = await axios.get("http://localhost:3200/api/ProductList");
    let ProductList = Res.data;
    console.log(ProductList)

    Display(ProductList);
}


getList()



function Display(ProductList)
{

    Main.innerHTML = ""
    for(let P of ProductList)
    {
        Main.innerHTML += `

        <div class="Card">
            <img src="https://media.newyorker.com/photos/62c4511e47222e61f46c2daa/4:3/w_2663,h_1997,c_limit/shouts-animals-watch-baby-hemingway.jpg">
            <div class="CardContent">
                <h2>${P.ProductName}</h2>
                <p>${P.ProductDescription}</p>
                <p>${P.ProductPrice}</p>

                <div class = "Btns">
                    <button>Buy Now</button>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>

        
        
        `
    }

}