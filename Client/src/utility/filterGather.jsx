import serverApi from "./server";

export function getFilters(data, component) {
    const filters = {};

    const excluded_keys = ["ratings","file", "description", "updatedAt", "name", "version","users","url","traffic", "meta","downloads","createdAt","image_placeholder","company","datePosted","expiryDate","link","poster","uploader_id","comments", "_id", "__v", "views"]


    data[`${component}`].forEach(item => {
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

export async function fetchFilteredData(params, url, setData, component) {
    try {
        params.limit = 30;
        const response = await serverApi.get(url,
            {
                params
            });

        if (response.status === 200) {
            let responseData = response.data.data
            setData(responseData[`${component}`])

        } else {
            alert("No result found")
        }
    } catch (err) {

        alert(err.message)
    }

}

export async function fetchFirstData(url, setData, setFilterOptions, requiresAuth = false, component) {
    if(requiresAuth){
        serverApi.requiresAuth(true)
    }

    return serverApi.get(url, {
        params: {
            limit: component === "metrics" ? null : 30,
        }
    })
        .then(res => {
            const responseData = res.data.data
            if (component !== "metrics") setData(responseData[`${component}`])
            if (component === "metrics") {
                setData(responseData)
                console.log(responseData)
            }
            if(setFilterOptions){
                const filters = getFilters(responseData, component);
                setFilterOptions(filters)
            }

        })
        .catch(err => {
            console.error('error fetching data from endpoint ', err)
            alert(err.message)
        })
}