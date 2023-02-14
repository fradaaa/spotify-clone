import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Formik } from "formik";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { SubmitButton } from "../../components/Buttons";
import TextInput from "../../components/Forms/TextInput";
import { StyledCreatePlaylistForm } from "../../components/Modals/style";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return {
    props: {},
  };
};

type Values = {
  email: string;
  password: string;
};

const initialValues: Values = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required("Required").email("Invalid email address"),
  password: Yup.string()
    .required("Required")
    .min(8, "Must be at least 8 characters")
    .max(20, "Must be 20 characters or less")
    .trim("No leading and trailing whitespaces")
    .strict(),
});

const AuthPage = () => {
  const router = useRouter();
  const supabase = useSupabaseClient();

  return (
    <>
      <Head>
        <title>Spotify Clone - Login</title>
      </Head>
      <div
        style={{
          height: "calc(100vh - 120px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "640px" }}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values: Values) => {
              try {
                const { email, password } = values;
                const { error } = await supabase.auth.signInWithPassword({
                  email,
                  password,
                });

                if (error) {
                  console.error(error);
                } else {
                  router.push("/");
                }
              } catch (error) {
                console.error(error);
              }
            }}
          >
            <StyledCreatePlaylistForm>
              <TextInput
                label="Email"
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
              />
              <TextInput
                label="Password"
                type="password"
                id="password"
                name="password"
                placeholder="Your password"
              />
              <SubmitButton>Login</SubmitButton>
            </StyledCreatePlaylistForm>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
