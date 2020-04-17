import {action} from '@storybook/addon-actions';
import {boolean, text, withKnobs} from '@storybook/addon-knobs';
import {CameraComponent} from '../app/camera/camera.component';

export default {
  title: 'Camera',
  component: CameraComponent,
  decorators: [withKnobs]
};
/**
 * - blabla
 * - blabla
 **/
export const Default = () => (
  {
    component: CameraComponent,
  props: {

  },
});
