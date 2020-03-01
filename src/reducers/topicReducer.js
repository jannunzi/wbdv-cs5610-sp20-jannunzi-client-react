
const initialState = {
    topics: [
        {id: "123", title: "Topic 123"}
    ]
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TOPICS":
            return {
                topics: action.topics
            }
        default:
            return state
    }
}

export default topicReducer
