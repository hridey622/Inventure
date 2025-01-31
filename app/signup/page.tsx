import AuthForm from '../components/AuthForm'

export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Sign Up</h1>
      <AuthForm mode="signup" />
    </div>
  )
}

