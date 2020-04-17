import {action} from '@storybook/addon-actions';
import {boolean, text, withKnobs} from '@storybook/addon-knobs';

export default {
  title: 'Transaction',
  decorators: [withKnobs]
};
/**
 * - blabla
 * - blabla
 **/
export const Default = () => (
  {
    template: `
    <input class="form-control" placeholder="{{ placeholder }}" [value]="inputValue">
   `,
  props: {
    placeholder: text('placeholder', 'fill something...'),
    inputValue: text('value', 'default value')
  },
});





