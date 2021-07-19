type Props = {
    message?: string,
};
const Hello: React.FC<Props> = ({ message }) => {
    return <div>hello {message}</div>;
};
type Props = {
    message?: string,
};
const Hey: React.FC<Props> = ({ name }) => {
    return <div>hey, {name}</div>;
};
type State = {
    foo: number,
    bar: number,
};
export default class MyComponent extends React.Component<{}, State> {
    render() {
        return <button onClick={this.onclick.bind(this)} />;
    }
    onclick() {
        this.setState({ foo: 1, bar: 2 });
    }
}
type Props = {
    foo: string,
};
export class AnotherComponent extends React.Component<Props, {}> {
    render() {
        return <div />;
    }
}
