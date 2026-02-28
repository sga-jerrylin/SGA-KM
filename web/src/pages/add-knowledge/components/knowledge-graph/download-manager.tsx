import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useDownloadNodeContent } from '@/hooks/knowledge-graph-hooks';
import { message } from 'antd';
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Download,
  FileText,
  Package,
  Settings,
} from 'lucide-react';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface DownloadManagerProps {
  nodeId: string;
  associatedFiles?: any;
}

interface DownloadTask {
  id: string;
  nodeId: string;
  format: string;
  includeMetadata: boolean;
  status: 'pending' | 'downloading' | 'completed' | 'failed';
  progress: number;
  error?: string;
}

const DownloadManager: React.FC<DownloadManagerProps> = ({
  nodeId,
  associatedFiles,
}) => {
  const { t } = useTranslation();
  const { downloadContent, loading } = useDownloadNodeContent();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<
    'txt' | 'json' | 'csv' | 'xlsx'
  >('txt');
  const [includeMetadata, setIncludeMetadata] = useState(true);
  const [includeFiles, setIncludeFiles] = useState(true);
  const [includeChunks, setIncludeChunks] = useState(true);
  const [downloadTasks, setDownloadTasks] = useState<DownloadTask[]>([]);

  const formatOptions = [
    {
      value: 'txt',
      label: t('knowledgeGraph.formatTxt') + ' (.txt)',
      description: t('knowledgeGraph.downloadAsText'),
    },
    {
      value: 'json',
      label: t('knowledgeGraph.formatJson') + ' (.json)',
      description: t('knowledgeGraph.downloadAsJson'),
    },
    {
      value: 'csv',
      label: t('knowledgeGraph.formatCsv') + ' (.csv)',
      description: t('knowledgeGraph.downloadAsCsv'),
    },
    {
      value: 'xlsx',
      label: t('knowledgeGraph.formatXlsx') + ' (.xlsx)',
      description: t('knowledgeGraph.downloadAsExcel'),
    },
  ];

  const handleDownload = useCallback(async () => {
    if (!nodeId) return;

    const taskId = `${nodeId}_${selectedFormat}_${Date.now()}`;
    const newTask: DownloadTask = {
      id: taskId,
      nodeId,
      format: selectedFormat,
      includeMetadata,
      status: 'pending',
      progress: 0,
    };

    setDownloadTasks((prev) => [...prev, newTask]);

    try {
      // Update task status to downloading
      setDownloadTasks((prev) =>
        prev.map((task) =>
          task.id === taskId
            ? { ...task, status: 'downloading', progress: 10 }
            : task,
        ),
      );

      // Simulate progress updates
      const progressInterval = setInterval(() => {
        setDownloadTasks((prev) =>
          prev.map((task) =>
            task.id === taskId && task.status === 'downloading'
              ? { ...task, progress: Math.min(task.progress + 20, 90) }
              : task,
          ),
        );
      }, 500);

      await downloadContent(nodeId, {
        type: 'chunks',
        format: selectedFormat,
        include_metadata: includeMetadata,
      });

      clearInterval(progressInterval);

      // Mark as completed
      setDownloadTasks((prev) =>
        prev.map((task) =>
          task.id === taskId
            ? { ...task, status: 'completed', progress: 100 }
            : task,
        ),
      );

      message.success(t('knowledgeGraph.downloadSuccess'));
    } catch (error) {
      // Mark as failed
      setDownloadTasks((prev) =>
        prev.map((task) =>
          task.id === taskId
            ? {
                ...task,
                status: 'failed',
                progress: 0,
                error: error instanceof Error ? error.message : 'Unknown error',
              }
            : task,
        ),
      );

      message.error(t('knowledgeGraph.downloadFailed'));
    }
  }, [nodeId, selectedFormat, includeMetadata, downloadContent, t]);

  const handleBatchDownload = useCallback(async () => {
    const formats: Array<'txt' | 'json' | 'csv'> = ['txt', 'json', 'csv'];

    for (const format of formats) {
      const taskId = `${nodeId}_${format}_batch_${Date.now()}`;
      const newTask: DownloadTask = {
        id: taskId,
        nodeId,
        format,
        includeMetadata,
        status: 'pending',
        progress: 0,
      };

      setDownloadTasks((prev) => [...prev, newTask]);

      try {
        setDownloadTasks((prev) =>
          prev.map((task) =>
            task.id === taskId
              ? { ...task, status: 'downloading', progress: 50 }
              : task,
          ),
        );

        await downloadContent(nodeId, {
          type: 'chunks',
          format,
          include_metadata: includeMetadata,
        });

        setDownloadTasks((prev) =>
          prev.map((task) =>
            task.id === taskId
              ? { ...task, status: 'completed', progress: 100 }
              : task,
          ),
        );

        // Small delay between downloads
        await new Promise<void>((resolve) => {
          setTimeout(resolve, 1000);
        });
      } catch (error) {
        setDownloadTasks((prev) =>
          prev.map((task) =>
            task.id === taskId
              ? {
                  ...task,
                  status: 'failed',
                  progress: 0,
                  error:
                    error instanceof Error ? error.message : 'Unknown error',
                }
              : task,
          ),
        );
      }
    }

    message.success(t('knowledgeGraph.batchDownloadComplete'));
  }, [nodeId, includeMetadata, downloadContent, t]);

  const clearCompletedTasks = useCallback(() => {
    setDownloadTasks((prev) =>
      prev.filter((task) => task.status !== 'completed'),
    );
  }, []);

  const getStatusIcon = (status: DownloadTask['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'failed':
        return <AlertCircle className="w-4 h-4 text-red-600" />;
      case 'downloading':
        return <Clock className="w-4 h-4 text-blue-600 animate-spin" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: DownloadTask['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      case 'downloading':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          <Download className="w-4 h-4 mr-2" />
          {t('knowledgeGraph.advancedDownload')}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Package className="w-5 h-5" />
            {t('knowledgeGraph.downloadManager')} - {nodeId}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Download Options */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Settings className="w-4 h-4" />
                {t('knowledgeGraph.downloadOptions')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Format Selection */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {t('knowledgeGraph.outputFormat')}
                </label>
                <Select
                  value={selectedFormat}
                  onValueChange={(value: any) => setSelectedFormat(value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {formatOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        <div>
                          <div className="font-medium">{option.label}</div>
                          <div className="text-xs text-gray-600">
                            {option.description}
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Content Options */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {t('knowledgeGraph.contentOptions')}
                </label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="includeMetadata"
                      checked={includeMetadata}
                      onCheckedChange={(checked) =>
                        setIncludeMetadata(checked as boolean)
                      }
                    />
                    <label htmlFor="includeMetadata" className="text-sm">
                      {t('knowledgeGraph.includeMetadata')}
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="includeFiles"
                      checked={includeFiles}
                      onCheckedChange={(checked) =>
                        setIncludeFiles(checked as boolean)
                      }
                    />
                    <label htmlFor="includeFiles" className="text-sm">
                      {t('knowledgeGraph.includeFileInfo')}
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="includeChunks"
                      checked={includeChunks}
                      onCheckedChange={(checked) =>
                        setIncludeChunks(checked as boolean)
                      }
                    />
                    <label htmlFor="includeChunks" className="text-sm">
                      {t('knowledgeGraph.includeTextChunks')}
                    </label>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-4">
                <Button
                  onClick={handleDownload}
                  disabled={loading}
                  className="flex-1"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {t('knowledgeGraph.downloadSingle')}
                </Button>
                <Button
                  onClick={handleBatchDownload}
                  disabled={loading}
                  variant="outline"
                  className="flex-1"
                >
                  <Package className="w-4 h-4 mr-2" />
                  {t('knowledgeGraph.downloadAll')}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Download Tasks */}
          {downloadTasks.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-base">
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    {t('knowledgeGraph.downloadTasks')}
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={clearCompletedTasks}
                  >
                    {t('knowledgeGraph.clearCompleted')}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-48 overflow-y-auto">
                  {downloadTasks.slice(-5).map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center gap-3 p-2 border rounded"
                    >
                      {getStatusIcon(task.status)}
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">
                            {task.format.toUpperCase()}
                          </span>
                          <Badge
                            className={`text-xs ${getStatusColor(task.status)}`}
                          >
                            {task.status}
                          </Badge>
                        </div>
                        {task.status === 'downloading' && (
                          <Progress
                            value={task.progress}
                            className="mt-1 h-1"
                          />
                        )}
                        {task.error && (
                          <p className="text-xs text-red-600 mt-1">
                            {task.error}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Summary Info */}
          {associatedFiles && (
            <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-medium">
                    {t('knowledgeGraph.totalFiles')}:{' '}
                  </span>
                  <span>{associatedFiles.total_files}</span>
                </div>
                <div>
                  <span className="font-medium">
                    {t('knowledgeGraph.totalChunks')}:{' '}
                  </span>
                  <span>{associatedFiles.total_chunks}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadManager;
