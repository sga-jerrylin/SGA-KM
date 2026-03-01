import type { MemoryQueryParams } from '@/interfaces/km';
import { deleteMemory, queryMemory } from '@/services/km-service';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  Button,
  Card,
  Empty,
  Input,
  Popconfirm,
  Select,
  Spin,
  Tag,
  message,
} from 'antd';
import {
  LucideExternalLink,
  LucideEye,
  LucideSearch,
  LucideTrash2,
} from 'lucide-react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const { Option } = Select;

const Memories: React.FC = () => {
  const { t } = useTranslation();

  const [query, setQuery] = useState('');
  const [scope, setScope] = useState<string | undefined>(undefined);
  const [type, setType] = useState<string | undefined>(undefined);

  const {
    data: memories = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['kmMemories', query, scope, type],
    queryFn: async () => {
      const payload: MemoryQueryParams = { query: query || '*', top_k: 20 };
      if (scope) payload.scope = scope;
      if (type) payload.content_types = [type];
      const res = await queryMemory(payload);
      return res?.data?.data ?? [];
    },
    enabled: query.length > 0,
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteMemory(id),
    onSuccess: () => {
      message.success('Memory deleted');
      refetch();
    },
    onError: () => message.error('Failed to delete memory'),
  });

  const getImportanceColor = (imp: number) => {
    if (imp >= 0.8) return 'red';
    if (imp >= 0.5) return 'orange';
    return 'blue';
  };

  return (
    <div className="flex flex-col gap-6 w-full h-full overflow-y-auto">
      <h1 className="text-2xl font-bold">
        {t('admin.memories', 'Memory Management')}
      </h1>

      <div className="flex gap-4 items-center bg-bg-card p-4 rounded-lg border border-border shadow-sm flex-wrap">
        <Input
          placeholder="Semantic Search Query..."
          allowClear
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onPressEnter={() => refetch()}
          prefix={<LucideSearch className="w-4 h-4 text-gray-400" />}
          className="w-80"
        />
        <Select
          placeholder="Scope"
          allowClear
          onChange={setScope}
          className="w-32"
        >
          <Option value="personal">Personal</Option>
          <Option value="team">Team</Option>
          <Option value="org">Organization</Option>
        </Select>
        <Select
          placeholder="Content Type"
          allowClear
          onChange={setType}
          className="w-40"
        >
          <Option value="text">Text</Option>
          <Option value="fact">Fact</Option>
          <Option value="preference">Preference</Option>
          <Option value="procedure">Procedure</Option>
        </Select>
        <Button type="primary" onClick={() => refetch()}>
          Search
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {isLoading && (
          <div className="col-span-full flex justify-center py-10">
            <Spin />
          </div>
        )}

        {!isLoading && memories.length === 0 && (
          <div className="col-span-full py-10">
            <Empty description="No memories found" />
          </div>
        )}

        {!isLoading &&
          memories.map((mem) => (
            <Card
              key={mem.id}
              className="bg-bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex gap-2">
                  <Tag color="purple">{mem.scope}</Tag>
                  <Tag color="cyan">{mem.content_type}</Tag>
                </div>
                <Tag color={getImportanceColor(mem.importance || 0.5)}>
                  Imp: {mem.importance || 0.5}
                </Tag>
              </div>

              <p className="text-text-primary mb-4 line-clamp-3 min-h-[4.5rem]">
                {mem.content}
              </p>

              <div className="flex justify-between items-center text-sm text-text-secondary pt-3 border-t border-border">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1" title="Access Count">
                    <LucideEye className="w-4 h-4" /> {mem.access_count || 0}
                  </div>
                  {mem.source_ref && (
                    <div
                      className="flex items-center gap-1 truncate max-w-[120px]"
                      title={`Source: ${mem.source_ref}`}
                    >
                      <LucideExternalLink className="w-4 h-4" />{' '}
                      {mem.source_ref}
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <Popconfirm
                    title="Are you sure?"
                    onConfirm={() => deleteMutation.mutate(mem.id)}
                  >
                    <Button
                      type="text"
                      danger
                      size="small"
                      icon={<LucideTrash2 className="w-4 h-4" />}
                    />
                  </Popconfirm>
                </div>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Memories;
