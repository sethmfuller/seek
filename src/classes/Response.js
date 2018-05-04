import { Verse } from './Verse.js';

class Response
{
    // Default Constructor
    constructor (response)
    {

        // Set member variables
        let split_book_name = response.reference.split(' ');

        // Split up the book name in order to get the book name and chapter serperated
        if (split_book_name.length > 2)
        {
            this.book_name_ = split_book_name[0] + " " + split_book_name[1];
            this.chapter_number_ = split_book_name[2];
        }
        else
        {
            this.book_name_ = split_book_name[0];
            this.chapter_number_ = split_book_name[1];
        }

        this.translation_name_ = response.translation_name;
        
        this.verse_array_ = [];
        
        response.verses.forEach(verse => {

            var verse_object = new Verse(verse);
            this.verse_array_.push(verse_object);

        });
    }

    // Get Book Name
    get_book_name ()
    {
        return this.book_name_;
    }

    // Get Chapter Number
    get_chapter_number ()
    {
        return this.chapter_number_;
    }

    // Get Verse Array
    get_verse_array ()
    {
        return this.verse_array_;
    }

    // Get Translation Name
    get_translation_name ()
    {
        return this.translation_name_;
    }

}

export { Response }