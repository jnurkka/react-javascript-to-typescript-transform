type Props = {
    message?: string,
};
export const Hello: React.FC<Props> = ({ message }) => {
    return <div>hello {message}</div>;
};
