let star = {
    name: 'zs',
    age: 25,
    phone: '13000000000'
}
let agent = new Proxy(star, {
    get: (target, key) => {
        if (key === 'phone') {
            return '13900000000'
        }
        if (key === 'price') {
            return 12000
        }
        return target[key]
    },
    set: (target, key, val) => {
        if (key === 'customPrice') {
            if (val < 100000) {
                throw new Error('价格太低')
            } else {
                target[key] = val
                return true
            }
        }
    }
})

console.log(agent.name);
console.log(agent.age);
console.log(agent.phone);
console.log(agent.price);

agent.customPrice=150000
console.log('customPrice',agent.customPrice);