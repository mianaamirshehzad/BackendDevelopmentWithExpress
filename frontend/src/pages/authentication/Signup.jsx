import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with real signup API call
    console.log("Signup submit:", { email, password });
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h1 style={styles.title}>Register your Account</h1>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '16px',
    background: '#f5f7fa'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    width: '340px',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
    background: '#ffffff'
  },
  title: {
    margin: 0,
    textAlign: 'center',
    fontSize: '18px'
  },
  input: {
    padding: '10px 12px',
    fontSize: '14px',
    borderRadius: '6px',
    border: '1px solid #ddd',
    outline: 'none'
  },
  button: {
    padding: '10px 12px',
    borderRadius: '6px',
    border: 'none',
    background: '#1976d2',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: '600'
  }
}

export default Signup;
