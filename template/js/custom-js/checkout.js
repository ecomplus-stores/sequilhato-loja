// Add your custom JavaScript for checkout here.

if (ecomPassport && ecomPassport.customer && ecomPassport.customer.registry_type === 'j') {
    window.sessionStorage.setItem('isCorporate', true)
} else {
    window.sessionStorage.setItem('isCorporate', false)
}
ecomPassport.on('login', () => {
    if (ecomPassport && ecomPassport.customer && ecomPassport.customer.registry_type === 'j') {
        window.sessionStorage.setItem('isCorporate', true)
    } else {
        window.sessionStorage.setItem('isCorporate', false)
    }
})
if (window.sessionStorage.getItem('isCorporate') === "true") {
    setInterval(() => {
        if ($('.payment__gateway--1245').length) {
            $('.payment__gateway--1245').hide()
        }
    }, 1000)
}