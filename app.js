const packages = [{
    priorityLevel: 'express',
    isFragile: false,
    weight: 2,
    to: 'Sir Harrington IV',
    trackingNumber: '1324kjs'
},
{
    priorityLevel: 'standard',
    isFragile: true,
    weight: .5,
    to: 'Master Mercutio',
    trackingNumber: '1325sdk'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: .5,
    to: 'Mistress Ravenfeather',
    trackingNumber: 'jffd147'
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 4,
    to: 'B. Robert Brown',
    trackingNumber: 'acdc145'
},
{
    priorityLevel: 'express',
    isFragile: true,
    weight: 6,
    to: 'Chancellor Wallace',
    trackingNumber: '4b2l0z'
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 5,
    to: 'Sarah Sharm',
    trackingNumber: '8081baz'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: 12,
    to: 'Tae Lien',
    trackingNumber: 'suz2367'
}]

function filterHeavy() {

    let packageWeights = packages.filter(package => package.weight >= 5)

    drawRecipientsHeavy(packageWeights)
    drawIdentificationNumbersHeavy(packageWeights)

}

function filterFragile() {

    let fragilePackages = packages.filter(package => package.isFragile)

    drawRecipientsFragile(fragilePackages)
    drawIdentificationNumbersFragile(fragilePackages)

}

function filterPriority() {

    let priorityPackages = packages.filter(package => package.priorityLevel == "express")

    drawRecipientsPriority(priorityPackages)
    drawIdentificationNumbersPriority(priorityPackages)

}

function drawRecipientsHeavy(array) {

    let recipientOneElement = document.getElementById("recipient-one")
    let recipientTwoElement = document.getElementById("recipient-two")
    let recipientThreeElement = document.getElementById("recipient-three")
    let recipientFourElement = document.getElementById("recipient-four")

    let recipients = ""

    array.forEach(packages => {
        recipients += `${packages.to}`
    })

    recipientOneElement.innerText = array[0].to
    recipientTwoElement.innerText = array[1].to
    recipientThreeElement.innerText = array[2].to
    // recipientFourElement.innerText = "N/A"

}

function drawRecipientsFragile(array) {

    let recipientOneElement = document.getElementById("recipient-one")
    let recipientTwoElement = document.getElementById("recipient-two")
    let recipientThreeElement = document.getElementById("recipient-three")
    let recipientFourElement = document.getElementById("recipient-four")

    let recipients = ""

    array.forEach(packages => {
        recipients += `${packages.to}`
    })

    recipientOneElement.innerText = array[0].to
    recipientTwoElement.innerText = array[1].to
    recipientThreeElement.innerText = array[2].to
    recipientFourElement.innerText = array[3].to

}

function drawRecipientsPriority(array) {

    let recipientOneElement = document.getElementById("recipient-one")
    let recipientTwoElement = document.getElementById("recipient-two")
    let recipientThreeElement = document.getElementById("recipient-three")
    let recipientFourElement = document.getElementById("recipient-four")

    let recipients = ""

    array.forEach(packages => {
        recipients += `${packages.to}`
    })

    recipientOneElement.innerText = array[0].to
    recipientTwoElement.innerText = array[1].to
    // recipientThreeElement.innerText = "N/A"
    // recipientFourElement.innerText = "N/A"

}

function drawIdentificationNumbersHeavy(array) {

    let identificationOneElement = document.getElementById("identification-one")
    let identificationTwoElement = document.getElementById("identification-two")
    let identificationThreeElement = document.getElementById("identification-three")
    let identificationFourElement = document.getElementById("identification-four")

    let identificationNumbers = ""

    array.forEach(packages => {
        identificationNumbers += `${packages.trackingNumber}`
    })

    
    identificationOneElement.innerText = array[0].trackingNumber
    identificationTwoElement.innerText = array[1].trackingNumber
    identificationThreeElement.innerText = array[2].trackingNumber
    // identificationFourElement.innerText = "N/A"
}

function drawIdentificationNumbersFragile(array) {

    let identificationOneElement = document.getElementById("identification-one")
    let identificationTwoElement = document.getElementById("identification-two")
    let identificationThreeElement = document.getElementById("identification-three")
    let identificationFourElement = document.getElementById("identification-four")

    let identificationNumbers = ""

    array.forEach(packages => {
        identificationNumbers += `${packages.trackingNumber}`
    })

    identificationOneElement.innerText = array[0].trackingNumber
    identificationTwoElement.innerText = array[1].trackingNumber
    identificationThreeElement.innerText = array[2].trackingNumber
    identificationFourElement.innerText = array[3].trackingNumber
}

function drawIdentificationNumbersPriority(array) {

    let identificationOneElement = document.getElementById("identification-one")
    let identificationTwoElement = document.getElementById("identification-two")
    let identificationThreeElement = document.getElementById("identification-three")
    let identificationFourElement = document.getElementById("identification-four")

    let identificationNumbers = ""

    array.forEach(packages => {
        identificationNumbers += `${packages.trackingNumber}`
    })

    identificationOneElement.innerText = array[0].trackingNumber
    identificationTwoElement.innerText = array[1].trackingNumber
    // identificationThreeElement.innerText = "N/A"
    // identificationFourElement.innerText = "N/A"
}

function drawAllPackages(){

    drawRecipientsHeavy(packages)
    drawRecipientsFragile(packages)
    drawRecipientsPriority(packages)
    drawIdentificationNumbersHeavy(packages)
    drawIdentificationNumbersFragile(packages)
    drawIdentificationNumbersPriority(packages)
}

drawAllPackages()