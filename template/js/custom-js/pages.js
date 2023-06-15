// Add your custom JavaScript for storefront pages here.

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