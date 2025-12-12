'use client';

import Image from 'next/image';

export default function ProjectCardImage({ project }) {
  const src = project?.image || '/placeholder.png';
  const title = project?.title || 'Project image';
  const category = project?.category || '';

  return (
    <div className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/80 shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold">{title}</h3>
        {category && <p className="text-zinc-400 text-sm mt-1">{category}</p>}
      </div>
    </div>
  );
}
