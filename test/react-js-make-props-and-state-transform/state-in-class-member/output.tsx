import * as React from 'react';
type State = { foo: number };
export default class MyComponent extends React.Component<{}, State> {
    state = { foo: 1 };
    render() {
        return <div />;
    }
}
