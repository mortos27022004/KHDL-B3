const SERVER = `http://localhost:3001/`;

export const get = async (path) => {
    const respone = await fetch(SERVER + path);
    return await respone.json();
}

export const post = async (path, item) => {
    const respone = await fetch(SERVER + path,{
        method: "POST",
        headers: {
            "Conten-Type": "application/json"
        },
        body: JSON.stringify(item)
    })
    return await respone.json();
}

export const patch = async (path, item) => {
    const respone = await fetch(SERVER + path,{
        method: "PATCH",
        headers: {
            "Conten-Type": "application/json"
        },
        body: JSON.stringify(item)
    })
    return await respone.json();
}

export const del = async (path) => {
    const respone = await fetch(SERVER + path,{
        method: "DELETE"
    })
    return await respone.json();
}