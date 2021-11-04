import { GETITEMS } from "../API";

const getItems = async () => {
    try {
        const res = await fetch(GETITEMS);
        console.log(res.status)
    }
    catch (error) {
        console.log(error)
    }
}