const LoginHeader = () => {
  return (
    <div className="mb-6 space-y-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-lg">
        🔒
      </div>
      <h2 className="text-2xl font-bold text-slate-900">Login Here</h2>
      <p className="text-sm text-slate-500">
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account.
      </p>
    </div>
  );
};

export default LoginHeader;
