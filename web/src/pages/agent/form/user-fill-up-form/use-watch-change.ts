import { omit } from 'lodash';
import { useEffect } from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { BeginQuery } from '../../interface';
import useGraphStore from '../../store';

function transferInputsArrayToObject(inputs: BeginQuery[] = []) {
  return inputs.reduce<Record<string, Omit<BeginQuery, 'key'>>>((pre, cur) => {
    pre[cur.key] = omit(cur, 'key');

    return pre;
  }, {});
}

export function useWatchFormChange(id?: string, form?: UseFormReturn) {
  const values = useWatch({ control: form?.control });
  const updateNodeForm = useGraphStore((state) => state.updateNodeForm);

  useEffect(() => {
    // TODO: This should only be executed when the form changes
    if (id) {
      const currentValues = form?.getValues() || values || {};
      const inputs = transferInputsArrayToObject(currentValues.inputs);

      const nextValues = {
        ...currentValues,
        inputs,
        outputs: inputs,
      };

      updateNodeForm(id, nextValues);
    }
  }, [form?.formState.isDirty, id, updateNodeForm, values]);
}
