


// document.getElementById('eightGB').addEventListener('click', function () {

//     /*     let memoryPrice8gb = document.getElementById('memory-cost')
//         memoryPrice8gb = memoryPrice8gb.innerText = 200 */
//     updatePrice('memory-cost', 200)
// })

// document.getElementById('sixteenGB').addEventListener('click', function () {
//     /*     let memory16gb = document.getElementById('memory-cost')
//         memory16gb = memory16gb.innerText = 300 */
//     updatePrice('memory-cost', 300)
// })

// document.getElementById('ssd1').addEventListener('click', function () {
//     updatePrice('storage-cost', 100)
// })


function getEventLis(getId, updateId, price) {
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

function updatePrice(prodouctId, price) {
    let productPrice = document.getElementById(prodouctId)
    productPrice = productPrice.innerText = price
}