import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
    title() {
        return faker.company.catchPhrase();
    },
    text() {
        return faker.lorem.paragraphs(Math.floor(Math.random() * 5) + 1);
    },
    datePublished() {
        return faker.date.past();
    }
})