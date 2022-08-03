import React, {useState} from "react";



function Login({setActive}) {
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');








  return (
    <>
      <svg width="185" height="52" viewBox="0 0 185 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* it is logo */}
        <path d="M17.8768 18.6C20.1568 18.6 21.8568 19.24 22.9768 20.52C24.0968 21.78 24.6568 23.69 24.6568 26.25C24.6568 28.49 24.2468 30.63 23.4268 32.67C22.6068 34.71 21.3668 36.38 19.7068 37.68C18.0668 38.96 16.0668 39.6 13.7068 39.6C11.4268 39.6 9.71676 38.97 8.57676 37.71C7.45676 36.43 6.89676 34.5 6.89676 31.92C6.89676 29.66 7.30676 27.52 8.12676 25.5C8.94676 23.46 10.1868 21.8 11.8468 20.52C13.5068 19.24 15.5168 18.6 17.8768 18.6ZM17.2768 20.7C16.0568 20.7 15.0868 21.34 14.3668 22.62C13.6668 23.9 13.1068 25.79 12.6868 28.29C12.5068 29.23 12.3468 30.25 12.2068 31.35C12.0868 32.43 12.0268 33.36 12.0268 34.14C12.0268 35.2 12.1968 36.02 12.5368 36.6C12.8768 37.18 13.4568 37.47 14.2768 37.47C15.5168 37.47 16.4868 36.82 17.1868 35.52C17.9068 34.2 18.4668 32.32 18.8668 29.88C19.0468 28.92 19.1968 27.9 19.3168 26.82C19.4568 25.72 19.5268 24.78 19.5268 24C19.5268 22.96 19.3568 22.15 19.0168 21.57C18.6968 20.99 18.1168 20.7 17.2768 20.7ZM32.2062 26.04C32.7462 25.04 33.4662 24.3 34.3662 23.82C35.2862 23.34 36.3362 23.1 37.5162 23.1C40.1762 23.1 41.5062 24.32 41.5062 26.76C41.5062 27.46 41.4162 28.26 41.2362 29.16C41.0762 30.06 40.8362 31.15 40.5162 32.43C40.2562 33.49 40.0662 34.31 39.9462 34.89C39.8262 35.47 39.7662 35.96 39.7662 36.36C39.7662 36.78 39.8462 37.11 40.0062 37.35C40.1862 37.59 40.4862 37.73 40.9062 37.77C40.7262 38.37 40.3462 38.82 39.7662 39.12C39.2062 39.44 38.5662 39.6 37.8462 39.6C37.0062 39.6 36.3462 39.38 35.8662 38.94C35.3862 38.48 35.1462 37.81 35.1462 36.93C35.1462 36.39 35.2162 35.77 35.3562 35.07C35.4962 34.37 35.7362 33.3 36.0762 31.86C36.6562 29.5 36.9462 27.93 36.9462 27.15C36.9462 26.61 36.8162 26.19 36.5562 25.89C36.3162 25.57 35.9462 25.41 35.4462 25.41C34.5462 25.41 33.8262 25.89 33.2862 26.85C32.7462 27.79 32.3462 28.93 32.0862 30.27L30.3762 39L25.6962 39.48L28.7862 23.7L32.6262 23.22L32.2062 26.04ZM47.8449 35.19C47.7449 35.73 47.6949 36.15 47.6949 36.45C47.6949 36.83 47.7849 37.14 47.9649 37.38C48.1649 37.62 48.4549 37.75 48.8349 37.77C48.6549 38.37 48.2849 38.82 47.7249 39.12C47.1649 39.44 46.5249 39.6 45.8049 39.6C44.9649 39.6 44.2949 39.38 43.7949 38.94C43.3149 38.5 43.0749 37.87 43.0749 37.05C43.0749 36.53 43.1749 35.7 43.3749 34.56C43.5749 33.42 43.7549 32.46 43.9149 31.68L46.5849 18L51.3249 17.52L47.8449 35.19ZM57.398 16.89C58.198 16.89 58.838 17.08 59.318 17.46C59.818 17.82 60.068 18.34 60.068 19.02C60.068 19.72 59.808 20.26 59.288 20.64C58.788 21 58.128 21.18 57.308 21.18C56.508 21.18 55.858 21 55.358 20.64C54.858 20.28 54.608 19.76 54.608 19.08C54.608 18.38 54.868 17.84 55.388 17.46C55.908 17.08 56.578 16.89 57.398 16.89ZM56.498 35.19C56.398 35.73 56.348 36.15 56.348 36.45C56.348 36.83 56.438 37.14 56.618 37.38C56.818 37.62 57.108 37.75 57.488 37.77C57.308 38.37 56.938 38.82 56.378 39.12C55.818 39.44 55.178 39.6 54.458 39.6C53.618 39.6 52.948 39.38 52.448 38.94C51.968 38.5 51.728 37.87 51.728 37.05C51.728 36.53 51.828 35.7 52.028 34.56C52.228 33.42 52.408 32.46 52.568 31.68L54.158 23.7L58.868 23.22L56.498 35.19ZM66.1906 26.04C66.7306 25.04 67.4506 24.3 68.3506 23.82C69.2706 23.34 70.3206 23.1 71.5006 23.1C74.1606 23.1 75.4906 24.32 75.4906 26.76C75.4906 27.46 75.4006 28.26 75.2206 29.16C75.0606 30.06 74.8206 31.15 74.5006 32.43C74.2406 33.49 74.0506 34.31 73.9306 34.89C73.8106 35.47 73.7506 35.96 73.7506 36.36C73.7506 36.78 73.8306 37.11 73.9906 37.35C74.1706 37.59 74.4706 37.73 74.8906 37.77C74.7106 38.37 74.3306 38.82 73.7506 39.12C73.1906 39.44 72.5506 39.6 71.8306 39.6C70.9906 39.6 70.3306 39.38 69.8506 38.94C69.3706 38.48 69.1306 37.81 69.1306 36.93C69.1306 36.39 69.2006 35.77 69.3406 35.07C69.4806 34.37 69.7206 33.3 70.0606 31.86C70.6406 29.5 70.9306 27.93 70.9306 27.15C70.9306 26.61 70.8006 26.19 70.5406 25.89C70.3006 25.57 69.9306 25.41 69.4306 25.41C68.5306 25.41 67.8106 25.89 67.2706 26.85C66.7306 27.79 66.3306 28.93 66.0706 30.27L64.3606 39L59.6806 39.48L62.7706 23.7L66.6106 23.22L66.1906 26.04ZM86.4193 23.1C89.4793 23.1 91.0093 24.28 91.0093 26.64C91.0093 28.3 90.2693 29.59 88.7893 30.51C87.3293 31.43 85.3393 31.89 82.8193 31.89H81.7693C81.7093 32.43 81.6793 32.94 81.6793 33.42C81.6793 34.42 81.8793 35.18 82.2793 35.7C82.6793 36.2 83.3593 36.45 84.3193 36.45C85.1593 36.45 85.9393 36.27 86.6593 35.91C87.3793 35.53 87.9293 35 88.3093 34.32C88.7893 34.54 89.0293 34.98 89.0293 35.64C89.0293 36.36 88.7493 37.03 88.1893 37.65C87.6493 38.25 86.9093 38.72 85.9693 39.06C85.0293 39.42 83.9993 39.6 82.8793 39.6C81.0193 39.6 79.5993 39.09 78.6193 38.07C77.6393 37.03 77.1493 35.45 77.1493 33.33C77.1493 31.55 77.4893 29.88 78.1693 28.32C78.8693 26.76 79.9093 25.5 81.2893 24.54C82.6893 23.58 84.3993 23.1 86.4193 23.1ZM85.7593 24.72C84.8793 24.72 84.1093 25.25 83.4493 26.31C82.7893 27.37 82.2993 28.77 81.9793 30.51C83.4193 30.51 84.6293 30.14 85.6093 29.4C86.5893 28.66 87.0793 27.66 87.0793 26.4C87.0793 25.28 86.6393 24.72 85.7593 24.72ZM111.059 19.2L116.189 39H112.649L111.449 33.96H105.569L104.399 39H101.099L106.589 19.2H111.059ZM106.109 31.74H110.939L108.509 21.45L106.109 31.74ZM121.527 17.64V36.54C121.527 37.52 121.837 38.18 122.457 38.52C122.297 38.82 122.027 39.05 121.647 39.21C121.287 39.37 120.907 39.45 120.507 39.45C119.747 39.45 119.177 39.23 118.797 38.79C118.417 38.35 118.227 37.73 118.227 36.93V18L121.527 17.64ZM129.145 21.03C129.145 23.21 129.045 24.81 128.845 25.83C129.225 24.99 129.795 24.33 130.555 23.85C131.315 23.35 132.155 23.1 133.075 23.1C134.975 23.1 136.355 23.86 137.215 25.38C138.075 26.9 138.505 28.82 138.505 31.14C138.505 33.7 137.955 35.76 136.855 37.32C135.755 38.88 134.065 39.66 131.785 39.66C130.805 39.66 129.765 39.53 128.665 39.27C127.585 39.03 126.645 38.69 125.845 38.25V18L129.145 17.64V21.03ZM129.145 36.96C130.025 37.56 130.955 37.86 131.935 37.86C133.155 37.86 133.955 37.24 134.335 36C134.715 34.76 134.905 33.19 134.905 31.29C134.905 29.59 134.715 28.19 134.335 27.09C133.975 25.97 133.225 25.41 132.085 25.41C130.925 25.41 130.145 25.96 129.745 27.06C129.345 28.14 129.145 29.52 129.145 31.2V36.96ZM147.008 23.1C149.248 23.1 150.908 23.83 151.988 25.29C153.068 26.73 153.608 28.68 153.608 31.14C153.608 33.76 153.088 35.84 152.048 37.38C151.008 38.9 149.328 39.66 147.008 39.66C144.728 39.66 143.058 38.93 141.998 37.47C140.958 36.01 140.438 34 140.438 31.44C140.438 28.96 140.978 26.95 142.058 25.41C143.138 23.87 144.788 23.1 147.008 23.1ZM147.008 37.86C148.248 37.86 149.058 37.25 149.438 36.03C149.818 34.81 150.008 33.23 150.008 31.29C150.008 29.51 149.798 28 149.378 26.76C148.978 25.52 148.188 24.9 147.008 24.9C145.028 24.9 144.038 27.03 144.038 31.29C144.038 33.23 144.218 34.81 144.578 36.03C144.958 37.25 145.768 37.86 147.008 37.86ZM156.545 23.7L159.305 23.34L159.455 26.04C159.835 25.08 160.415 24.35 161.195 23.85C161.995 23.35 162.925 23.1 163.985 23.1C165.165 23.1 166.085 23.34 166.745 23.82C167.405 24.28 167.875 24.97 168.155 25.89C168.935 24.03 170.355 23.1 172.415 23.1C174.095 23.1 175.265 23.57 175.925 24.51C176.585 25.43 176.915 26.84 176.915 28.74V36.54C176.915 37.52 177.225 38.18 177.845 38.52C177.685 38.82 177.425 39.05 177.065 39.21C176.705 39.37 176.325 39.45 175.925 39.45C175.145 39.45 174.565 39.23 174.185 38.79C173.805 38.35 173.615 37.73 173.615 36.93V29.16C173.615 27.9 173.475 26.96 173.195 26.34C172.915 25.72 172.295 25.41 171.335 25.41C170.195 25.41 169.435 25.95 169.055 27.03C168.675 28.11 168.485 29.5 168.485 31.2V39H165.185V29.16C165.185 27.9 165.045 26.96 164.765 26.34C164.485 25.72 163.865 25.41 162.905 25.41C161.685 25.41 160.865 25.95 160.445 27.03C160.045 28.11 159.845 29.5 159.845 31.2V39H156.545V23.7Z" fill="white"/>
        <rect x="95.5" y="10.5" width="89" height="36" stroke="#DADADA"/>
      </svg>

      <div className='modal-frame-separator'/>

      <div>
        <input className='modal-frame-input' type='text' placeholder='e-mail' value={email} onChange={ (e) => {setEmail(e.currentTarget.value)} }/>
        <input className='modal-frame-input' type='password' placeholder='password'  value={password} onChange={ (e) => {setPassword(e.currentTarget.value)} }/>
      </div>

      <button className='submit-btn'>Log in</button>

      <div>
        <div className='after-submit-btn-text __forgot-password'>Forgot your password?</div>
        <div className='after-submit-btn-text'>Do not have an account? <span className='__register' onClick={ () => {setActive('register')} }>Register</span></div>
      </div>

      <div className='modal-frame-separator'/>

      <div>
        <div className='after-submit-btn-text'>To open a <span className='highlighted-text'>demo mode</span> use:</div> 
        <div className='after-submit-btn-text'>login: demo & password: demo ;)</div>
      </div>
    </>
  )
}































export default Login