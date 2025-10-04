import { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

export default function Shop({ products }) {
    const [cart, setCart] = useState([]);

    const removeFromCart = (name) => {
        setCart(prevCart => prevCart.filter(item => item.name !== name));
    };

    return (
        <div className='relative max-h-[100svh] '>

            <div className='w-full flex flex-col lg:flex-row gap-9'>
                <ProductList products={products} cart={cart} setCart={setCart}/>
                <Cart cart={cart} handleRemoveFromCart={removeFromCart}/>
            </div>
        
            <div className="absolute w-full z-10 p-6 bg-white bottom-0">
                <img src="assets/images/icon-order-confirmed.svg" alt="Order confirmed icon" />
                <h1>Order Confirmed</h1>
                <p className='mb-6'>We hope you enjoy your food!</p>

                <div className='bg-rose-50 p-6 mb-8 rounded-lg'>
                    <ul className='mb-6'>
                        {cart.map(product => (
                            <li className="flex items-center justify-between mb-4 border-b border-b-gray-300 pb-4" key={product.name}>
                                <img src={product.image.thumbnail} alt={product.name} />
                                <div>
                                    <h3 className="font-semibold">{product.name}</h3>
                                    <span className="text-gray-500">
                                    {product.quantity} × ${product.price.toFixed(2)}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-between items-center w-full">
                        <p className="font-medium text-gray-500">Order Total</p>
                        <p className="font-bold text-3xl">${cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}</p>
                    </div>
                </div>


                <button className='bg-[hsl(14,86%,42%)] text-white w-full py-4 rounded-full hover:bg-[hsl(14,97%,36%)] transition-colors cursor-pointer'>
                    Start New Order
                </button>
            </div>
        </div>
    );
}