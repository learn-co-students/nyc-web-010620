export const eatSushiActionCreator = (id, price) => ({type: 'EAT_SUSHI', payload: {id, price}})
export const increaseMoneyActionCreator = (amount) => ({type: 'INCREASE_MONEY', payload: {amount}})
export const updateIndexCreator = () => ({type: 'UPDATE_INDEX'})
export const fetchSushiActionCreator = () => ({type: 'FETCH_SUSHIS'})

// const fetchSushiActionCreator = () => {
//     return fetch(API).then(res => res.json()).then(data => {
//          dispactch({type: 'FETCH_SUSHIS', payload: data})
//     }) 
     
//     }