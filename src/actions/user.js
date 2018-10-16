import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Rory Letteney',
                    shippingAddress: '1234 West State Street'
                    
                }
            },
        ]
    })
}