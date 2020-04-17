import {action} from '@storybook/addon-actions';
import {boolean, text, withKnobs} from '@storybook/addon-knobs';

export default {
  title: 'Input',
  decorators: [withKnobs],
  parameters: {
    notes: 'Input notes',
    docs: {
      iframeHeight: 60
    }
  }
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



export const disabled = () => (
  {
    template: `
    <input class="form-control" placeholder="{{ placeholder }}" [value]="inputValue" [disabled]="disabled">
   `,
    props: {
      placeholder: text('placeholder', 'fill something...'),
      inputValue: text('value', 'default value'),
      disabled: boolean('disabled', true)
    },
  });

