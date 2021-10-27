const initState = {
   items: [
      {id: 1, name: 'Coke', price: 550},
      {id: 2, name: 'Potato Chips', price: 300},
      {id: 3, name: 'Milk', price: 800},
      {id: 4, name: 'Chocolate', price: 1050}
   ]
}

const reducer = (state=initState, action) => {
   switch(action.type) {
      case 'ADD_ITEM':
         return {
            ...state,
            items: [...state.items, action.item]
         }
      case 'DEL_ITEM':
         let new_items = state.items.filter(i => i.id !== action.id)
         return {
            ...state,
            items: new_items
         }
      default: 
         return state
   }
}

export default reducer

