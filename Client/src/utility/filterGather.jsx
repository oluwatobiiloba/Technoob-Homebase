import serverApi from "./server";

export function getFilters(data) {
    const filters = {};

    const excluded_keys = ["ratings","file", "description", "updatedAt", "name", "version","users","url","traffic", "meta","downloads","createdAt","image_placeholder","company","datePosted","expiryDate","link","poster","uploader_id","comments", "_id", "__v", "views"]

    data.forEach(item => {
        for (const key in item) {
            if (!excluded_keys.includes(key)) {
                if (!filters[key]) {
                    filters[key] = new Set();
                }
                filters[key].add(item[key]);
            }
        }
    });

    const filtersArray = [];
    for (const key in filters) {
        filtersArray.push({
            key: key,
            value: Array.from(filters[key])
        });
    }

    return filtersArray;
}

export async function fetchFilteredData(params, url, setData) {
    try {
        console.log((serverApi))
        const response = await serverApi.get(url,
            {
                params
            });

        if (response.status === 200) {
            let responseData = response.data.data
            setData(responseData)

        } else {
            alert("No result found")
        }
    } catch (err) {
        console.log(err)
    }

}

export async function fetchFirstData( url, setData,setFilterOptions,requiresAuth = false){
    if(requiresAuth){
        serverApi.requiresAuth(true)
    }
    console.log("serverHeaders",serverApi.defaults.headers)
    return serverApi.get(url)
        .then(res => {
            const responseData = res.data.data
            setData(responseData)
            if(setFilterOptions){
                const filters = getFilters(responseData);
                setFilterOptions(filters)
            }

        })
        .catch(err => {console.error('error fetching data from endpoint ', err)})
}