import { GETITEMS } from "../API";

const getItems = async () => {
    try {
        const res = await fetch(GETITEMS);
        const data = res.json();
        console.log(res.status)
        return data;
    }
    catch (error) {
        console.log(error)
    }
}