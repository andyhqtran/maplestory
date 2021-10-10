import { Field, Form, Formik, FormikConfig } from 'formik';
import { noop } from 'lodash';
import { useToasts } from 'react-toast-notifications';

import { Button } from '~/components/Primitives/Button';
import { Input } from '~/components/Primitives/Input';
import { MSClass } from '~/constants/maplestory';
import { useCharacters } from '~/hooks/useCharacters';

export type UpdateCharacterFormValues = {
  class: keyof typeof MSClass;
  name: string;
};

export type UpdateCharacterFormProps = {
  id: string;
  onSubmit?: (values: UpdateCharacterFormValues) => void;
};

export const UpdateCharacterForm = ({ id, onSubmit = noop }: UpdateCharacterFormProps) => {
  const { characters, updateCharacter } = useCharacters();
  const { addToast } = useToasts();

  const character = characters?.find((character) => character.id === id);

  return (
    <Formik<UpdateCharacterFormValues>
      initialValues={{ class: character.class, name: character.name }}
      enableReinitialize
      onSubmit={(values) => {
        updateCharacter(character.id, {
          avatar: '',
          class: values.class,
          name: values.name,
        });

        addToast(`Successfully updated ${character.name}`);

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
