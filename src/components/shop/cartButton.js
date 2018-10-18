import React from 'react';

function CartButton({className, icon, onClick, id}) {
    return (
        <a id={id} onClick={onClick} className={`${className} cart-button`}>
            <i className={icon}/>
        </a>
    )
}

export default CartButton;