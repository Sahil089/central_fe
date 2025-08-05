import LoginBox from "./LoginBox";

const LoginPage = () => {
  return (
    <div className="h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, #2D033B 0%, #810CA8 25%, #C147E9 75%, #E5B8F4 100%)`
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      {/* Geometric Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-white bg-opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-white bg-opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white bg-opacity-20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-white bg-opacity-10 rounded-full blur-2xl"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-20 w-full max-w-md">
        <LoginBox />
      </div>
      
      {/* Brand/Logo Area */}
      
    </div>
  );
};

export default LoginPage;