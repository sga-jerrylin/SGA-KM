import { useEffect } from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import useGraphStore from '../../store';
import { convertToStringArray } from '../../utils';

export function useWatchFormChange(id?: string, form?: UseFormReturn<any>) {
  const values = useWatch({ control: form?.control });
  const updateNodeForm = useGraphStore((state) => state.updateNodeForm);

  useEffect(() => {
    // Manually triggered form updates are synchronized to the canvas
    if (id) {
      const currentValues = form?.getValues() ?? values;
      const nextValues: any = {
        ...currentValues,
        include_domains: convertToStringArray(currentValues.include_domains),
        exclude_domains: convertToStringArray(currentValues.exclude_domains),
      };

      updateNodeForm(id, nextValues);
    }
  }, [form?.formState.isDirty, id, updateNodeForm, values]);
}
