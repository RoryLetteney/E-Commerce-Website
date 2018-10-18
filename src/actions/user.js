import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS
} from './types';

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                _id: 0,
                product: {
                    _id: 0,
                    title: 'JavaScript in the Browser',
                    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
                    price: 1.99,
                    quantity: 1,
                    belongsTo: [0, 1]
                },
                quantity: 2
            },
            {
                _id: 1,
                product: {
                    _id: 1,
                    title: 'Graph Database',
                    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
                    price: 1.99,
                    quantity: 1,
                    belongsTo: [0, 6]
                },
                quantity: 1
            }
        ]
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 1,
                total: 19.40,
                orderNumber: 'A004823854',
                orderDate: new Date().toString(),
                creditCard: '-0000',
                user: {
                    name: 'Rory Letteney',
                    shippingAddress: '1234 West State Street'
                    
                }
            },
            {
                _id: 2,
                total: 19.40,
                orderNumber: 'sadgdfhreg42',
                orderDate: new Date().toString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                    
                }
            },
            {
                _id: 3,
                total: 19.40,
                orderNumber: 'dasgfdfghdagds',
                orderDate: new Date().toString(),
                creditCard: '-0000',
                user: {
                    name: 'Max Nelson',
                    shippingAddress: '1234 West State Street'
                    
                }
            },
            {
                _id: 4,
                total: 19.40,
                orderNumber: 'agdagdsga',
                orderDate: new Date().toString(),
                creditCard: '-0000',
                user: {
                    name: 'Aaron Rodgers',
                    shippingAddress: '1234 West State Street'
                    
                }
            },
            {
                _id: 5,
                total: 19.40,
                orderNumber: 'agdsaghffdhfdahgadf',
                orderDate: new Date().toString(),
                creditCard: '-0000',
                user: {
                    name: 'Julio Jones',
                    shippingAddress: '1234 West State Street'
                    
                }
            },
            {
                _id: 6,
                total: 19.40,
                orderNumber: 'A004823854',
                orderDate: new Date().toString(),
                creditCard: '-0000',
                user: {
                    name: 'Rory Letteney',
                    shippingAddress: '1234 West State Street'
                    
                }
            },
            {
                _id: 7,
                total: 19.40,
                orderNumber: 'A004823854',
                orderDate: new Date().toString(),
                creditCard: '-0000',
                user: {
                    name: 'Rory Letteney',
                    shippingAddress: '1234 West State Street'
                    
                }
            },
        ]
    })
}