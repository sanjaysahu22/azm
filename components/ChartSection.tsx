 export const ChartSection = ({ title, children  ,height}: { title: string; children: React.ReactNode;height:string }) => (
    <div className={`bg-white p-4 rounded-lg shadow min-h-${height}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <select className="border-none bg-transparent text-sm">
          <option>Annual</option>
        </select>
      </div>
      {children}
    </div>
  )