import React from "react";

export default class HeadingWidget extends React.Component {

    state  = {
        widget: this.props.widget
    }

    render() {
        return(
            <div>
                {
                    this.props.editing &&
                        <div>
                        <input
                            onChange={(e) => {
                                const newTitle = e.target.value;
                                this.setState(prevState => ({
                                    widget: {
                                        ...prevState.widget,
                                        title: newTitle
                                    }
                                }))
                            }
                            }
                            value={this.state.widget.title}/>
                        <select
                            onChange={(e) => {
                                let newSize = e.target.value
                                newSize = parseInt(newSize)
                                this.setState(prevState => ({
                                    widget: {
                                        ...prevState.widget,
                                        size: newSize
                                    }
                                }))
                            }}
                            value={this.state.widget.size}>
                            <option value={1}>Heading 1</option>
                            <option value={2}>Heading 2</option>
                            <option value={3}>Heading 3</option>
                            <option value={4}>Heading 4</option>
                            <option value={5}>Heading 5</option>
                        </select>
                        </div>
                }
                {
                    !this.props.editing &&
                        <span>
                            {this.state.widget.size === 1 && <h1>{this.state.widget.title}</h1>}
                            {this.state.widget.size === 2 && <h2>{this.state.widget.title}</h2>}
                            {this.state.widget.size === 3 && <h3>{this.state.widget.title}</h3>}
                        </span>
                }
            </div>
        )
    }
}
