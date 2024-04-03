import * as Yup from 'yup';

export type CategoryModel = {
  id: string;
  name: string;
  description: string;
  file_name: string;
  created_at: string;
  updated_at: string;
};

export const CategoryFormSchema = () =>
  Yup.object({
    name: Yup.string().required(),
    description: Yup.string().default(''),
    file_name: Yup.string().default(''),
  });

export type CategoryFormType = Yup.InferType<
  ReturnType<typeof CategoryFormSchema>
> & { data?: CategoryModel };
