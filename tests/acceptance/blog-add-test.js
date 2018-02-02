import { test } from 'qunit';
import moduleForAcceptance from 'ember-node-mission/tests/helpers/module-for-acceptance';
import blogAddPage from '../pages/blogs-add';
import blogsPage from '../pages/blogs';
import faker from 'faker';

moduleForAcceptance('Acceptance | blog/add', {
  beforeEach() {
    let author = server.create('user');
    let blogs = server.createList('blog', 2);
    blogs.forEach(blog => {
      blog.update('author', author)
    });
  }
});

test('navigate to blogs/add from blogs', async function(assert) {
  assert.expect(2);

  await blogsPage.visit();
  assert.equal(currentURL(), '/blog', 'navigated to /blogs');

  await blogsPage.addBlogButton();
  assert.equal(currentURL(), '/blog/add', 'add button navigated to  /blogs/add');
});

test('add blog', async function(assert) {
  assert.expect(4);

  await blogsPage.visit();
  let blogCount = blogsPage.blogs().count;

  await blogAddPage.visit();
  assert.equal(currentURL(), '/blog/add');

  let title = faker.company.catchPhrase();
  await blogAddPage.title(title).text(faker.lorem.paragraphs(3));
  await blogAddPage.submit();

  assert.equal(currentURL(), '/blog');
  assert.equal(blogsPage.blogs(0).title, title, 'Correct title set')
  assert.equal(blogsPage.blogs().count, blogCount + 1, 'Blog is visible')
});
