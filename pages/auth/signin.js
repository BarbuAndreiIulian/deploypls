import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

//Browser...
const signin = (providers) => {
  return (
    <div>
      <>
        <Header />

        <div className=" flex flex-col items-center min-h-screen justify-center py-2 pt-56 -mt-56 ">
          <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
          <p>This is not a REAL app it is built for educational purpose only</p>

          <div className=" mt-40">
            {Object.values(providers).map((provider) => (
              <div key={provider.google.name}>
                <button
                  className="p-3 bg-blue-500 rounded-lg text-white"
                  onClick={() =>
                    signIn(provider.google.id, { callbackUrl: "/" })
                  }
                >
                  Sign in with {provider.google.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

//Server side render
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default signin;
