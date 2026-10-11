const Dashboard = () => {
const stats = [
{
title: "Total Revenue",
value: "₹84,250",
change: "+12.5%",
icon: "₹",
color: "bg-blue-100 text-blue-700",
},
{
title: "Total Orders",
value: "1,248",
change: "+8.2%",
icon: "O",
color: "bg-purple-100 text-purple-700",
},
{
title: "Total Customers",
value: "856",
change: "+5.4%",
icon: "C",
color: "bg-emerald-100 text-emerald-700",
},
{
title: "Pending Orders",
value: "24",
change: "Needs attention",
icon: "!",
color: "bg-amber-100 text-amber-700",
},
];

return ( <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8"> <div className="mx-auto max-w-7xl"> <div className="mb-8"> <p className="text-sm font-medium text-blue-600">
OVERVIEW </p> <h2 className="mt-2 text-3xl font-bold text-slate-900">
Dashboard </h2> <p className="mt-2 text-slate-500">
Welcome back! Here's what's happening with your store. </p> </div>

```
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              {stat.title}
            </p>
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-xl font-bold ${stat.color}`}
            >
              {stat.icon}
            </span>
          </div>

          <h3 className="mt-5 text-3xl font-bold text-slate-900">
            {stat.value}
          </h3>

          <p className="mt-3 text-sm text-emerald-600">
            {stat.change}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-slate-900">
        Quick Overview
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">
        Manage your orders, monitor store activity, and keep track
        of your business from one place.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="/orders"
          className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          View Orders
        </a>
        <button
          className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          Download Report
        </button>
      </div>
    </div>
  </div>
</main>

);
};

export default Dashboard;
