
function getEventLis(getId, updateId, price) { // first id second updateid third price this is very how we need to take argument.
    document.getElementById(getId).addEventListener('click', function () {
        updatePrice(updateId, price)
    })
}

getEventLis('eightGB', 'memory-cost', 200)
getEventLis('sixteenGB', 'memory-cost', 300)
getEventLis('ssd1', 'storage-cost', 100)
getEventLis('ssd2', 'storage-cost', 200)
getEventLis('ssd3', 'storage-cost', 300)
getEventLis('free-delivery', 'delivery-cost', 0)
getEventLis('paid-delivery', 'delivery-cost', 50)

function updatePrice(prodouctId, price) { // first receive product id second price
    let productPrice = document.getElementById(prodouctId)
    productPrice = productPrice.innerText = price


    //total price
    let bestPrice = document.getElementById('best-price')
    let memoryCost = document.getElementById('memory-cost')
    let storageCost = document.getElementById('storage-cost')
    let deliveryCost = document.getElementById('delivery-cost')
    let totalPrice = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText)

    let total = document.getElementById('total-price')
    total.innerText = totalPrice
}

