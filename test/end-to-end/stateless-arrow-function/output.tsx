type Props = {
    message?: string,
};
const Hello: React.FC<Props> = ({ message }) => {
    return <div>hello {message}</div>;
};
