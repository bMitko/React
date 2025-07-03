type ErrorMessageProps = {
    message: string;
};

export const ErrorMessage = (props: ErrorMessageProps) => {
    const { message } = props

    return (
        <h3 style={{ color: 'red', justifySelf: 'center' }}>{message}</h3>
    )
}