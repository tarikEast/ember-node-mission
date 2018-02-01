import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  title() {
    return faker.company.catchPhrase();
  },
  text() {
    return faker.lorem.paragraphs(Math.floor(Math.random() * 10) + 3);
  },
  datePublished() {
    return faker.date.past();
  },
  postImage() {
    return faker.image.image()
  }
});
