const items = {
    '1': {
        id: '1',
        name: 'Legos',
    },
    '2': {
        id: '2',
        name: 'coffee',
    },
}

const lists = {
    '1': {
        id: '1',
        name: 'Alex\'s List',
        items: Object.values(items),
    },
    '2': {
        id: '2',
        name: 'Mitchell\'s List',
        items: Object.values(items),
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
        groupName: groups[groupId].name
    })
}