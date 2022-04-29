import useSWR from 'swr';

export default function getInfo(user: string | undefined) {
    const { data } = useSWR('/api/study/getUser?user=' + user);
    console.log("getusername", data?.username);
    return data?.username;
}