import {action} from '@storybook/addon-actions';
import {boolean, text, withKnobs} from '@storybook/addon-knobs';

export default {
  title: 'Button',
  decorators: [withKnobs],
  parameters: {
    notes: 'Button notes',
    docs: {
      iframeHeight: 60
    }
  }
};
/**
 * - blabla
 * - blabla
 **/
export const primary = () => (
  {
    template: `
    <button class="btn btn-primary" (click)="onClick($event)">
        {{title}}
    </button>
   `,
  props: {
    title: text('text', 'Primary Button'),
    onClick: action('click')
  },
});

export const secondary = () => (
  {
    template: `
    <button class="btn btn-secondary" (click)="onClick($event)">
        {{title}}
    </button>
   `,
    props: {
      title: text('text', 'Secondary Button'),
      onClick: action('click')
    },
  });

export const disabled = () => (
  {
    template: `
    <button class="btn btn-secondary" [disabled]="disabled" (click)="onClick($event)">
        {{title}}
    </button>
   `,
    props: {
      title: text('text', 'Cancel Button'),
      onClick: action('click'),
      disabled: boolean('disabled', true)
    },
  });

export const search = () => (
  {
    template: `
    <button class="btn btn-primary"
            [disabled]="searching"
            (click)="onClick($event)">
            <div *ngIf="searching" class="spinner-border text-light"></div>
        {{title}}
    </button>
   `,
    props: {
      title: text('text', 'Cancel Button'),
      onClick: action('click'),
      searching: boolean('searching', true)
    },
  });

export const materialButton = () => (
  {
    template: `
    <button class="btn btn-primary" (click)="onClick($event)">
        {{title}}
    </button>
   `,
    props: {
      title: text('text', 'Primary Button'),
      onClick: action('click')
    },
  });
