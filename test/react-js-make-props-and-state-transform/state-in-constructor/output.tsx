import * as React from 'react';
type State = { foo: number };
export default class MyComponent extends React.Component<{}, State> {
    constructor(props, context) {
        super(props, context);
        this.state = { foo: 1 };
    }
    render() {
        return <div />;
    }
}
