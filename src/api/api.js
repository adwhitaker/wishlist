let items = {
    '1': {
        id: '1',
        name: 'Legos',
        createdTimestamp: new Date().getTime(),
        lastUpdated: new Date().getTime(),
        purchased: {
            userId: "1",
            name: "Alex",
            timestamp: new Date().getTime()
        }
    },
    '2': {
        id: '2',
        name: 'coffee',
        createdTimestamp: new Date().getTime(),
        lastUpdated: new Date().getTime(),
        purchased: null
    },
}

const lists = {
    '1': {
        id: '1',
        name: 'Alex\'s List',
        items: Object.values(items),
        created: {
            userId: '1',
        },
    },
    '2': {
        id: '2',
        name: 'Mitchell\'s List',
        items: Object.values(items),
        created: {
            userId: '2',
        },
    },
}


const groups = {
    '1': {
        'id': '1',
        'name': 'Xmas 2020',
        'lists': Object.values(lists),
    },
    '2': {
        'id': '2',
        'name': 'Xmas 2019',
        'lists': Object.values(lists),
    },
    '3': {
        'id': '3',
        'name': 'Alex\'s Birthday 2019',
        'lists': Object.values(lists),
    },
}


export const fetchUser = userId => {

    return Promise.resolve({
        id: userId,
        firstName: 'Alex',
        lastName: 'Whitaker',
        created: new Date().getTime(),
        lastUpdated: new Date().getTime(),
        groups: Object.values(groups),
    })
}

export const fetchGroup = groupId => {

    return Promise.resolve({
        ...groups[groupId],
    })
}

export const fetchList = (groupId, listId) => {


    return Promise.resolve({
        ...lists[listId],
        groupId,
        groupName: groups[groupId].name,
    })
}


export const addItem = (groupId, listId, item) => {

    const newItem = {
        id: (Object.keys(items).length + 1).toString(),
        ...item
    }

    items[newItem.id] = newItem

    return Promise.resolve({
        ...lists[listId],
        items: [
            ...lists[listId].items,
            newItem
        ],
        groupId,
        groupName: groups[groupId].name,

    })
}