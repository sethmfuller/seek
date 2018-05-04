import { fetchData } from '../api/api_calls.js'
import { Response } from './Response.js'

class Request
{
    // Default Constructor
    constructor ()
    {
        this.current_book_;
        this.current_chapter_;
        this.current_translation_;
    }

    // Initial Request
    initial_request (book, chapter, translation)
    {
        this.current_book_ = book;
        this.current_chapter_ = chapter;
        this.current_translation_ = translation;

        fetchData(`${book} ${chapter}?translation=${translation}`).then(response => {
            return new Response(response);
        });
        
        
    }

}

export { Request }