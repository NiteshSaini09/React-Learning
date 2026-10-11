const Orders = () => {
const orders = [
{
id: "#ORD-1001",
customer: "Rahul Sharma",
date: "11 Oct 2026",
amount: "₹2,499",
status: "Delivered",
},
{
id: "#ORD-1002",
customer: "Priya Verma",
date: "10 Oct 2026",
amount: "₹1,799",
status: "Pending",
},
{
id: "#ORD-1003",
customer: "Aman Singh",
date: "10 Oct 2026",
amount: "₹3,299",
status: "Processing",
},
{
id: "#ORD-1004",
customer: "Sneha Gupta",
date: "09 Oct 2026",
amount: "₹999",
status: "Cancelled",
},
];

const statusStyles = {
Delivered: "bg-emerald-100 text-emerald-700",
Pending: "bg-amber-100 text-amber-700",
Processing: "bg-blue-100 text-blue-700",
Cancelled: "bg-red-100 text-red-700",
};

return ( <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8"> <div className="mx-auto max-w-7xl"> <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"> <div> <h2 className="text-3xl font-bold text-slate-900">
Orders </h2> <p className="mt-2 text-slate-500">
Track and manage all customer orders. </p> </div>

```
      <button className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
        + Create Order
      </button>
    </div>

    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <p className="text-sm text-slate-500">All Orders</p>
        <p className="mt-2 text-2xl font-bold text-slate-900">
          1,248
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <p className="text-sm text-slate-500">Pending</p>
        <p className="mt-2 text-2xl font-bold text-amber-600">
          24
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <p className="text-sm text-slate-500">Delivered</p>
        <p className="mt-2 text-2xl font-bold text-emerald-600">
          982
        </p>
      </div>
    </div>

    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 p-5">
        <h3 className="font-bold text-slate-900">
          Recent Orders
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-175 text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
            <tr>
              <th className="px-6 py-4">Order ID</th>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {orders.map((order) => (
              <tr
                key={order.id}
                className="transition hover:bg-slate-50"
              >
                <td className="px-6 py-5 font-semibold text-blue-600">
                  {order.id}
                </td>
                <td className="px-6 py-5 font-medium text-slate-800">
                  {order.customer}
                </td>
                <td className="px-6 py-5 text-slate-500">
                  {order.date}
                </td>
                <td className="px-6 py-5 font-semibold text-slate-800">
                  {order.amount}
                </td>
                <td className="px-6 py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <button className="font-semibold text-blue-600 hover:text-blue-800">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</main>

);
};

export default Orders;
