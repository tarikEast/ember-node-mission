import {
  create,
  visitable,
  fillable,
  clickable
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/blog/add'),
  title: fillable('[data-test-do-control="title"]'),
  text: fillable('[data-test-do-control="text"]'),
  submit: clickable('[data-test-add-blog-button]')
});