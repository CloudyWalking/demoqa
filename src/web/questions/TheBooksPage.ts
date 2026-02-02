import { Question } from "@serenity-js/core";
import { BooksUI } from "../ui/BooksUI";
import { Text } from '@serenity-js/web';

export const TheBooksPage = {
    bookTitlesContain: (keyword: string) => 
    Question.about(`Validating books have "${keyword}"`, async (actor) => {
        const titles = await Text.ofAll(BooksUI.bookTitles()).answeredBy(actor);
        if (titles.length === 0) {
            throw new Error('Not books found.');
        }
        return titles.every(title => 
            title.toLowerCase().includes(keyword.toLowerCase())
        );
    }),
}