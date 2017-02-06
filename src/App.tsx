import * as React from "react";

export default class App extends React.Component<any, any> {
    interval: number;
    constructor() {
        super();
        this.state = { count: 0 };
    }

    //This state will be maintained during hot reloads
    componentWillMount() {
        this.interval = setInterval(() => {
            this.setState({ count: this.state.count + 1 })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <h1>Hello world!</h1>
                <div>Welcome to hot-reloading React written in TypeScript! {this.state.count}</div>
            </div>
        );
    }
}