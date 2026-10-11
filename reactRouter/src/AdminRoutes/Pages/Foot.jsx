const AdminFooter = () => {
return ( <footer className="border-t border-slate-200 bg-white"> <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center sm:flex-row sm:text-left"> <p className="text-sm text-slate-500">
© {new Date().getFullYear()} AdminPanel. All rights reserved. </p>

    <div className="flex gap-5 text-sm text-slate-500">
      <a href="#" className="transition hover:text-blue-600">
        Privacy
      </a>
      <a href="#" className="transition hover:text-blue-600">
        Support
      </a>
    </div>
  </div>
</footer>
);
};

export default AdminFooter;
