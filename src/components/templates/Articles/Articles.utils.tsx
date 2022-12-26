/* eslint-disable import/no-anonymous-default-export */
function getCategoryName(type: string): string {
    switch (type) {
        case 'news':
            return 'Aktualności';
        case 'guide':
            return 'Poradniki';
        case 'none':
            return 'Wszystko';
        default:
            throw { err: 'Bade type' };
    }
}

function trimText(desc: string, limit: number): string {
    let description = [];
    if (desc.length > limit) {
        description.push(desc.substr(0, limit));
        description.push('...');
        return `${description[0]} ${description[1]}`;
    } else {
        return desc;
    }
}

export default { trimText, getCategoryName };
