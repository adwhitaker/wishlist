export const ROUTES = {
    HOME: '/',
    GROUP_PARAM: `/group/:groupId`,
    group: groupId => `/group/${groupId}`,
    LIST_PARAM: `/group/:groupId/list/:listId`,
    list: (groupId, listId) => `/group/${groupId}/list/${listId}`,
}