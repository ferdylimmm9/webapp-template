import * as Yup from 'yup';

export type BrandModel = {
  id: string;
  name: string;
  manufacture: string;
  type: 'car' | 'item';
};

export const BrandFormSchema = () =>
  Yup.object({
    name: Yup.string().required(),
    manufacture: Yup.string().default(''),
    type: Yup.string().default('car'),
  });

export type BrandFormType = Yup.InferType<
  ReturnType<typeof BrandFormSchema>
> & { data?: BrandModel };

export const brands: BrandModel[] = [
  {
    id: '1',
    manufacture:
      'Elit proident qui proident in do ex velit mollit eu dolor mollit voluptate sunt ut. Enim pariatur est est eiusmod pariatur in. Ipsum adipisicing commodo magna aliqua irure et in reprehenderit do dolore consectetur. Ea sit exercitation incididunt cillum ex ex pariatur. Elit cupidatat voluptate excepteur irure magna mollit.',
    name: 'Toyota',
    type: 'car',
  },
  {
    id: '2',
    manufacture:
      'In esse esse duis nostrud incididunt qui magna fugiat mollit. Deserunt ea exercitation nisi sit eu magna deserunt irure sunt officia nulla voluptate nostrud. Qui veniam enim sit ea commodo in laborum aliquip Lorem consectetur minim id proident. Ea nisi ex commodo consequat mollit non reprehenderit. Minim aliquip non veniam magna id. Eu minim sint labore cillum elit sit voluptate sint sunt. Anim qui laboris ex in aute duis reprehenderit culpa eiusmod tempor id sint dolor velit.',
    name: 'Test',
    type: 'item',
  },
  {
    id: '3',
    manufacture:
      'Elit proident qui proident in do ex velit mollit eu dolor mollit voluptate sunt ut. Enim pariatur est est eiusmod pariatur in. Ipsum adipisicing commodo magna aliqua irure et in reprehenderit do dolore consectetur. Ea sit exercitation incididunt cillum ex ex pariatur. Elit cupidatat voluptate excepteur irure magna mollit.',
    name: 'Ferari',
    type: 'car',
  },
  {
    id: '4',
    manufacture:
      'Elit proident qui proident in do ex velit mollit eu dolor mollit voluptate sunt ut. Enim pariatur est est eiusmod pariatur in. Ipsum adipisicing commodo magna aliqua irure et in reprehenderit do dolore consectetur. Ea sit exercitation incididunt cillum ex ex pariatur. Elit cupidatat voluptate excepteur irure magna mollit.',
    name: 'Lambo',
    type: 'car',
  },
  {
    id: '5',
    manufacture:
      'In esse esse duis nostrud incididunt qui magna fugiat mollit. Deserunt ea exercitation nisi sit eu magna deserunt irure sunt officia nulla voluptate nostrud. Qui veniam enim sit ea commodo in laborum aliquip Lorem consectetur minim id proident. Ea nisi ex commodo consequat mollit non reprehenderit. Minim aliquip non veniam magna id. Eu minim sint labore cillum elit sit voluptate sint sunt. Anim qui laboris ex in aute duis reprehenderit culpa eiusmod tempor id sint dolor velit.',
    name: 'Test A',
    type: 'item',
  },
  {
    id: '6',
    manufacture:
      'In esse esse duis nostrud incididunt qui magna fugiat mollit. Deserunt ea exercitation nisi sit eu magna deserunt irure sunt officia nulla voluptate nostrud. Qui veniam enim sit ea commodo in laborum aliquip Lorem consectetur minim id proident. Ea nisi ex commodo consequat mollit non reprehenderit. Minim aliquip non veniam magna id. Eu minim sint labore cillum elit sit voluptate sint sunt. Anim qui laboris ex in aute duis reprehenderit culpa eiusmod tempor id sint dolor velit.',
    name: 'Test B',
    type: 'item',
  },
];
