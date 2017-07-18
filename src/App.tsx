import * as React from "react";

export default class App extends React.Component<{}, { count: number; }> {
    interval: number;
    state = { count: 0 };

    //This state will be maintained during hot reloads
    componentWillMount() {
        this.interval = window.setInterval(() => {
            this.setState({ count: this.state.count + 1 })
        }, 1000);
    }

    componentWillUnmount() {
        window.clearInterval(this.interval);
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
