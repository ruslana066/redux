const counterRuducer = (state=0, actions) => {
    switch (actions.type) {
        case 'INCREASE_COUNTER' :
            return state + 1
        case 'MINUS_COUNTER' :
            return state - 1
        default : 
            return state

    }
}

export default counterRuducer