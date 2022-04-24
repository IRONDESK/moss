import useSWR from "swr";

export default function getInfo(id: string|string[]|undefined) {
    const { data } = useSWR(`/api/study/create?id=${id}`);
    console.log(data);
    return data;

    // if (id) {
    //     const res = fetch(`/api/study/create?id=${id}`, {
    //         method: 'GET',
    //     })
    //     .then((response) => response.json().catch(() => {}))
    //     .then((json) => json)
    //     .catch((error) => console.log("error", error));
    
    //     return res;
    // }
};