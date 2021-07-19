import * as React from 'react';
type Props = {
    baz: string,
};
type State = {
    foo: number,
    bar: string,
};
export default class MyComponent extends React.Component<Props, State> {
    state = { foo: 1, bar: 'str' };
    render() {
        return <div />;
    }
}
