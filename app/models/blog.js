import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    text: DS.attr(),
    datePublished: DS.attr('date'),
    autor: DS.belongsTo('author')
})