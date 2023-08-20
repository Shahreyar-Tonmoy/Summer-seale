let total = 0
function handleClickBtn(target) {

    // card name li appendChild
    const cartName = document.getElementById('cart-name')
    const cardName = target.childNodes[3].childNodes[3].innerText
    const li = document.createElement('li')
    li.innerText = cardName
    cartName.appendChild(li)

    // totalPrice Selection

    const cardPrice = target.childNodes[3].childNodes[5].innerText.split(" ")[0]
    total = parseFloat(total) + parseFloat(cardPrice)
    const tk = document.getElementById('tk')
    const totalPrice = document.getElementById('total-price').innerText = total
    totalPrice.innerText = total + tk

    // discount Selection


    const validCoupon = document.getElementById('coupon-btn').addEventListener('click', function () {
        const couponField = document.getElementById('coupon-field')
        const couponFieldName = couponField.innerText
        const couponNumber = '0.2'
        const discountContainer = document.getElementById('discount-container')
        total = parseFloat(totalPrice) * parseFloat(couponNumber)
        const totalDiscount = document.getElementById('discount-container').innerText = total.toFixed(2)

        // total Selection
    
        const totalResult = document.getElementById('total-result')
        const totalResultNumber = totalResult.innerText
        total = parseFloat(totalPrice) - parseFloat(totalDiscount)
        const resultOfTotal = document.getElementById('total-result').innerText = total.toFixed(2)

    })



    // Make Purchase Btn condition

    const totalResultOF = totalPrice

    const MakePurchaseBtn = document.getElementById('Make-purchase')
    if (totalResultOF > 0) {
        MakePurchaseBtn.removeAttribute('disabled')
    }
    else {
        MakePurchaseBtn.setAttribute('disabled', true)
    }



    
    



}




           //  Coupon Apply Btn condition 



document.getElementById('coupon-field').addEventListener("keyup", function (event) {
    const couponText = event.target.value
    const couponBtn = document.getElementById('coupon-btn')
    if (couponText === "SELL200") {
        couponBtn.removeAttribute('disabled')
    }
    else {
        couponBtn.setAttribute('disabled', true)
    }

})



