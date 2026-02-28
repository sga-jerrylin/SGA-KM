import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { message } from 'antd';
import {
  ChevronDown,
  ChevronUp,
  Copy,
  Download,
  Eye,
  FileText,
  Search,
} from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DownloadManager from './download-manager';

interface AssociatedFilesViewerProps {
  nodeId: string;
  nodeInfo: any;
  associatedFiles: any;
  loading: boolean;
  onDownload: (format: 'txt' | 'json' | 'csv') => void;
  downloadLoading: boolean;
}

const AssociatedFilesViewer: React.FC<AssociatedFilesViewerProps> = ({
  nodeId,
  nodeInfo,
  associatedFiles,
  loading,
  onDownload,
  downloadLoading,
}) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFileType, setSelectedFileType] = useState<string>('all');
  const [expandedChunks, setExpandedChunks] = useState<Set<string>>(new Set());

  // Filter files based on search term and type
  const filteredFiles = useMemo(() => {
    if (!associatedFiles?.files) return [];

    return associatedFiles.files.filter((file: any) => {
      const matchesSearch =
        !searchTerm ||
        file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        file.type.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType =
        selectedFileType === 'all' ||
        file.type.toLowerCase() === selectedFileType.toLowerCase();

      return matchesSearch && matchesType;
    });
  }, [associatedFiles?.files, searchTerm, selectedFileType]);

  // Filter chunks based on search term
  const filteredChunks = useMemo(() => {
    if (!associatedFiles?.chunks) return [];

    return associatedFiles.chunks.filter((chunk: any) => {
      return (
        !searchTerm ||
        chunk.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chunk.docnm_kwd.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [associatedFiles?.chunks, searchTerm]);

  // Get unique file types
  const fileTypes = useMemo(() => {
    if (!associatedFiles?.files) return [];

    const types = new Set(associatedFiles.files.map((file: any) => file.type));
    return Array.from(types);
  }, [associatedFiles?.files]);

  // Toggle chunk expansion
  const toggleChunkExpansion = (chunkId: string) => {
    const newExpanded = new Set(expandedChunks);
    if (newExpanded.has(chunkId)) {
      newExpanded.delete(chunkId);
    } else {
      newExpanded.add(chunkId);
    }
    setExpandedChunks(newExpanded);
  };

  // Copy content to clipboard
  const copyToClipboard = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      message.success(t('common.copied'));
    } catch (error) {
      message.error('Failed to copy content');
    }
  };

  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Format date
  const formatDate = (dateString: string) => {
    if (!dateString) return 'Unknown';
    return new Date(dateString).toLocaleDateString();
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-sm text-gray-600">{t('common.loading')}...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!associatedFiles) {
    return (
      <Card>
        <CardContent className="text-center py-8">
          <FileText className="w-12 h-12 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-600">
            {t('knowledgeGraph.noAssociatedFiles')}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            <span>
              {t('knowledgeGraph.associatedFiles')} - {nodeId}
            </span>
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => onDownload('txt')}
              disabled={downloadLoading}
              title={t('knowledgeGraph.downloadAsText')}
            >
              <Download className="w-3 h-3 mr-1" />
              {t('knowledgeGraph.formatTxt')}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onDownload('json')}
              disabled={downloadLoading}
              title={t('knowledgeGraph.downloadAsJson')}
            >
              <Download className="w-3 h-3 mr-1" />
              {t('knowledgeGraph.formatJson')}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onDownload('csv')}
              disabled={downloadLoading}
              title={t('knowledgeGraph.downloadAsCsv')}
            >
              <Download className="w-3 h-3 mr-1" />
              {t('knowledgeGraph.formatCsv')}
            </Button>
            <DownloadManager
              nodeId={nodeId}
              associatedFiles={associatedFiles}
            />
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent>
        {/* Node Information */}
        {nodeInfo && (
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-sm mb-2">
              {t('knowledgeGraph.nodeInfo')}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-medium">{t('common.name')}: </span>
                <span>{nodeInfo.id}</span>
              </div>
              <div>
                <span className="font-medium">
                  {t('knowledgeGraph.entityType')}:{' '}
                </span>
                <Badge variant="outline" className="text-xs">
                  {nodeInfo.entity_type}
                </Badge>
              </div>
              {nodeInfo.pagerank && (
                <div>
                  <span className="font-medium">
                    {t('knowledgeGraph.relevance')}:{' '}
                  </span>
                  <span>{(nodeInfo.pagerank * 100).toFixed(1)}%</span>
                </div>
              )}
              {nodeInfo.communities && nodeInfo.communities.length > 0 && (
                <div>
                  <span className="font-medium">
                    {t('knowledgeGraph.communities')}:{' '}
                  </span>
                  <span>{nodeInfo.communities.join(', ')}</span>
                </div>
              )}
            </div>
            {nodeInfo.description && (
              <div className="mt-2">
                <span className="font-medium text-xs">
                  {t('common.description')}:{' '}
                </span>
                <p className="text-xs text-gray-600 mt-1">
                  {nodeInfo.description}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Search and Filter Controls */}
        <div className="mb-4 space-y-2">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder={t('knowledgeGraph.searchInFiles')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            {fileTypes.length > 0 && (
              <select
                value={selectedFileType}
                onChange={(e) => setSelectedFileType(e.target.value)}
                className="px-3 py-2 border rounded-md text-sm"
              >
                <option value="all">{t('common.all')}</option>
                {fileTypes.map((type) => (
                  <option key={type} value={type}>
                    {type.toUpperCase()}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>

        {/* Tabs for Files and Chunks */}
        <Tabs defaultValue="files" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="files">
              {t('knowledgeGraph.files')} ({filteredFiles.length})
            </TabsTrigger>
            <TabsTrigger value="chunks">
              {t('knowledgeGraph.textChunks')} ({filteredChunks.length})
            </TabsTrigger>
          </TabsList>

          {/* Files Tab */}
          <TabsContent value="files">
            <ScrollArea className="h-64">
              <div className="space-y-2">
                {filteredFiles.map((file: any) => (
                  <div
                    key={file.id}
                    className="p-3 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h5 className="font-medium text-sm">{file.name}</h5>
                        <div className="flex items-center gap-4 mt-1 text-xs text-gray-600">
                          <span>
                            <Badge variant="secondary" className="text-xs">
                              {file.type}
                            </Badge>
                          </span>
                          {file.size && (
                            <span>{formatFileSize(file.size)}</span>
                          )}
                          {file.chunk_num && (
                            <span>{file.chunk_num} chunks</span>
                          )}
                          {file.create_time && (
                            <span>{formatDate(file.create_time)}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(file.name)}
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredFiles.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <FileText className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">
                      {t('knowledgeGraph.noFilesFound')}
                    </p>
                  </div>
                )}
              </div>
            </ScrollArea>
          </TabsContent>

          {/* Chunks Tab */}
          <TabsContent value="chunks">
            <ScrollArea className="h-64">
              <div className="space-y-2">
                {filteredChunks.map((chunk: any) => (
                  <div key={chunk.id} className="p-3 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h5 className="font-medium text-sm">
                          {chunk.docnm_kwd}
                        </h5>
                        <div className="flex items-center gap-2 mt-1">
                          {chunk.page_num_int &&
                            chunk.page_num_int.length > 0 && (
                              <Badge variant="outline" className="text-xs">
                                Pages: {chunk.page_num_int.join(', ')}
                              </Badge>
                            )}
                          {chunk.important_kwd &&
                            chunk.important_kwd.length > 0 && (
                              <Badge variant="secondary" className="text-xs">
                                {chunk.important_kwd.length} keywords
                              </Badge>
                            )}
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" variant="ghost">
                              <Eye className="w-3 h-3" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl max-h-[80vh]">
                            <DialogHeader>
                              <DialogTitle>{chunk.docnm_kwd}</DialogTitle>
                            </DialogHeader>
                            <ScrollArea className="max-h-96">
                              <div className="space-y-4">
                                <div className="text-sm whitespace-pre-wrap">
                                  {chunk.content}
                                </div>
                                {chunk.important_kwd &&
                                  chunk.important_kwd.length > 0 && (
                                    <div>
                                      <h6 className="font-medium text-sm mb-2">
                                        Keywords:
                                      </h6>
                                      <div className="flex flex-wrap gap-1">
                                        {chunk.important_kwd.map(
                                          (keyword: string, index: number) => (
                                            <Badge
                                              key={index}
                                              variant="outline"
                                              className="text-xs"
                                            >
                                              {keyword}
                                            </Badge>
                                          ),
                                        )}
                                      </div>
                                    </div>
                                  )}
                              </div>
                            </ScrollArea>
                          </DialogContent>
                        </Dialog>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(chunk.content)}
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => toggleChunkExpansion(chunk.id)}
                        >
                          {expandedChunks.has(chunk.id) ? (
                            <ChevronUp className="w-3 h-3" />
                          ) : (
                            <ChevronDown className="w-3 h-3" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div
                      className={`text-xs text-gray-600 ${
                        expandedChunks.has(chunk.id) ? '' : 'line-clamp-2'
                      }`}
                    >
                      {chunk.content}
                    </div>
                  </div>
                ))}
                {filteredChunks.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <FileText className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">
                      {t('knowledgeGraph.noChunksFound')}
                    </p>
                  </div>
                )}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>

        {/* Summary Statistics */}
        <div className="mt-4 pt-4 border-t">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-center">
              <div className="font-medium text-lg">
                {associatedFiles.total_files}
              </div>
              <div className="text-gray-600">
                {t('knowledgeGraph.totalFiles')}
              </div>
            </div>
            <div className="text-center">
              <div className="font-medium text-lg">
                {associatedFiles.total_chunks}
              </div>
              <div className="text-gray-600">
                {t('knowledgeGraph.totalChunks')}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AssociatedFilesViewer;
