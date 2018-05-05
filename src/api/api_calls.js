const origin = "bible-api.com";

const reqConfig = { method: 'GET',
                    mode: 'no-cors', //or 'no-cors', or this field blank..
                    cache: 'default' };

const fetchData = (request) => {
    const req = new Request(`http://${origin}/${request}`, {
        method: 'GET'
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