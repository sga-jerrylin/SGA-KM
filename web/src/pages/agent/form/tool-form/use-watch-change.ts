import { useEffect } from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import useGraphStore from '../../store';
import { getAgentNodeTools } from '../../utils';

export function useWatchFormChange(form?: UseFormReturn<any>) {
  const values = useWatch({ control: form?.control });
  const { clickedToolId, clickedNodeId, findUpstreamNodeById, updateNodeForm } =
    useGraphStore((state) => state);

  useEffect(() => {
    const agentNode = findUpstreamNodeById(clickedNodeId);
    // Manually triggered form updates are synchronized to the canvas
    if (agentNode && form?.formState.isDirty) {
      const agentNodeId = agentNode?.id;
      const tools = getAgentNodeTools(agentNode);

      const currentValues = form?.getValues() ?? values;
      const nextTools = tools.map((x) => {
        if (x.component_name === clickedToolId) {
          return {
            ...x,
            params: {
              ...currentValues,
            },
          };
        }
        return x;
      });

      const nextValues = {
        ...(agentNode?.data?.form ?? {}),
        tools: nextTools,
      };

      updateNodeForm(agentNodeId, nextValues);
    }
  }, [
    clickedNodeId,
    clickedToolId,
    findUpstreamNodeById,
    form?.formState.isDirty,
    updateNodeForm,
    values,
  ]);
}
