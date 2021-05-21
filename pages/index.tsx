import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user, error, isLoading } = useUser();

  !isLoading && !error && console.log(user);

  return (
    <div>
      <a href="/api/auth/login">
        <button>LOGIN</button>
      </a>
      <a href="/api/auth/logout">
        <button>LOGOUT</button>
      </a>
    </div>
  );
}
