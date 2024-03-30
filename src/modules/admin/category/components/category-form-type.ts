import * as Yup from 'yup';

export type CategoryModel = {
  id: string;
  file_url: string;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
};

export const CategoryFormSchema = () =>
  Yup.object({
    name: Yup.string().required(),
    description: Yup.string().default(''),
    file_url: Yup.string().default(''),
  });

export type CategoryFormType = Yup.InferType<
  ReturnType<typeof CategoryFormSchema>
> & { data?: CategoryModel };

export const categories: CategoryModel[] = [
  {
    id: '1',
    name: 'BMW',
    description: 'Minim ut amet ullamco velit ea.',
    file_url: '',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: '2',
    name: 'Lamborgini',
    description: 'Minim ut amet ullamco velit ea.',
    file_url: '',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: '3',
    name: 'Avanza',
    description: 'Minim ut amet ullamco velit ea.',
    file_url: '',
    created_at: new Date(),
    updated_at: new Date(),
  },
];
