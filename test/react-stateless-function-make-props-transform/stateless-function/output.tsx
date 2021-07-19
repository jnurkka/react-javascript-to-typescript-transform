type Props = {
    message?: string,
};
const Hello: React.FC<Props> = ({ message }) => {
    return <div>hello {message}</div>;
};
Hello.propTypes = {
    message: React.PropTypes.string,
};
