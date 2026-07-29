import { useState } from 'react';

import { cn } from '@/lib/utils';

function CollapsibleWord({ word }: { word: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        setIsExpanded(!isExpanded);
      }}
      title={isExpanded ? 'Click to collapse' : 'Click to expand'}
      className={cn(
        'font-mono text-xs rounded transition-all duration-200 cursor-pointer text-left',
        'bg-zinc-800 text-zinc-200 dark:bg-zinc-950 dark:text-zinc-300 hover:bg-zinc-700 dark:hover:bg-zinc-900',
        !isExpanded
          ? 'inline-block px-1.5 py-0.5 align-middle truncate max-w-30 sm:max-w-45 select-none'
          : 'block w-full mt-1.5 p-2 break-all whitespace-normal overflow-hidden',
      )}
    >
      {!isExpanded ? <span>•••</span> : word}
    </button>
  );
}

export { CollapsibleWord };
