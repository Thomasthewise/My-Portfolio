export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
      {subtitle && (
        <p className="text-indigo-500 text-lg mt-2">{subtitle}</p>
      )}
    </div>
  );
}
