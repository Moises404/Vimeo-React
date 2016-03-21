const standardQueryObject = {
    page : 1,
    per_page : 20
}

const paramsChannels = {
    path : '/channels',
    query : standardQueryObject
}

const paramsCategories = {
    path : '/categories',
    query : standardQueryObject
}

const paramsGroupsCameo = {
    path : '/groups/cameo',
    query : standardQueryObject
}

const paramsGroups = {
    path : '/groups',
    query : standardQueryObject
}

const paramsStaffPicks = {
    path : '/channels/staffpicks/videos',
    query : standardQueryObject
}


export const vimeoTypeToPath = {
    'channels': paramsChannels,
    'categories': paramsCategories,
    'staffpicks': paramsStaffPicks,
    'groups': paramsGroups
}