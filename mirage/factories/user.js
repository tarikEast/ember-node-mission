import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  firstName() {
    return faker.name.firstName();
  },
  lastName() {
    return faker.name.lastName();
  },
  age() {
    return faker.random.number({min: 21, max: 50});
  },
  jobTitle() {
    return faker.name.jobTitle();
  },
  profilePic() {
    return faker.image.avatar();
  }
});
