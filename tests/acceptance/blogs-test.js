import { test } from 'qunit';
import moduleForAcceptance from 'ember-node-mission/tests/helpers/module-for-acceptance';
import blogsPage from '../pages/blogs';

moduleForAcceptance('Acceptance | blogs', {
  beforeEach() {
    server.createList('blog', 2)
  }
});

test('visiting /blogs', async function(assert) {
  assert.expect(2);

  await blogsPage.visit();
  assert.equal(currentURL(), '/blog', 'navigated to /blogs');
  assert.equal(blogsPage.blogs().count, 2, 'blogs seeded');
});
