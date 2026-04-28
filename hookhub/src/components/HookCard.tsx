import { Hook, HookCategory } from '@/types/hook';

interface HookCardProps {
  hook: Hook;
}

const categoryColors: Record<string, string> = {
  [HookCategory.MONITORING]: 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
  [HookCategory.SECURITY]: 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300',
  [HookCategory.WORKFLOW]: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
  [HookCategory.TESTING]: 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
  [HookCategory.INTEGRATION]: 'bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300',
  [HookCategory.UTILITY]: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
  [HookCategory.LEARNING]: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300',
  [HookCategory.TEAM]: 'bg-pink-50 text-pink-700 dark:bg-pink-950 dark:text-pink-300',
};

const languageColors: Record<string, string> = {
  'Python': 'bg-yellow-400',
  'JavaScript': 'bg-yellow-300',
  'TypeScript': 'bg-blue-500',
  'PHP': 'bg-indigo-500',
  'Go': 'bg-cyan-400',
};

export default function HookCard({ hook }: HookCardProps) {
  return (
    <div className="group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-100/50 dark:hover:shadow-black/30 transition-all duration-300 flex flex-col gap-4">

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug line-clamp-1">
          {hook.name}
        </h3>
        {hook.featured && (
          <span className="flex-shrink-0 text-xs font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
            Featured
          </span>
        )}
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed -mt-2">
        {hook.description}
      </p>

      <div className="flex items-center gap-2 flex-wrap">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[hook.category]}`}>
          {hook.category}
        </span>
        <div className="flex items-center gap-1.5">
          <div className={`w-2.5 h-2.5 rounded-full ${languageColors[hook.language] || 'bg-gray-400'}`} />
          <span className="text-xs text-gray-500 dark:text-gray-400">{hook.language}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {hook.hookTypes.map((type) => (
          <span
            key={type}
            className="text-xs bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 px-2 py-0.5 rounded-md"
          >
            {type}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-1 border-t border-gray-100 dark:border-gray-800">
        <span className="text-xs text-gray-400 dark:text-gray-500">
          by <span className="text-gray-600 dark:text-gray-300 font-medium">{hook.author}</span>
        </span>
        {hook.stars && (
          <div className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-medium text-gray-600 dark:text-gray-300">{hook.stars}</span>
          </div>
        )}
      </div>

      <a
        href={hook.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white px-4 py-2.5 rounded-xl transition-all duration-200 hover:opacity-90 active:scale-95"
        style={{ backgroundColor: '#156082' }}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
        </svg>
        View on GitHub
      </a>
    </div>
  );
}