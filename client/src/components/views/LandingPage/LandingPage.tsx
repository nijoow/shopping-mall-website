import Auth from "../../../hoc/auth";

function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center text-3xl font-extrabold text-gray-900 ">
      LandingPage
    </div>
  );
}

export default Auth(LandingPage, false);
