import * as React from 'react';
type Props = {
    foo: string,
};
export default class MyComponent extends React.Component<Props, {}> {
    static get propTypes() {
        return {
            foo: React.PropTypes.string.isRequired,
        };
    }
    render() {
        return <div />;
    }
}
