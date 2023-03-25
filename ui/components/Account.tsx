import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

interface ProfileData {
  username: string | null
  firstName: string | null
  lastName: string | null
}

export default function Account({ session }: { session: any }) {
  const supabase = useSupabaseClient()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState<ProfileData>({
    username: null,
    firstName: null,
    lastName: null,
  })

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('customer')
        .select(`username, firstName, lastName`)
        .eq('customer_id', user?.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setProfile({
          username: data.username,
          firstName: data.firstName,
          lastName: data.lastName,
        })
      }
    } catch (error) {
      alert('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ username, firstName, lastName }: ProfileData) {
    try {
      setLoading(true)

      const updates = {
        id: user?.id,
        username,
        firstName,
        lastName,
        updated_at: new Date().toISOString(),
      }

      let { error } = await supabase.from('customer').upsert(updates)
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-widget">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session.user?.email} disabled />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={profile.username || ''}
          onChange={(e) =>
            setProfile({ ...profile, username: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          value={profile.firstName || ''}
          onChange={(e) =>
            setProfile({ ...profile, firstName: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          value={profile.lastName || ''}
          onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
        />
      </div>

      <div>
        <button
          className="button primary block"
          onClick={() => updateProfile(profile)}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <button className="button block" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  )
}