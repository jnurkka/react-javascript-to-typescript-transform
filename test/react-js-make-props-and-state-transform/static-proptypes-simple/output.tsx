import * as React from 'react';
type Props = {
    foo: string,
};
export default class MyComponent extends React.Component<Props, {}> {
    static propTypes = {
        foo: React.PropTypes.string.isRequired,
    };
    render() {
        return <div />;
    }
}
