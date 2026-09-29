import React from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';
import { Button } from './Button';

interface ErrorStateProps {
    title?: string;
    message: string;
    onRetry?: () => void;
    className?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
    title = "Unable to load data",
    message,
    onRetry,
    className = ""
}) => {
    return (
        <div className={`flex flex-col items-center justify-center p-6 text-center rounded-xl border border-red-500/20 bg-red-950/10 ${className}`}>
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 mb-2">
                <AlertTriangle className="w-5 h-5" />
            </div>
            <p className="text-sm font-medium text-red-300 mb-1">{title}</p>
            <p className="text-xs text-red-400/80 max-w-md mb-3">{message}</p>
            {onRetry && (
                <Button
                    variant="outline"
                    size="sm"
                    onClick={onRetry}
                    icon={<RefreshCw className="w-3.5 h-3.5" />}
                    className="text-xs border-red-500/30 text-red-300 hover:bg-red-500/10"
                >
                    Retry Connection
                </Button>
            )}
        </div>
    );
};
