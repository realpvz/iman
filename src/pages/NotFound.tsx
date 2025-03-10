
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary/10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gray-900">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft size={18} />
          Return Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
