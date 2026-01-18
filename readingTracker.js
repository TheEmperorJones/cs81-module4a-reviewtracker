// Weekly reading log
const readingLog = [  // This creates a binding of readingLog to an array of initial data.
  { day: "Monday", book: "Dune", minutes: 30 }, // This array logs day/book/minutes.
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// Adds a new reading entry to the log
// This addReadBook function appears to be on the lookout for new book log data.
// It then ingests a newEntry to the readingLog.
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes };
  readingLog.push(newEntry); // This is an important array (push) method, responsible for
                             // the potential to add new data.
}

// Returns total minutes spent reading all week
// This function counts totalReadingMinutes starting from zero.
// It references the minutes portion of the array
function totalReadingMinutes(log) {
  let total = 0;
  for (let entry of log) {
    total += entry.minutes;
  }
  return total;
}

// Returns the book read most frequently
// This count logs the first apperance of a book title as one.
// It then counts upwards, evaluating the book that had the highest number
// of reading sessions--a fundamentally different number that the book with the
// highest total reading minutes.
function mostReadBook(log) {
  const bookCounts = {};
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++;
    }
  }
// I suspect that this for loop could be reduced significantly using an available 
// method we have yet to encounter.  Establishing the value of maxBook as null
// lets the program do its work.
  let maxBook = null;
  let maxCount = 0;
  for (let book in bookCounts) {        // This is some significant
    if (bookCounts[book] > maxCount) {  // slight of hand to sort of
      maxBook = book;                   // translate the number of times
      maxCount = bookCounts[book];      // a book is logged into maxBook, below
    }
  }
  return maxBook;  // This is fairly important in that it compares book counts and turns 
                   // the most frequently read book into the maxBook, and passes that to mostReadBook
}

// Prints a summary of minutes read per day
// The first of two console.log statements printed, this function looks to the daily log
// of reading entries. It then outputs them to a string with placeholder for the day/minutes/book
// categories, re-arranging the original list for better readability.
function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`); // A straightforward output reporting
                                                                                // the entry.* array for each day
  }
}

// Example usage
// This an important addition of content, only from the standpoint that the third instance
// of reading Dune makes it the most frequently read title, earning most read book for frequency, not for total minutes,
// even though it is the *winner* in both categories.
// **Minor Improvement - Ideally, you could output two winners for most frequently read books, one based on number of distinct
// days on which the book title was read, and one based on total minutes.  This would occur by adding a new function, and
// renaming the other function for clarity (something like mostReadBookDays, and mostReadBookMinutes--ungainly, but more
// specific names).
addReadBook("Sunday", "Foundation", 1000);  //Added code, this demos unexpected return of most read book as Dune.
addReadBook("Saturday", "Dune", 50); printDailySummary(readingLog);  // This logs 1 book title per day, but can't handle extra (output wise).
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));
