const toggleCartHidden = () => ({
	type: 'TOGGLE_CART_HIDDEN'
})

export default toggleCartHidden

export const addItem = (item) => ({
	type: 'ADD_ITEM',
	payload: item
})
export const removeItem = (item) => ({
	type: 'REMOVE_ITEM',
	payload: item
})

export const clearCartFromItem = (item) => ({
	type: 'CLEAR_ITEM_FROM_CART',
	payload: item
})
