type Props = {
    message?: string,
};
const Hello: React.FC<Props> = ({ message }) => {
    return <div>hello {message}</div>;
};
type Props = {
    name: string,
};
const Hey: React.FC<Props> = ({ name }) => {
    return <div>hey, {name}</div>;
};
Hey.propTypes = {
    name: React.PropTypes.string.isRequired,
};
Hello.propTypes = {
    message: React.PropTypes.string,
};
