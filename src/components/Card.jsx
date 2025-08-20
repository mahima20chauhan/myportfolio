export function Card({ className = "", children }) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ className = "", children }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}
