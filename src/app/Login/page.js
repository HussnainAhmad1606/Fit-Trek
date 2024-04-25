import React from "react";
import styles from './styles.css'
const Login = () => {
  return (
    <body className="h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
 
      <div class="wrapper">
        <span class="icon-close">
          <ion-icon name="close"></ion-icon>
        </span>

        <div class="form-box login">
          <h2>Login</h2>
          <form action="#">
            <div class="input-box">
              <span class="icon">
                <ion-icon name="mail-open"></ion-icon>
              </span>
              <input type="email" required />
              <label>Email</label>
            </div>
            <div class="input-box">
              <span class="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input type="password" required />
              <label>Password</label>
            </div>

            <div class="remember-forget">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
              <a href="#">Forget Password?</a>
            </div>
            <button type="submit" class="btn">
              Login
            </button>
            <div class="login-register">
              <p>
                Don't have an Account?{" "}
                <a href="register.html" class="register link">
                  Register
                </a>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>

      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      ></script>
    </body>
  );
};

export default Login;
