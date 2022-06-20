const BACKEND = "http://127.0.0.1:8000/"

const PATH = new Map([
    ["group", "main/menu/"],
    ["sites", 'main/'],
    ['env', 'main/env/']
]);


export function BACKEND_URL(key) {
    return BACKEND + PATH.get(key)
}
