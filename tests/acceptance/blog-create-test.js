import { test } from 'qunit';
import moduleForAcceptance from 'ember-node-mission/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | blog create');

test('visiting /blog/add', async function(assert) {
  let user = server.create('user');
  await visit('/blogs/add');

  assert.equal(currentURL(), '/blogs/add');

});
