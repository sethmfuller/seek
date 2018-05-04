import { fetchData } from '../api/api_calls.js'
import {book_names, book_nums, book} from '../assets/Bible.js'
import { Response } from './Response.js'

class Request
{
    // Default Constructor
    constructor ()
    {
        this.current_book_;
        this.current_book_id_;
        this.current_chapter_;
        this.current_translation_;
    }

    // Initial Request
    initial_request (book, chapter, translation)
    {
        this.current_book_ = book;
        this.current_book_id_ = 0;
        this.current_chapter_ = chapter;
        this.current_translation_ = translation;

        return fetchData(`${book} ${chapter}?translation=${translation}`).then(response => {
            return new Response(response, this.current_book_id_);
        });
    }

    // Next Chapter
    nextChapter () 
    {
        if (this.current_chapter_ == book_nums[this.current_book_id_])
        {
            if (this.current_book_id_ == book_nums.length - 1) 
            {
                this.current_book_id_ = 0;
                this.current_book_ = book_names[0];
                this.current_chapter_ = 1;
            }
            else 
            {
                this.current_book_id_++;
                this.current_book_ = book_names[this.current_book_id_];
                this.current_chapter_ = 1;
            }
        }
        else
        {
            this.current_chapter_++;
        }

        return fetchData(`${this.current_book_} ${this.current_chapter_}?translation=${this.current_translation_}`).then(response => {
            return new Response(response, this.current_book_id_);
        });
    }

    // Previous Chapter
    prevChapter ()
    {
        if (this.current_chapter_ == 1)
        {
            if (this.current_book_id_ == 0)
            {
                this.current_book_id_ = book_nums.length - 1;
                this.current_book_ = book_names[this.current_book_id_];
                this.current_chapter_ = book_nums[this.current_book_id_];
            }
            else
            {
                this.current_book_id_--;
                this.current_book_ = book_names[this.current_book_id_];
                this.current_chapter_ = book_nums[this.current_book_id_];
            }
        }
        else
        {
            this.current_chapter_--;
        }
        return fetchData(`${this.current_book_} ${this.current_chapter_}?translation=${this.current_translation_}`).then(response => {
            return new Response(response, this.current_book_id_);
        });
    }

    // Choose Book
    chooseBook (book)
    {
        this.current_book_id_ = book;
        this.current_book_ = book_names[book];
        this.current_chapter_ = 1;

        return fetchData(`${this.current_book_} ${this.current_chapter_}?translation=${this.current_translation_}`).then(response => {
            return new Response(response, this.current_book_id_);
        });
    }

    // Choose Chapter
    chooseChapter (chapter)
    {
        this.current_chapter_ = chapter;

        return fetchData(`${this.current_book_} ${this.current_chapter_}?translation=${this.current_translation_}`).then(response => {
            return new Response(response, this.current_book_id_);
        });
    }

    // Choose Version
    chooseVersion (version)
    {
        this.current_translation_ = version;

        return fetchData(`${this.current_book_} ${this.current_chapter_}?translation=${this.current_translation_}`).then(response => {
            return new Response(response, this.current_book_id_);
        });
    }
}

export { Request }