import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Formik } from "formik";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { SubmitButton } from "../../components/Buttons";
import TextInput from "../../components/Forms/TextInput";
import { StyledLink } from "../../components/Globals";
import { StyledCreatePlaylistForm } from "../../components/Modals/style";

type Values = {
  name: string;
  email: string;
  password: string;
};

const initialValues: Values = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Required")
    .max(30, "Must be 30 characters or less")
    .trim("No leading and trailing whitespaces")
    .strict(),
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
        <title>Spotify Clone - Sign Up</title>
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
                const { email, password, name } = values;
                const { error } = await supabase.auth.signUp({
                  email,
                  password,
                  options: {
                    data: {
                      name,
                    },
                  },
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
            <StyledCreatePlaylistForm
              style={{
                background: "#121212",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <TextInput
                label="Name"
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
              />
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
              <SubmitButton>Sign up</SubmitButton>
              <p style={{ color: "white" }}>
                Already have an account?{" "}
                <Link href="/auth/login" passHref>
                  <StyledLink>Login</StyledLink>
                </Link>
              </p>
            </StyledCreatePlaylistForm>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
