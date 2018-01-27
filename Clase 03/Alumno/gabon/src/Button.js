import React, { Component } from 'react'

export class Button extends Component {

    constructor(props, ctx) {
        super(props, ctx)
        this.state = {
            lastEvent: null
        }
    }

    handleEvent(event) {
        const currentEventName = event.type
        this.setState({ lastEvent: currentEventName })
    }

    render() {

        const handleEvent = (event) => { this.handleEvent(event) }

        return <button
            onClick={handleEvent}
            onDoubleClick={handleEvent}
            onMouseEnter={handleEvent}
            onMouseLeave={handleEvent}
            onBlur={handleEvent}
            onFocus={handleEvent}
        >{this.state.lastEvent || this.props.children}</button>
    }
}

export class CheckButton extends Component {

    constructor(props, ctx) {
        super(props, ctx)
        this.state = {
            isChecked: false
        }
    }

    handleEvent(event) {
        const currentCheckedValue = this.state.isChecked
        const opociteCurrentCheckedValue = !currentCheckedValue
        this.setState({ isChecked: opociteCurrentCheckedValue })
    }

    render() {
        return <button 
        onClick={(event) => this.handleEvent(event)}
        className= {(this.state.isChecked ? 'button-primary' : '')} 
        >{this.props.children}
        </button>
    }
}

export class HoverButton extends Component {
    render() {
        return <button>{this.props.children}</button>
    }
}

export class CounterButton extends Component {
    render() {
        return <button>0</button>
    }
}