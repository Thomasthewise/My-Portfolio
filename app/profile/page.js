"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData?.user) return;

      const { data: profileData, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", userData.user.id)
        .single();

      if (error) console.error("Profile fetch error:", error);
      else setProfile(profileData);
    };

    fetchProfile();
  }, []);

  if (!profile) return <p>Loading your profile…</p>;

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
      <p><strong>Username:</strong> {profile.username}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Joined:</strong> {new Date(profile.created_at).toLocaleString()}</p>
    </div>
  );
}
