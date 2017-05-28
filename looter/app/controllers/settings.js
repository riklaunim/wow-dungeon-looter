import Ember from 'ember';
import Specialisations from '../models/specialisations';


export default Ember.Controller.extend({
  specialisations: Specialisations,
  currentSpecialisation: 'bloodDK',
  actions: {
    selectSpecialisation(specialisation) {
      this.set('currentSpecialisation', specialisation);
    }
  }
});
