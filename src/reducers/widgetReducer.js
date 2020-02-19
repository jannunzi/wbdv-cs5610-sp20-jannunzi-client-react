const widgets=[
    {id: "123", title: "Widget 123"},
    {id: "234", title: "Widget 234"},
    {id: "345", title: "Widget 345"}
]

const widgetReducer = (state = {widgets: widgets}, action) => {
    switch (action.type) {
        // TODO: use constants and actions
        case "CREATE_WIDGET":
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "DELETE_WIDGET":
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                widgets: action.widgets
            }
        case "FIND_ALL_WIDGETS":
            return {
                widgets: action.widgets
            }
        default:
            return state
    }
}

export default widgetReducer
