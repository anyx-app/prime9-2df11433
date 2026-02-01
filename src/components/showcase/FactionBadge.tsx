import React from 'react';

type Faction = 'Autobots' | 'Decepticons';

interface FactionBadgeProps {
  faction: Faction;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * FactionBadge Component
 * 
 * Displays the faction insignia (Autobot or Decepticon) with appropriate styling.
 * Autobots are styled in Red, Decepticons in Purple.
 */
export const FactionBadge: React.FC<FactionBadgeProps> = ({
  faction,
  className = '',
  size = 'md',
}) => {
  const isAutobot = faction === 'Autobots';

  // Size classes mapping
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-10 h-10',
  };

  // Color classes mapping
  const colorClass = isAutobot ? 'text-red-600' : 'text-purple-600';
  
  // Optional: Background styling for a badge look if needed, 
  // but sticking to icon-only based on typical "Badge" usage in this context unless specified otherwise.
  // Given the name "Badge", often implies a pill or container, but "renders an SVG icon" suggests the icon itself is paramount.
  // I will wrap it in a subtle container to make it a true "badge".

  const badgeBaseStyles = "inline-flex items-center justify-center rounded-full border shadow-sm";
  const badgeColorStyles = isAutobot 
    ? "bg-red-50 border-red-200 text-red-600 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400" 
    : "bg-purple-50 border-purple-200 text-purple-600 dark:bg-purple-900/20 dark:border-purple-800 dark:text-purple-400";
  
  const containerSize = {
    sm: 'p-1',
    md: 'p-1.5',
    lg: 'p-2',
  };

  return (
    <div
      className={`${badgeBaseStyles} ${badgeColorStyles} ${containerSize[size]} ${className}`}
      title={faction}
      role="img"
      aria-label={`${faction} Insignia`}
    >
      <svg
        viewBox="0 0 100 100"
        fill="currentColor"
        className={sizeClasses[size]}
        xmlns="http://www.w3.org/2000/svg"
      >
        {isAutobot ? (
          // Autobot Insignia Path
          <path d="M23,83 L23,61 L36,61 L36,54 L29,54 L29,43 L23,43 L28,26 L35,26 L39,12 L61,12 L65,26 L72,26 L77,43 L71,43 L71,54 L64,54 L64,61 L77,61 L77,83 L68,83 L68,73 L58,73 L58,83 L42,83 L42,73 L32,73 L32,83 Z M42,66 L58,66 L58,55 L42,55 Z M45,46 L55,46 L55,36 L45,36 Z" />
        ) : (
          // Decepticon Insignia Path
          <path d="M28,85 L32,72 L23,72 L18,50 L27,50 L31,31 L20,15 L43,15 L50,28 L57,15 L80,15 L69,31 L73,50 L82,50 L77,72 L68,72 L72,85 L59,85 L56,76 L52,85 L48,85 L44,76 L41,85 Z M44,66 L56,66 L59,57 L41,57 Z M41,53 L59,53 L62,40 L38,40 Z" />
        )}
      </svg>
    </div>
  );
};
