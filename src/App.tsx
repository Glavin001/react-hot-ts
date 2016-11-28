import * as React from "react";
import {Counter} from './Counter';

export default class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <h1>Hello world!</h1>
                <div>Welcome to hot-reloading React written in TypeScript!</div>
                <Counter />
            </div>
        );
    }
}
