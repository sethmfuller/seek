// Bible Data

var book_names = [
    'genesis', 
    'exodus', 
    'leviticus', 
    'numbers', 
    'deuteronomy', 
    'joshua', 
    'judges', 
    'ruth', 
    '1samuel', 
    '2samuel', 
    '1kings', 
    '2kings', 
    '1chronicles', 
    '2chronicles', 
    'ezra', 
    'nehemiah', 
    'esther',
    'job',
    'psalms',
    'proverbs', 
    'ecclesiastes',
    'songofsolomon',
    'isaiah',
    'jeremiah',
    'lamentations',
    'ezekiel',
    'dan',
    'hosea',
    'joel',
    'amos',
    'obadiah',
    'jonah',
    'micah',
    'nahum',
    'habakkuk',
    'zephaniah',
    'haggai',
    'zechariah',
    'malachi',
    'matthew',
    'mark',
    'luke',
    'john',
    'acts',
    'romans',
    '1corinthians',
    '2corinthians',
    'galations',
    'ephesians',
    'philippians',
    'colossians',
    '1thessalonians',
    '2thessalonians',
    '1timothy',
    '2timothy',
    'titus',
    'philemon',
    'hebrews',
    'james',
    '1peter',
    '2peter',
    '1john',
    '2john',
    '3john',
    'jude',
    'revelation',
];

var book_nums = [50, 40, 27, 36, 34, 24, 21, 4, 31, 24, 22, 25, 29, 36, 10, 13, 10, 42, 150, 31, 12, 8, 66, 52, 5, 48, 12, 14, 3, 9, 1, 4, 7, 3, 3, 3, 2, 14, 4, 28, 16, 24, 21, 28, 16, 16, 13, 6, 6, 4, 4, 5, 3, 6, 4, 3, 1, 13, 5, 5, 3, 5, 1, 1, 1, 22];

var abrevOldTestament = ['Gen', 'Exo', 'Lev', 'Num', 'Deu', 'Jos', 'Jdg', 'Rut', '1Sa', '2Sa', '1Ki', '2Ki', '1Ch', '2Ch', 'Ezr', 'Neh', 'Est', 'Job', 'Psa', 'Pro', 'Ecc', 'Son', 'Isa', 'Jer', 'Lam', 'Eze', 'Dan', 'Hos', 'Joe', 'Amo', 'Oba', 'Jon', 'Mic', 'Nah', 'Hab', 'Zep', 'Hag', 'Zec', 'Mal'];
var abrevNewTestament = ['Mat', 'Mar', 'Luk', 'Joh', 'Act', 'Rom', '1Co', '2Co', 'Gal', 'Eph', 'Php', 'Col', '1Th', '2Th', '1Ti', '2Ti', 'Phm', 'Heb', 'Jam', '1Pe', '2Pe', '1Jo', '2Jo', '3Jo', 'Jud', 'Rev'];
var allBooks = ['Gen', 'Exo', 'Lev', 'Num', 'Deu', 'Jos', 'Jdg', 'Rut', '1Sa', '2Sa', '1Ki', '2Ki', '1Ch', '2Ch', 'Ezr', 'Neh', 'Est', 'Job', 'Psa', 'Pro', 'Ecc', 'Son', 'Isa', 'Jer', 'Lam', 'Eze', 'Dan', 'Hos', 'Joe', 'Amo', 'Oba', 'Jon', 'Mic', 'Nah', 'Hab', 'Zep', 'Hag', 'Zec', 'Mal', 'Mat', 'Mar', 'Luk', 'Joh', 'Act', 'Rom', '1Co', '2Co', 'Gal', 'Eph', 'Php', 'Col', '1Th', '2Th', '1Ti', '2Ti', 'Phm', 'Heb', 'Jam', '1Pe', '2Pe', '1Jo', '2Jo', '3Jo', 'Jud', 'Rev'];
var versions = ['kjv', 'web', 'rccv'];

var current_book_id;


export { book_names, book_nums, abrevOldTestament, abrevNewTestament, versions, allBooks, current_book_id }