import Ember from 'ember';
import Specialisations from '../models/specialisations';


export default Ember.Controller.extend({
  specialisations: Specialisations,
  currentSpecialisation: 'bloodDK',
  weightPrimary: 1,
  weightCritical: 1,
  weightHaste: 1,
  weightMastery: 1,
  weightVersatility: 1,
  actions: {
    selectSpecialisation(specialisation) {
      this.set('currentSpecialisation', specialisation);
    },
    showResults() {
      this.transitionToRoute('settings.results');
    }
  }
});
