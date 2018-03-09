const origin = "bible-api.com";

const fetchData = (request) => {
    const req = new Request(`http://${origin}/${request}`, {
        method: 'GET',
    });

    return returnGetData(req);
}

const returnGetData = req => (
    fetch(req).then(res =>
        res.json().then(data =>
            data
        )
    )
);


export {fetchData};