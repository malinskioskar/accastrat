class Reducer {
    constructor({ name, initialState, reduceFunctions }) {
        this.reduceFunctions = {};
        this.name = name;
        this.initialState = initialState;
        this.addReduceFunctions(reduceFunctions);
    }

    addReduceFunctions(reduceFunctions) {
        ([...Object.keys(reduceFunctions), ...Object.getOwnPropertySymbols(reduceFunctions)]).forEach((action) => {
            this.reduceFunctions[action] = reduceFunctions[action];
        });
    }

    createReducer() {
        const reduceFunction = (state = this.initialState, action) => {
            const { type } = action;

            if (this.reduceFunctions[type]) {
                const reducer = this.reduceFunctions[type](state, action);
                return reducer;
            }

            switch (type) {
                case 'HARD_RESET': {
                    return state;
                }
                default: {
                    return state;
                }
            }
        };

        return {
            name: this.name,
            initialState: this.initialState,
            reduceFunction,
        };
    }
}

export default Reducer;
