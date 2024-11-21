export default function StateItem({ title, stats, link }: { title: string, stats: string | number, link?: string }) {
  return (
    <div className="flex items-center gap-5">
      <div className="text-3xl font-bold text-blue-500">{stats}</div>
      {
        link ? <a className="text-lg" href={link}>{title}</a> : <div>{title}</div>
      }
    </div>
  )
}