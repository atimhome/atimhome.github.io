import { animation, animate, style , AnimationMetadata , state , transition , useAnimation} from '@angular/animations';

export const slideInAnimation = animation([
  style({transform: 'translateX(100%)'}),
  animate('200ms ease-in', style({transform: 'translateX(0%)'}))
]);

export const slideOutAnimation = animation([
  animate('200ms ease-in', style({transform: 'translateX(100%)'}))
]);

export const slideInOutAnimation: AnimationMetadata[] = [
    transition(':enter', [
      useAnimation(slideInAnimation)
    ]),
    transition(':leave', [
      useAnimation(slideOutAnimation)
    ])
];

export const fadeInAnimation = animation([
  style({opacity: 0}),
  animate('400ms ease-in', style({opacity: 1}))
]);

export const flipAnimation: AnimationMetadata[] = [
  state('false' , style({ transform: 'rotateY(0deg)'})),
  state('true', style({ transform: 'rotateY(180deg)' })),
  transition('* => *', animate('300ms'))
];

export const verticalAnimation: AnimationMetadata[] = [
  state('false' , style({ transform: 'rotate(0deg)'})),
  state('true', style({ transform: 'rotate(90deg)' })),
  transition('* => *', animate('300ms'))
];

export const expandAnimation = animation([
  style({transform: 'translateY(-100%)'}),
  animate('200ms', style({transform: 'translateY(0%)'}))
]);

export const collapseAnimation = animation([
  animate('200ms', style({transform: 'translateY(-100%)'}))
]);

export const accordionAnimation: AnimationMetadata[] = [
  transition(':enter', [
    useAnimation(expandAnimation)
  ]),
  transition(':leave', [
    useAnimation(collapseAnimation)
  ])
];
