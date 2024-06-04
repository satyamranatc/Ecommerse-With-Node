let AdminFrom = document.getElementById("AdminFrom");

AdminFrom.addEventListener('submit', async (e) => {

    e.preventDefault()
    let Data = {
        ProductName: e.target[0].value,
        ProductPrice: e.target[1].value,
        ProductDescription: e.target[2].value,
        ProductCategory: e.target[3].value,
    }
    let Res = await axios.post("http://localhost:3200/api/SubmitProduct",Data);
    console.log(Res.data)


});