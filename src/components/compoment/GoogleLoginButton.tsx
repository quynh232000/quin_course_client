import { useEffect } from 'react';
import { GoogleCredentialResponse, GoogleLoginProps } from '../../types/app';

const GoogleLoginButton = ({ handleLoginWithGoogle }: GoogleLoginProps) => {
    useEffect(() => {
        // Initialize Google Sign-In
        const initializeGoogleSignIn = () => {
          window.google.accounts.id.initialize({
            client_id: '935866557916-vq8egbjf7t3n7t6uo6k15vkivlga0ghs.apps.googleusercontent.com', // replace with your actual Google client ID
            callback: (response: GoogleCredentialResponse) => {
              handleLoginWithGoogle(response);
            },
          });
    
          // Render the Google sign-in button
          window.google.accounts.id.renderButton(
            document.getElementById('google-btn'),
            {
              theme: 'filled_blue',
              size: 'large',
              shape: 'rectangle',
              width: 1000,
            }   
          );
        };
        if (window.google) {
          initializeGoogleSignIn();
        } else {
          window.addEventListener('google-loaded', initializeGoogleSignIn);
        }
    
        return () => {
          window.removeEventListener('google-loaded', initializeGoogleSignIn);
        };
      }, [handleLoginWithGoogle]);
    
      return <div id="google-btn"></div>;
};

export default GoogleLoginButton;