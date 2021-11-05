import { GETITEMS } from "../API";

export const getItems = async () => {
    try {
        const res = await fetch(GETITEMS);
        const data = await res.json();
        console.log(res.status)
        return data;
    }
    catch (error) {
        console.log(error)
    }
}