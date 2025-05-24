import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { FcSearch } from 'react-icons/fc';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { FC } from 'react';

interface MyFormValues {
  input: string;
}

type SearchBarProps = {
  onSubmit: (value: string) => void;
};

type FormSubmit = (values: MyFormValues, actions: FormikHelpers<MyFormValues>) => void;

type Notify = () => string;

const notify: Notify = () => toast.error('Please fill in the search field!');

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const initialValues: MyFormValues = { input: '' };

  const handleSubmit: FormSubmit = (values, actions) => {
    if (values.input.trim() === '') {
      notify();
      return;
    }

    onSubmit(values.input);
    actions.resetForm();
  };

  return (
    <header className={css.header}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.headerForm}>
          <Field
            className={css.field}
            name='input'
            type='text'
            autoComplete='off'
            autoFocus
            placeholder='Search images and photos'
          />
          <button className={css.searchBtn} type='submit'>
            <FcSearch size={16} />
          </button>
          <Toaster position='top-right' reverseOrder={false} />
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
