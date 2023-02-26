export function Sum ({numbers=[1, 2, 3]}) {
    return (
        <h1>The Sum is: {numbers.reduce((index, value) => index + value)}</h1>
    )
}