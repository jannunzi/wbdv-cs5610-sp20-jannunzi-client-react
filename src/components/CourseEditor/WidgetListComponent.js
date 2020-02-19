import React from "react";
import {connect} from "react-redux";
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import Widget from "./widgets/Widget";

class WidgetListComponent extends React.Component {
    componentDidMount() {
        // this.props.findAllWidgets();
        this.props.findWidgetsForTopic(this.props.topicId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.topicId !== this.props.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId);
        }
    }

    state = {
        widget: {}
    }

    save = () => {
        this.setState({
            widget: {}
        })
    }


    render() {
        return(
            <div>
                {
                    this.props.widgets.map(widget =>
                        <div key={widget.id}>
                            <Widget
                                save={this.save}
                                editing={widget === this.state.widget}
                                deleteWidget={this.props.deleteWidget}
                                widget={widget}/>

                            {   widget !== this.state.widget &&
                                <button onClick={() =>
                                    this.setState({
                                    widget: widget
                                })}>
                                    ...
                                </button>
                            }
                        </div>
                    )
                }
                <button onClick={() =>
                    this.props.createWidget(this.props.topicId)}>
                    +
                </button>
            </div>
        )
    }
}

const dispatchToPropertyMapper = (dispatch) => ({
    createWidget: (tid) =>
        fetch(`http://localhost:8080/api/topics/${tid}/widgets`, {
            method: "POST",
            body: JSON.stringify({
                id: (new Date()).getTime()+"",
                title: "New Widget"
            }),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(actualWidget => dispatch({
                type: "CREATE_WIDGET",
                widget: actualWidget
            })),
    deleteWidget: (wid) =>
        fetch(`http://localhost:8080/api/widgets/${wid}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(status => dispatch({
                type: "DELETE_WIDGET",
                widgetId: wid
            })),
    findWidgetsForTopic: (tid) =>
        fetch(`http://localhost:8080/api/topics/${tid}/widgets`)
        .then(response => response.json())
        .then(widgets => dispatch({
            type: "FIND_WIDGETS_FOR_TOPIC",
            widgets: widgets
        })),
    findAllWidgets: () =>
        // TODO: create a widget service
        fetch("http://localhost:8080/api/widgets")
            .then(response => response.json())
            .then(widgets => dispatch({
                type: "FIND_ALL_WIDGETS",
                widgets: widgets
            }))
})

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets
})

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(WidgetListComponent)
