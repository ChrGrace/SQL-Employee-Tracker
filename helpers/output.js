const showOutput = (array) => {
    const transformed = array.reduce((arr, { id, ...x }) => { arr[id] = x; return arr }, {})
    console.table(transformed)
}

module.exports = showOutput;