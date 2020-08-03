import * as listActions from './listActions'

const sortByPurchased = items => {
    return items.sort(
        ({ purchased: aPurchased }, { purchased: bPurchased }) => {
            if (
                aPurchased > bPurchased) {
                return 1
            }

            if (aPurchased < bPurchased) {
                return -1
            }
            return 0
        })
}

export const initialListState = {
    isLoading: false,
    list: null,
    errors: [],
}

export const listReducer = (state, action = {}) => {
    switch (action.type) {
        case listActions.LIST_RESPONSE:
            return {
                ...state,
                list: {
                    ...action.list,
                    items: sortByPurchased(action.list.items),
                },
                errors: [],
            }
        case listActions.LIST_ERROR:
            return {
                ...state,
                errors: action.errors,
            }
    }
}
