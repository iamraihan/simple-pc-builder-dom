function updatePrice(prodouctId, price) {
    let memoryPrice8gb = document.getElementById(prodouctId)
    memoryPrice8gb = memoryPrice8gb.innerText = price
}


document.getElementById('eightGB').addEventListener('click', function () {

    /*     let memoryPrice8gb = document.getElementById('memory-cost')
        memoryPrice8gb = memoryPrice8gb.innerText = 200 */
    updatePrice('memory-cost', 200)
})

document.getElementById('sixteenGB').addEventListener('click', function () {
    /*     let memory16gb = document.getElementById('memory-cost')
        memory16gb = memory16gb.innerText = 300 */
    updatePrice('memory-cost', 300)
})

document.getElementById('ssd1').addEventListener('click', function () {
    updatePrice('storage-cost', 100)
})
