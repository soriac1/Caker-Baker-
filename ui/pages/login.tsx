import { Auth  } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Layout from '@/components/layout'
import Account from '@/components/Account'


const LoginPage = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  

  return (
    <Layout>
    <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
      {!session ? (
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="evenDarker" />
      ) : (
        <Account session ={session}/>
        
      )}
      </div>
    </div>
    </Layout>
  )
}



export default LoginPage