export default function Cart({ cart, handleRemoveFromCart }) {

    return (
        <div className='lg:min-w-[375px] m-6 lg:mb-auto flex flex-col items-center px-6 py-8 bg-white rounded-lg shadow-sm'>
            <h2 className='mb-8 self-start font-bold text-2xl text-[hsl(14,86%,42%)]'>Your Cart ({cart.length})</h2>
            {cart.length === 0 ? (
            <>
                <img className='mb-4' src="./assets/images/illustration-empty-cart.svg" alt="Your Cart is Empty" />
                <p className='font-semibold text-[hsl(12,20%,44%)]'>Your added items will appear here</p>
            </>
            ) : (
            <>
                <ul className="w-full">
                    {cart.map(product => (
                        <li className="flex items-center justify-between mb-4 border-b border-b-gray-300 pb-4" key={product.name}>
                            <div>
                                <h3 className="font-semibold">{product.name}</h3>
                                <span className="text-gray-500">
                                   {product.quantity} × ${product.price.toFixed(2)}
                                </span>
                            </div>
                            <button
                            className="cursor-pointer"
                            onClick={() => handleRemoveFromCart(product.name)}
                            >
                                <img className="p-[2px] border-2 border-gray-400 rounded-full min-w-[2px] min-h-[20px]" src="assets/images/icon-remove-item.svg" alt="Remove item" />
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between items-center w-full my-6">
                    <p className="font-medium text-gray-500">Order Total</p>
                    <p className="font-bold text-3xl">${cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}</p>
                </div>
                <p className="w-full flex justify-center items-center bg-rose-50 py-2 rounded-lg">
                    <img className="me-2" src="./assets/images/icon-carbon-neutral.svg" alt="Carbon-neutral icon" />
                    This is a <span className="font-semibold mx-1">carbon-neutral</span> delivery
                </p>
                <button className="w-full py-4 mt-8 text-xl font-medium text-white bg-[hsl(14,86%,42%)] rounded-full cursor-pointer hover:bg-[hsl(14,86%,25%)]">Confirm Order</button>
            </>
            )}
        </div>
    );
}