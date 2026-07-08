"use client";

interface Props {
  onLogout: () => void;
}

export default function SettingsPanel({ onLogout }: Props) {
  return (
    <div className="content">
      <div className="phead">
        <div>
          <h1>Account</h1>
          <p>Your profile and preferences.</p>
        </div>
      </div>

      <div className="acct-head">
        <span className="big">AU</span>
        <div>
          <b>Admin User</b>
          <span>GTECH Admin · admin@gtech.com</span>
        </div>
      </div>

      <div className="setcard">
        <h3>Profile</h3>
        <div className="frow">
          <div className="fld">
            <label>Full name</label>
            <input className="inp" defaultValue="Admin User" readOnly />
          </div>
          <div className="fld">
            <label>Mobile (WhatsApp)</label>
            <input className="inp" defaultValue="—" readOnly />
          </div>
          <div className="fld">
            <label>Email</label>
            <input className="inp" defaultValue="admin@gtech.com" readOnly />
          </div>
          <div className="fld">
            <label>City</label>
            <input className="inp" defaultValue="—" readOnly />
          </div>
        </div>
      </div>

      <div className="setcard">
        <h3>Preferences</h3>
        <div className="frow">
          <div className="fld">
            <label>Language</label>
            <select className="fsel" defaultValue="English">
              <option>English</option>
              <option>हिंदी</option>
            </select>
          </div>
          <div className="fld">
            <label>Theme</label>
            <select className="fsel" defaultValue="Light">
              <option>Dark</option>
              <option>Light</option>
            </select>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 9 }}>
        <button type="button" className="btn pri">
          Save changes
        </button>
        <button type="button" className="btn" onClick={onLogout}>
          Log out
        </button>
      </div>
    </div>
  );
}
