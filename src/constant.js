const BACKEND = "https://nav.jzy.pub/api/"

const PATH = new Map([
    ["group", "main/menu/"],
    ["sites", 'main/'],
    ['env', 'main/env/']
]);


export function BACKEND_URL(key) {
    return BACKEND + PATH.get(key)
}
