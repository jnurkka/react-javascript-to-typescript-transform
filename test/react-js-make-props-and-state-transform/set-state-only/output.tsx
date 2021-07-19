import * as React from 'react';
type State = { foo: number, bar: number };
export default class MyComponent extends React.Component<{}, State> {
    render() {
        return <button onClick={this.onclick.bind(this)} />;
    }
    onclick() {
        this.setState({ foo: 1, bar: 2 });
    }
}
