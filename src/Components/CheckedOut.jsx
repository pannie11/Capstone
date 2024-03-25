export default function CheckedOut() {
    function getOrderNumber() {
        return Math.floor(Math.random() * 10000000)
    }

    return (
        <>
            <h1>Thank you!</h1>
            <h3>A confirmation has been sent to your email.</h3>
            <h3>Order number #{getOrderNumber()}</h3>
        </>
    )
}