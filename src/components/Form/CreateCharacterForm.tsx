import VisuallyHidden from '@reach/visually-hidden';
import { Field, Form, Formik, FormikConfig } from 'formik';
import { noop } from 'lodash';
import React from 'react';
import { useToasts } from 'react-toast-notifications';

import { Button } from '~/components/Primitives/Button';
import { Input } from '~/components/Primitives/Input';
import { Text } from '~/components/Primitives/Text';
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
        <VisuallyHidden>
          <Text as='label' htmlFor='character-name' size='body-12'>
            Character name
          </Text>
        </VisuallyHidden>
        <Field as={Input} css={{ width: '100%', mb: 12 }} id='character-name' name='name' placeholder='Name' required />

        <VisuallyHidden>
          <Text as='label' htmlFor='character-class' size='body-12'>
            Character class
          </Text>
        </VisuallyHidden>
        <Field as='select' id='character-class' name='class' required>
          {Object.keys(MSClass).map((key) => {
            const value = MSClass[key as keyof typeof MSClass];

            return <option value={key}>{value}</option>;
          })}
        </Field>

        <Button css={{ mt: 12 }} type='submit'>
          Create
        </Button>
      </Form>
    </Formik>
  );
};
