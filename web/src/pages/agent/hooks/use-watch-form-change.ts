import { useEffect } from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import useGraphStore from '../store';

export function useWatchFormChange(
  id?: string,
  form?: UseFormReturn<any>,
  enableReplacement = false,
) {
  const values = useWatch({ control: form?.control });
  const { updateNodeForm, replaceNodeForm } = useGraphStore((state) => state);

  useEffect(() => {
    // Manually triggered form updates are synchronized to the canvas
    if (id) {
      const currentValues = form?.getValues() || values || {};
      const nextValues: any = currentValues;

      (enableReplacement ? replaceNodeForm : updateNodeForm)(id, nextValues);
    }
  }, [
    enableReplacement,
    form?.formState.isDirty,
    id,
    replaceNodeForm,
    updateNodeForm,
    values,
  ]);
}
