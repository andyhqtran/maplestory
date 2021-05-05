import { Field, Form, Formik, FormikConfig } from 'formik';
import { noop } from 'lodash';
import React from 'react';
import { useToasts } from 'react-toast-notifications';

import { Button } from '~/components/Primitives/Button';
import { Input } from '~/components/Primitives/Input';
import { MSClass } from '~/constants/maplestory';
import { useCharacters } from '~/hooks/useCharacters';

export type CreateCharacterFormValues = {
  class: keyof typeof MSClass;
  name: string;
};

export type CreateCharacterFormProps = {
  onSubmit?: (values: CreateCharacterFormValues) => void;
};

export const CreateCharacterForm = ({ onSubmit = noop }: CreateCharacterFormProps) => {
  const { createCharacter } = useCharacters();
  const { addToast } = useToasts();

  return (
    <Formik<CreateCharacterFormValues>
      initialValues={{ class: MSClass.Adele, name: '' }}
      enableReinitialize
      onSubmit={(values) => {
        createCharacter({
          avatar: '',
          class: values.class,
          name: values.name,
        });

        addToast('Successfully created character', { appearance: 'success' });

        onSubmit(values);
      }}
    >
      <Form>
        <Field as={Input} css={{ mb: 12 }} name='name' placeholder='Name' required />
        <Field as='select' name='class' required>
          {Object.keys(MSClass).map((key) => {
            const value = MSClass[key as keyof typeof MSClass];

            return <option value={key}>{value}</option>;
          })}
        </Field>
        <Button type='submit'>Create</Button>
      </Form>
    </Formik>
  );
};
