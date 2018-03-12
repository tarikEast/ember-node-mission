import DS from "ember-data";

export default DS.Model.extend({
    name: DS.attr('string'),
    lengh: DS.attr('number'),
    director: DS.attr('string'),
    dateOfRelease: DS.attr('date'),
    childFriendly: DS.attr('boolean'),
    image: DS.attr('string')
});