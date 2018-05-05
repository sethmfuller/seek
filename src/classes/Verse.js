class Verse
{
    // Default Constructor
    constructor (verse)
    {
        this.book_name_ = verse.book_name;
        this.chapter_number_ = verse.chapter;
        this.verse_number_ = verse.verse;
        this.text_ = verse.text;
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

    // Get Verse Number
    get_verse_number ()
    {
        return this.verse_number_;
    }

    // Get Verse Text
    get_text ()
    {
        return this.text_;
    }
}

export { Verse }