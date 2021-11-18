function calculate(value) {
    const dataset = config.dataset;
    const factor = config.factor;
    for (var i = dataset.length - 1; i >= 0; i--) {
        temp = dataset[i].value;
        remainder = Math.min(value % temp, (value + factor) % temp);
        if (dataset[i] < value && remainder <= factor * 2) {
            return {item: dataset[i], quantity: Math.round(value / dataset[i].value)};
        }
    }
    return {item: dataset[0], quantity: Math.round(value / dataset[0].value)};
}
