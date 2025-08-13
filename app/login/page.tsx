import { login, signup } from '@/app/login/actions'
export default function LoginPage() {
  return (
    <form>
      <div>
        <label htmlFor="email">
          Email:
        </label>
        <input 
          id="email" 
          name="email" 
          type="email" 
          required 
        />
      </div>
      <div>
        <label htmlFor="password">
          Password:
        </label>
        <input 
          id="password" 
          name="password" 
          type="password" 
          required 
        />
      </div>
      <div>
        <button 
          formAction={login}
        >
          Log in
        </button>
        <button 
          formAction={signup}
        >
          Sign up
        </button>
      </div>
    </form>
  )
}