export default function getInfo(id: string|string[]|undefined) {
    if (id) {
        const res = fetch(`/api/study/create?id=${id}`, {
            method: 'GET',
        })
        .then((response) => response.json().catch(() => {}))
        .then((json) => json)
        .catch((error) => console.log("error", error));
    
        return res;
    }
};