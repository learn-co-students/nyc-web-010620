import { sushis } from './db'

const initialState = {
    sushis: [],
    eatenSushis: [],
    money: 105,
    startIndex: 0
}

export const reducer = (prevState=initialState, action) => {
    console.log('in reducer', action, prevState)
    switch(action.type){
        case 'EAT_SUSHI':
            const { id, price } = action.payload

            if(prevState.eatenSushis.includes(id)) return prevState

            if(prevState.money >= price) {
                return {...prevState, eatenSushis: [...prevState.eatenSushis, id], money: prevState.money - price}
            }
            else { 
                return prevState
            }

        case 'UPDATE_INDEX':
            let newStart = prevState.startIndex + 4
            if (newStart >= prevState.sushis.length){
                newStart = 0
            }
            return {...prevState, startIndex: newStart }
        case 'FETCH_SUSHIS':
            return {...prevState, sushis: sushis}
        case 'INCREASE_MONEY':
            return {...prevState, money: prevState.money + action.payload.amount}
        default:
            return prevState
    }
}