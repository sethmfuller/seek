import { fetchData } from '../api/api_calls.js'
import { Response } from './Response.js'

class Request
{
    // Default Constructor
    constructor (book, chapter, translation)
    {
        this.response_;
    }

    // Initial Request
    initial_request ()
    {
        fetchData(`${book} ${chapter}?translation=${translation}`).then(response => {
            this.response_ = new Response(response);
        });

        return this.response;
    }

}

export { Request }