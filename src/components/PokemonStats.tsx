export function PokemonStats({ stats }: { stats: PokemonStat[] }): JSX.Element {
  return (
    <table className="w-full my-8 text-left border border-slate-700">
      <thead>
        <tr className="text-left bg-slate-500">
          <th scope="col" className="border border-slate-700">
            Stats
          </th>
          <th scope="col" className="border border-slate-700">
            Base
          </th>
          <th scope="col" className="border border-slate-700">
            Effort
          </th>
        </tr>
      </thead>
      <tbody>
        {stats.map((stat, index) => (
          <tr key={index} className="text-left text-sm">
            <td scope="row" className="p-2 border border-slate-700">
              {stat.stat.name}
            </td>
            <td scope="row" className="p-2 border border-slate-700">
              {stat.base_stat}
            </td>
            <td scope="row" className="p-2 border border-slate-700">
              {stat.effort}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
