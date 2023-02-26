export function Sum ({numbers}) {
    return (
        <h1>The Sum is: {numbers.reduce((index, value) => index + value)}</h1>
    )
}